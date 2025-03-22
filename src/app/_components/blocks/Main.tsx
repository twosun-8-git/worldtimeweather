"use client";

import { ReactNode, useEffect, useState } from "react";
import { useSetAtom } from "jotai";

import { LOCAL_STORAGE_KEY_ACTIVE } from "@/consts";
import { useFetchGeoInfo } from "@/app/_hooks";
import { activeCountryAtom } from "@/app/_atoms";

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
          const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_ACTIVE);

          if (storedData) {
            const parsedData = JSON.parse(storedData);
            parsedData.code = parsedData.code.toLowerCase();

            setLocalData(parsedData);
          } else {
            const fetchedData = await fetchGeoInfo();

            if (fetchedData) {
              setLocalData(fetchedData);
              localStorage.setItem(
                LOCAL_STORAGE_KEY_ACTIVE,
                JSON.stringify(fetchedData)
              );
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
