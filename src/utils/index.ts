import { twMerge } from "tailwind-merge";

import { type ClassValue, clsx } from "clsx";
import { LOCAL_STORAGE_KEY_COUNTRIES } from "@/consts";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export const getStoredCountries = (): string[] => {
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
