"use client";

import { ReactNode, useEffect, useState } from "react";
import { useSetAtom } from "jotai";

import { useFetchGeoInfo } from "@/app/_hooks";
import { activeCountryAtom, storedCountriesAtom } from "@/app/_atoms";
import {
  getActiveCountryByStorage,
  getStoredCountriesByStorage,
  saveActiveCountryToStorage,
} from "@/utils";

type Props = {
  children: ReactNode;
};

export function Main({ children }: Props) {
  const fetchGeoInfo = useFetchGeoInfo();

  const setActiveCountry = useSetAtom(activeCountryAtom);
  const setStoredCountries = useSetAtom(storedCountriesAtom);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    const initializeGeoData = async () => {
      try {
        if (typeof window !== "undefined") {
          const storedActiveCountry = getActiveCountryByStorage();

          if (storedActiveCountry) {
            const storedTime = new Date(
              storedActiveCountry.timeStamp
            ).getTime();
            const currentTime = new Date().getTime();
            const convertMsByHours = 12 * 60 * 60 * 1000;
            const isDataStale = currentTime - storedTime > convertMsByHours;

            if (isDataStale) {
              const fetchedData = await fetchGeoInfo();
              if (fetchedData) {
                setActiveCountry(fetchedData);
                saveActiveCountryToStorage(fetchedData);
              }
            } else {
              storedActiveCountry.code = storedActiveCountry.code;
              setActiveCountry(storedActiveCountry);
            }
          } else {
            const fetchedData = await fetchGeoInfo();

            if (fetchedData) {
              setActiveCountry(fetchedData);
              saveActiveCountryToStorage(fetchedData);
            }
          }

          const storedCountries = getStoredCountriesByStorage();
          if (storedCountries.length > 0) {
            setStoredCountries(storedCountries);
          }

          setIsInitialized(true);
        }
      } catch (error) {
        console.error("Geo data initialization error:", error);
      }
    };

    initializeGeoData();

    return;
  }, [setActiveCountry, fetchGeoInfo, isInitialized, setStoredCountries]);

  return <main className="w-full">{children}</main>;
}
