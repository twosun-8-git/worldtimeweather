"use client";

import { ReactNode, useEffect, useState } from "react";
import { useSetAtom } from "jotai";

import {
  LOCAL_STORAGE_KEY_ACTIVE_COUNTRY,
  LOCAL_STORAGE_KEY_COUNTRIES,
} from "@/consts";
import { useFetchGeoInfo } from "@/app/_hooks";
import { activeCountryAtom, storedCountriesAtom } from "@/app/_atoms";
import { getLocalStorage, setLocalStorage } from "@/utils";

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
          const storedActiveCountry = getLocalStorage(
            LOCAL_STORAGE_KEY_ACTIVE_COUNTRY
          );

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
                setLocalStorage(LOCAL_STORAGE_KEY_ACTIVE_COUNTRY, fetchedData);
              }
            } else {
              storedActiveCountry.code = storedActiveCountry.code;
              setActiveCountry(storedActiveCountry);
            }
          } else {
            const fetchedData = await fetchGeoInfo();

            if (fetchedData) {
              setActiveCountry(fetchedData);
              setLocalStorage(LOCAL_STORAGE_KEY_ACTIVE_COUNTRY, fetchedData);
            }
          }

          const storedCountries = getLocalStorage(
            LOCAL_STORAGE_KEY_COUNTRIES,
            true
          );
          if (storedCountries && storedCountries.length > 0) {
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
