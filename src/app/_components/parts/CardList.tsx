"use client";

import countriesData from "@/data/countries.json";
import { CardItem } from "@/app/_components/widgets";

import { useAtomValue } from "jotai";

import { storedCountriesAtom } from "@/app/_atoms";

export function CardList() {
  const storedCountries = useAtomValue(storedCountriesAtom);

  if (storedCountries.length < 1) {
    return;
  }

  const filteredCountries = countriesData.filter((country) =>
    storedCountries.includes(country["code-2"])
  );

  return (
    <div className="pt-8 px-1">
      <p className="text-xs text-gray-300 sm:text-sm">
        Your Histories ( It is lost when the browser history cleared )
      </p>
      <div className="pt-2 pb-4 sm:pt-4 sm:overflow-x-scroll">
        <div className="flex flex-col gap-2  mb-lg:flex-row mb-lg:flex-wrap sm:gap-3 sm:flex-nowrap">
          {filteredCountries.map((country) => (
            <CardItem key={country["code-2"]} country={country.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
