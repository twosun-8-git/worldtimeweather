"use client";

export function useFetchGeoInfo() {
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

      return localData;
    } catch (err) {
      console.error("エラー:", err);
      return null;
    }
  };

  return fetchGeoInfo;
}
