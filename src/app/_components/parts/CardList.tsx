"use client";

import { useAtomValue } from "jotai";

import countriesData from "@/data/countries.json";
import { storedCountriesAtom } from "@/app/_atoms";
import { useActiveCountry, useStoredCountries } from "@/app/_hooks";
import { CardItem } from "@/app/_components/widgets";

export function CardList() {
  const { removeCountry } = useStoredCountries();

  const { setActiveCountryByCode } = useActiveCountry();

  const storedCountries = useAtomValue(storedCountriesAtom);

  if (storedCountries.length < 1) {
    return;
  }

  const filteredCountries = countriesData.filter((country) =>
    storedCountries.includes(country["code-2"])
  );

  return (
    <div className="pt-8 px-2">
      <p className="text-xs text-gray-300 sm:text-sm">
        Your Histories ( It is lost when the browser history cleared )
      </p>
      <div className="pt-2 pb-4 sm:overflow-x-scroll">
        <div className="flex flex-col gap-2  mb-lg:flex-row mb-lg:flex-wrap sm:gap-3 sm:flex-nowrap">
          {filteredCountries.map((country) => (
            <CardItem
              key={country["code-2"]}
              country={country.name}
              onClickCard={() => setActiveCountryByCode(country["code-2"])}
              onClickCanel={() => removeCountry(country["code-2"])}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
