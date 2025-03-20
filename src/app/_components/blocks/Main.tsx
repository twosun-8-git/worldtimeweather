"use client";

import { ReactNode } from "react";
import { useSetAtom } from "jotai";

import { useGeoInfo } from "@/app/_hooks/useGeoInfo";
import { localDataAtom } from "@/app/_atoms";

type Props = {
  children: ReactNode;
};

export function Main({ children }: Props) {
  const setLocalData = useSetAtom(localDataAtom);

  const geoInfoByLocalStorage = localStorage.getItem("wtw_active");
  const fetchGeoInfo = useGeoInfo();

  if (geoInfoByLocalStorage) {
    setLocalData(JSON.parse(geoInfoByLocalStorage));
  } else {
    fetchGeoInfo();
  }

  return <main className="w-full">{children}</main>;
}
