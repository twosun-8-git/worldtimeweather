"use client";
import { useCallback } from "react";

export function useFetchWeather() {
  const fetchWeather = useCallback(async (timezone: string) => {
    try {
      const res = await fetch("/api/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ timezone }),
      });

      if (!res.ok) {
        throw new Error(`エラー: ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (err) {
      console.error("エラー:", err);
      return null;
    }
  }, []);

  return fetchWeather;
}
