"use client";

import { useAtomValue } from "jotai";

import { cn } from "@/utils";
import { activeCountryAtom } from "@/app/_atoms";

import {
  CountryTimezone,
  Today,
  Weather,
  Temp,
} from "@/app/_components/widgets";

export function ActiveCotunryInfo() {
  const activeCountry = useAtomValue(activeCountryAtom);

  const { country, code, timezone } = activeCountry;

  const style =
    "flex flex-col gap-y-1 text-gray-500 text-xs border border-gray-100 p-2 rounded";

  const mdStyle = "md:text-sm md:border-none md:p-0 md:flex-row md:gap-x-2";

  const containerStyle = "pc:gap-x-4";

  return (
    <div className="flex items-start w-full justify-between md:items-center pc:px-1">
      <CountryTimezone country={country} code={code} timezone={timezone} />
      <div className={cn(style, mdStyle, containerStyle)}>
        <Today />
        <Weather />
        <Temp />
      </div>
    </div>
  );
}
