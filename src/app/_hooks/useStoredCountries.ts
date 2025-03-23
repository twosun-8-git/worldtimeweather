import { useEffect } from "react";
import { useSetAtom } from "jotai";

import { LOCAL_STORAGE_KEY_COUNTRIES } from "@/consts";
import { storedCountriesAtom } from "@/app/_atoms";
import { getStoredCountriesByStorage } from "@/utils";

export function useStoredCountries() {
  const storageKey = LOCAL_STORAGE_KEY_COUNTRIES;

  const setStoredCountries = useSetAtom(storedCountriesAtom);

  useEffect(() => {
    const countries = getStoredCountriesByStorage();

    setStoredCountries(countries);
  }, [setStoredCountries, storageKey]);

  const getStoredCountries = getStoredCountriesByStorage();

  const saveCountry = (code: string): void => {
    const countries = getStoredCountriesByStorage();

    if (!countries.includes(code)) {
      const updatedCountries = [...countries, code];

      localStorage.setItem(storageKey, JSON.stringify(updatedCountries));
      setStoredCountries(updatedCountries);
    }
  };

  const removeCountry = (code: string): void => {
    const countries = getStoredCountriesByStorage();

    const updatedCountries = countries.filter((item) => item !== code);

    localStorage.setItem(storageKey, JSON.stringify(updatedCountries));
    setStoredCountries(updatedCountries);
  };

  const isCountrySaved = (code: string): boolean => {
    const countries = getStoredCountriesByStorage();

    return countries.includes(code);
  };

  return {
    getStoredCountries,
    saveCountry,
    removeCountry,
    isCountrySaved,
  };
}
