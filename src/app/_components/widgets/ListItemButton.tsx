"use client";

import { useEffect, useRef, useState } from "react";

import { LOCAL_STORAGE_KEY_COUNTRIES } from "@/consts";
import { SaveButton, RemoveButton } from "@/app/_components/shared";

type Props = {
  code: string;
};

export function ListItemButton({ code }: Props) {
  const [isSaved, setIsSaved] = useState(false);
  const [isJustSaved, setIsJustSaved] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getStoredCountries = (): string[] => {
    if (typeof window === "undefined") return [];

    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_COUNTRIES);
    if (!storedData) return [];

    try {
      const countries = JSON.parse(storedData);
      return Array.isArray(countries) ? countries : [];
    } catch (e) {
      console.error("Error parsing stored countries:", e);
      return [];
    }
  };

  useEffect(() => {
    const countries = getStoredCountries();
    setIsSaved(countries.includes(code));
  }, [code]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSave = () => {
    const countries = getStoredCountries();

    if (!countries.includes(code)) {
      countries.push(code);
    }

    localStorage.setItem(
      LOCAL_STORAGE_KEY_COUNTRIES,
      JSON.stringify(countries)
    );

    setIsJustSaved(true);

    timerRef.current = setTimeout(() => {
      setIsJustSaved(false);
    }, 5000);

    setIsSaved(true);
  };

  const handleRemove = () => {
    const countries = getStoredCountries();
    const updatedCountries = countries.filter((item) => item !== code);

    localStorage.setItem(
      LOCAL_STORAGE_KEY_COUNTRIES,
      JSON.stringify(updatedCountries)
    );

    setIsJustSaved(false);
    setIsSaved(false);
  };

  return (
    <div className="flex pl-7 pt-2 md:pl-0 md:pt-1 md:ml-auto ">
      {isSaved && !isJustSaved ? (
        <RemoveButton onClick={handleRemove} />
      ) : (
        <SaveButton onClick={handleSave} isJustSaved={isJustSaved} />
      )}
    </div>
  );
}
