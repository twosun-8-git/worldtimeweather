import { useEffect } from "react";
import { useSetAtom } from "jotai";

import { LOCAL_STORAGE_KEY_COUNTRIES } from "@/consts";
import { storedCountriesAtom } from "@/app/_atoms";
import { getLocalStorage, setLocalStorageArray } from "@/utils";

export function useStoredCountries() {
  const key = LOCAL_STORAGE_KEY_COUNTRIES;

  const setStoredCountries = useSetAtom(storedCountriesAtom);

  useEffect(() => {
    const countries = getLocalStorage(key, true);

    setStoredCountries(countries);
  }, [setStoredCountries, key]);

  const getStoredCountries = getLocalStorage(key, true);

  const saveCountry = (code: string): void => {
    const countries = getLocalStorage(key, true);

    if (!countries.includes(code)) {
      const updatedCountries = [...countries, code];

      setLocalStorageArray(key, updatedCountries);
      setStoredCountries(updatedCountries);
    }
  };

  const removeCountry = (code: string): void => {
    const countries = getLocalStorage(key, true);

    const updatedCountries = countries.filter((item: string) => item !== code);

    setLocalStorageArray(key, updatedCountries);
    setStoredCountries(updatedCountries);
  };

  const isCountrySaved = (code: string): boolean => {
    const countries = getLocalStorage(key, true);

    return countries.includes(code);
  };

  return {
    getStoredCountries,
    saveCountry,
    removeCountry,
    isCountrySaved,
  };
}
