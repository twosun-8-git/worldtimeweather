import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import { ActiveCountryData } from "@/types";
import {
  LOCAL_STORAGE_KEY_ACTIVE,
  LOCAL_STORAGE_KEY_COUNTRIES,
} from "@/consts";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export const saveActiveCountryToStorage = (
  countryData: ActiveCountryData
): void => {
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
    return parsedData as ActiveCountryData;
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
