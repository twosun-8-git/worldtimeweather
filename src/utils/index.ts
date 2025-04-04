import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import { ActiveCountry, ActiveWeather } from "@/types";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export const setLocalStorage = (
  key: string,
  data: ActiveCountry | ActiveWeather
) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Failed to set local storage:", error);
    }
  }
};

export const setLocalStorageArray = (
  key: string,
  data: string[] | number[]
) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Failed to set local storage array:", error);
    }
  }
};

export const getLocalStorage = (key: string, isArray = false) => {
  const emptyReturn = isArray ? [] : null;

  if (typeof window === "undefined") return emptyReturn;

  try {
    const storedData = localStorage.getItem(key);
    if (!storedData) return emptyReturn;

    const parsedData = JSON.parse(storedData);

    if (isArray) {
      return Array.isArray(parsedData) ? parsedData : [];
    } else {
      return parsedData;
    }
  } catch (error) {
    console.error("Failed to get local storage:", error);
    return emptyReturn;
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
