import { useState, useEffect } from "react";

import countriesData from "@/data/countries.json";
import { ActiveCountryData } from "@/types";
import { LOCAL_STORAGE_KEY_ACTIVE } from "@/consts";

export function useActiveCountry() {
  const [activeCountry, setActiveCountry] = useState<ActiveCountryData | null>(
    null
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_ACTIVE);
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setActiveCountry(parsedData);
      } catch (e) {
        console.error("Error parsing active country data:", e);
      }
    }
  }, []);

  const findCountryByCode = (code: string) => {
    const normalizedCode = code.toLowerCase();

    return countriesData.find(
      (country) =>
        country["code-2"].toLowerCase() === normalizedCode ||
        country["code-3"].toLowerCase() === normalizedCode
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
      code: countryData["code-2"].toUpperCase(), // 2文字コードを大文字で統一
      timezone: countryData.timezone,
      timeStamp: new Date().toISOString(),
    };

    setActiveCountry(newActiveCountry);

    if (typeof window !== "undefined") {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_ACTIVE,
        JSON.stringify(newActiveCountry)
      );
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
