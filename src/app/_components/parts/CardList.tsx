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
    storedCountries.includes(country.code2)
  );

  return (
    <div className="pt-8 px-2">
      <p className="text-xs text-gray-300 sm:text-sm">
        Your Histories ( It is lost when the browser history cleared )
      </p>
      <div className="pt-2 pb-4 sm:overflow-x-scroll">
        <div className="flex flex-col gap-1 mb-lg:flex-row mb-lg:flex-wrap sm:gap-3 sm:flex-nowrap">
          {filteredCountries.map((country) => (
            <CardItem
              key={country.code2}
              country={country.name}
              code={country.code2}
              timezone={country.timezone}
              onClickCard={() => setActiveCountryByCode(country.code2)}
              onClickCancel={() => removeCountry(country.code2)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
