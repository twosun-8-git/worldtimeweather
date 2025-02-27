"use client";

import { useState } from "react";

import { cn } from "@/app/utils";
import { InputText, SearchIcon } from "@/app/_components/shared";

type Props = {
  keyword: string;
  setKeyword: (value: string) => void;
};

export function SearchInput({ keyword, setKeyword }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const baseStyle =
    "flex items-center gap-x-1 text-navy-100 absolute left-2 top-1/2 -translate-y-1/2 text-sm transition-opacity duration-300";

  const visibleStyle = isFocused ? "opacity-0" : "opacity-100";

  return (
    <label className="relative">
      <div className={cn(baseStyle, visibleStyle)}>
        <SearchIcon size={14} />
        <span>Search other country</span>
      </div>
      <InputText
        className={
          keyword.length >= 3
            ? `rounded-tl-md rounded-tr-md border-b-0`
            : `rounded-md`
        }
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(keyword.length > 0 ? true : false)}
      />
    </label>
  );
}
