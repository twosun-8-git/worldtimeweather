"use client";

import { ReactNode, useEffect, useState } from "react";
import { useSetAtom } from "jotai";

import { useFetchGeoInfo } from "@/app/_hooks";
import { activeCountryAtom } from "@/app/_atoms";
import { getActiveCountryByStorage, saveActiveCountryToStorage } from "@/utils";

type Props = {
  children: ReactNode;
};

export function Main({ children }: Props) {
  const fetchGeoInfo = useFetchGeoInfo();
  const setLocalData = useSetAtom(activeCountryAtom);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    const initializeGeoData = async () => {
      try {
        if (typeof window !== "undefined") {
          const storedData = getActiveCountryByStorage();

          if (storedData) {
            const storedTime = new Date(storedData.timeStamp).getTime();
            const currentTime = new Date().getTime();
            const convertMsByHours = 12 * 60 * 60 * 1000;
            const isDataStale = currentTime - storedTime > convertMsByHours;

            if (isDataStale) {
              const fetchedData = await fetchGeoInfo();
              if (fetchedData) {
                setLocalData(fetchedData);
                saveActiveCountryToStorage(fetchedData);
              }
            } else {
              storedData.code = storedData.code.toLowerCase();
              setLocalData(storedData);
            }
          } else {
            const fetchedData = await fetchGeoInfo();

            if (fetchedData) {
              setLocalData(fetchedData);
              saveActiveCountryToStorage(fetchedData);
            }
          }

          setIsInitialized(true);
        }
      } catch (error) {
        console.error("Geo data initialization error:", error);
      }
    };

    initializeGeoData();

    return;
  }, [setLocalData, fetchGeoInfo, isInitialized]);

  return <main className="w-full">{children}</main>;
}
