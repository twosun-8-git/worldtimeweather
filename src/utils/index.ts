import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import { ActiveCountry } from "@/types";
import {
  LOCAL_STORAGE_KEY_ACTIVE,
  LOCAL_STORAGE_KEY_COUNTRIES,
} from "@/consts";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export const saveActiveCountryToStorage = (countryData: ActiveCountry) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_ACTIVE,
        JSON.stringify(countryData)
      );
    } catch (error) {
      console.error("アクティブな国の保存に失敗しました:", error);
    }
  }
};

export const getActiveCountryByStorage = () => {
  if (typeof window === "undefined") return null;

  try {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_ACTIVE);
    if (!storedData) return null;

    const parsedData = JSON.parse(storedData);
    return parsedData;
  } catch (error) {
    console.error("アクティブな国の取得に失敗しました:", error);
    return null;
  }
};

export const getStoredCountriesByStorage = () => {
  if (typeof window === "undefined") return [];

  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_COUNTRIES);
  if (!storedData) return [];

  try {
    const countries = JSON.parse(storedData);
    return Array.isArray(countries) ? countries : [];
  } catch (e) {
    console.error("Error parsing stored countries:", e);
    return [];
  }
};

export function getDateByTimezone(timezone: string) {
  if (!timezone) return;

  try {
    const now = new Date();

    const displayFormatter = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      timeZone: timezone,
    });

    const isoFormatter = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: timezone,
    });

    const displayDate = displayFormatter.format(now);
    const isoDate = isoFormatter.format(now);

    return {
      display: displayDate,
      iso: isoDate,
    };
  } catch (error) {
    console.error(`タイムゾーン '${timezone}' が無効です:`, error);
    return "Invalid timezone";
  }
}
