import { atom } from "jotai";

import { localData } from "@/types";

export const visibleModalAtom = atom(false);

export const visibleListAtom = atom(false);

export const localDataAtom = atom<localData>({
  country: "",
  code: "",
  timezone: "",
  timeStamp: new Date(),
});
