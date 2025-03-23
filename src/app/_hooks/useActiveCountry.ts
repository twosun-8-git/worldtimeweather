import { useEffect } from "react";
import { useAtom } from "jotai";

import countriesData from "@/data/countries.json";
import { activeCountryAtom } from "@/app/_atoms";
import { ActiveCountryData } from "@/types";
import { getActiveCountryByStorage, saveActiveCountryToStorage } from "@/utils";

export function useActiveCountry() {
  const [activeCountry, setActiveCountry] = useAtom(activeCountryAtom);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedData = getActiveCountryByStorage();
    if (storedData) {
      try {
        setActiveCountry(storedData);
      } catch (e) {
        console.error("Error parsing active country data:", e);
      }
    }
  }, [setActiveCountry]);

  const findCountryByCode = (code: string) => {
    const normalizedCode = code.toLowerCase();

    return countriesData.find(
      (country) =>
        country.code2.toLowerCase() === normalizedCode ||
        country.code3.toLowerCase() === normalizedCode
    );
  };

  const setActiveCountryByCode = (code: string) => {
    if (!code) {
      console.error("Country code is required");
      return;
    }

    const countryData = findCountryByCode(code);

    if (!countryData) {
      console.error(`Country not found for code: ${code}`);
      return;
    }

    const newActiveCountry: ActiveCountryData = {
      country: countryData.name,
      code: countryData.code2,
      timezone: countryData.timezone,
      timeStamp: new Date().toISOString(),
    };

    setActiveCountry(newActiveCountry);

    if (typeof window !== "undefined") {
      saveActiveCountryToStorage(newActiveCountry);
    }
  };

  const getActiveCountry = () => {
    return activeCountry;
  };

  return {
    activeCountry,
    setActiveCountryByCode,
    getActiveCountry,
  };
}
