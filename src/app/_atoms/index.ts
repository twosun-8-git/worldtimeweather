import { atom } from "jotai";

import { ActiveCountry, ActiveWeather } from "@/types";

export const visibleModalAtom = atom(false);

export const visibleListAtom = atom(false);

export const activeCountryAtom = atom<ActiveCountry>({
  country: "",
  code: "",
  timezone: "",
  timeStamp: new Date(),
});

export const activeWeatherAtom = atom<ActiveWeather>({
  name: "",
  region: "",
  country: "",
  timezone: "",
  temp_c: 0,
  temp_f: 0,
  condition: {
    text: "",
    icon: "",
    code: 0,
  },
  updated: "",
});

export const storedCountriesAtom = atom<string[]>([]);
