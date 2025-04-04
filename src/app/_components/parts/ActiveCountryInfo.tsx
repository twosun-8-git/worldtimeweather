"use client";

import { useAtomValue } from "jotai";

import { activeCountryAtom } from "@/app/_atoms";
import { CountryDateWeather, CountryTimezone } from "@/app/_components/widgets";

export function ActiveCotunryInfo() {
  const activeCountry = useAtomValue(activeCountryAtom);

  const { country, code, timezone } = activeCountry;

  return (
    <div className="flex items-start w-full justify-between md:items-center pc:px-1">
      <CountryTimezone country={country} code={code} timezone={timezone} />
      <CountryDateWeather timezone={timezone} />
    </div>
  );
}
