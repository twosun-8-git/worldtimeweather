import { LOCAL_STORAGE_KEY_COUNTRIES } from "@/consts";
import { useActiveCountry } from "./useActiveCountry";

export function useStoredCountries(storageKey = LOCAL_STORAGE_KEY_COUNTRIES) {
  const { setActiveCountryByCode } = useActiveCountry();

  const getStoredCountries = (): string[] => {
    if (typeof window === "undefined") return [];

    const storedData = localStorage.getItem(storageKey);
    if (!storedData) return [];

    try {
      const countries = JSON.parse(storedData);
      return Array.isArray(countries) ? countries : [];
    } catch (e) {
      console.error("Error parsing stored countries:", e);
      return [];
    }
  };

  const saveCountry = (code: string): void => {
    const countries = getStoredCountries();

    if (!countries.includes(code)) {
      countries.push(code);
      setActiveCountryByCode(code);
      localStorage.setItem(storageKey, JSON.stringify(countries));
    }
  };

  const removeCountry = (code: string): void => {
    const countries = getStoredCountries();
    const updatedCountries = countries.filter((item) => item !== code);
    localStorage.setItem(storageKey, JSON.stringify(updatedCountries));
  };

  const isCountrySaved = (code: string): boolean => {
    const countries = getStoredCountries();
    return countries.includes(code);
  };

  return {
    getStoredCountries,
    saveCountry,
    removeCountry,
    isCountrySaved,
  };
}
