"use client";

import { useSetAtom } from "jotai";

import { localDataAtom } from "@/app/_atoms";

export function useGeoInfo() {
  const setLocalData = useSetAtom(localDataAtom);

  // 非同期関数を定義して返す
  const fetchGeoInfo = async () => {
    try {
      const res = await fetch("/api/geoip");
      if (!res.ok) {
        throw new Error(`エラー: ${res.status}`);
      }

      const data = await res.json();
      const localData = {
        country: data.country,
        code: data.countryCode,
        timezone: data.timezone,
        timeStamp: new Date(),
      };

      setLocalData(localData);

      localStorage.setItem("wtw_active", JSON.stringify(localData));

      return localData;
    } catch (err) {
      console.error("エラー:", err);
      return null;
    }
  };

  return fetchGeoInfo;
}
