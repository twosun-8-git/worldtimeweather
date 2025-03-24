"use client";

import { useRef, useEffect, useState, useCallback } from "react";

import countriesData from "@/data/countries.json";
import { BREAKPOINTS } from "@/consts";
import { ListItem } from "@/app/_components/widgets";

type Props = {
  keyword: string;
};

export function List({ keyword }: Props) {
  const lowerKeyword = keyword.toLowerCase();

  const listRef = useRef<HTMLUListElement>(null);

  const itemRef = useRef<HTMLLIElement>(null);

  const [maxHeight, setMaxHeight] = useState(48);

  const filteredCountries = countriesData.filter((country) => {
    return (
      country.name.toLowerCase().includes(lowerKeyword) ||
      (country.code2 && country.code2.toLowerCase().includes(lowerKeyword)) ||
      (country.code3 && country.code3.toLowerCase().includes(lowerKeyword))
    );
  });

  const updateMaxHeight = useCallback(() => {
    if (itemRef.current && filteredCountries.length > 0) {
      const itemHeight = itemRef.current.offsetHeight;

      let itemCount = 2;
      const innerWidth = window.innerWidth;
      if (innerWidth >= BREAKPOINTS.md) {
        itemCount = 4;
      } else if (innerWidth >= BREAKPOINTS.xl) {
        itemCount = 6;
      }

      setMaxHeight(itemHeight * itemCount + itemCount);
    }
  }, [filteredCountries.length]);

  useEffect(() => {
    if (filteredCountries.length > 0) {
      updateMaxHeight();
    }
    window.addEventListener("resize", updateMaxHeight);

    return () => {
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, [filteredCountries.length, updateMaxHeight]);

  return (
    <ul
      ref={listRef}
      className={`divide-y divide-gray-100 w-[calc(100%-16px)] border border-gray-100 absolute rounded-b-md bg-white z-20 overflow-y-auto`}
      style={{ maxHeight: maxHeight }}
    >
      {filteredCountries.map((country, index) => (
        <ListItem
          key={country.code3 || index}
          ref={index === 0 ? itemRef : null}
          country={country.name}
          code={country.code2 || ""}
          timezone={country.timezone}
        />
      ))}
    </ul>
  );
}
