import { atom } from "jotai";

import { ActiveCountryData } from "@/types";

export const visibleModalAtom = atom(false);

export const visibleListAtom = atom(false);

export const activeCountryAtom = atom<ActiveCountryData>({
  country: "",
  code: "",
  timezone: "",
  timeStamp: new Date(),
});
