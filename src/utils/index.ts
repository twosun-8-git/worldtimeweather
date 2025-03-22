import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import { ActiveCountryData } from "@/types";
import { LOCAL_STORAGE_KEY_ACTIVE } from "@/consts";

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
