"use client";

import { useState } from "react";

import { cn } from "../../../../utils";
import { CheckIcon } from "../icons";

type Props = {
  className?: string;
  code: string;
  storageKey: string;
};

export function SaveButton({ className, code, storageKey }: Props) {
  const baseStyle =
    "flex items-center justify-center gap-x-1 rounded py-2 px-2.5 text-white leading-none cursor-pointer";

  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    const storedData = localStorage.getItem(storageKey);
    let countries: string[] = [];

    if (storedData) {
      try {
        countries = JSON.parse(storedData);
        if (!Array.isArray(countries)) {
          countries = [];
        }
      } catch (e) {
        console.error("Error parsing stored countries:", e);
        countries = [];
      }
    }

    if (!countries.includes(code)) {
      countries.push(code);
    }

    localStorage.setItem(storageKey, JSON.stringify(countries));

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
      onClick={() => handleClick()}
    >
      {isSaved && <CheckIcon size={12} color="#ffffff" />}
      <span className="text-sm">{isSaved ? "saved" : "save"}</span>
    </button>
  );
}
