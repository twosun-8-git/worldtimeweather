"use client";

import { useState } from "react";
import { cn } from "../../../../utils";

import { LOCAL_STORAGE_KEY_COUNTRIES } from "@/consts";
import { CheckIcon } from "../icons";

type Props = {
  className?: string;
  code: string;
};

export function SaveButton({ className, code }: Props) {
  const baseStyle =
    "flex items-center justify-center gap-x-1 rounded py-2 px-2.5 text-white leading-none cursor-pointer";

  const [isSaved, setIsSaved] = useState(false);

  const handleClick = (code: string) => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_COUNTRIES);
    let countries: string[] = [];

    if (storedData) {
      try {
        countries = JSON.parse(storedData);
        if (!Array.isArray(countries)) {
          countries = [];
        }
      } catch {
        countries = [];
      }
    }

    if (!countries.includes(code)) {
      countries.push(code);
    }

    localStorage.setItem(
      LOCAL_STORAGE_KEY_COUNTRIES,
      JSON.stringify(countries)
    );

    setIsSaved(true);
  };

  return (
    <button
      type="button"
      className={cn(
        baseStyle,
        className,
        `${isSaved ? "bg-gray-200" : "bg-blue"}`
      )}
      onClick={() => handleClick(code)}
    >
      {isSaved && <CheckIcon size={12} color="#ffffff" />}
      <span className="text-sm">{isSaved ? "saved" : "save"}</span>
    </button>
  );
}
