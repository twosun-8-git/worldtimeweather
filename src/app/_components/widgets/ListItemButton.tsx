"use client";

import { useEffect, useState } from "react";

import { LOCAL_STORAGE_KEY_COUNTRIES } from "@/consts";
import { SaveButton, RemoveButton } from "@/app/_components/shared";

type Props = {
  code: string;
};

export function ListItemButton({ code }: Props) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const checkSavedStatus = () => {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_COUNTRIES);
      if (storedData) {
        try {
          const countries = JSON.parse(storedData);
          if (Array.isArray(countries)) {
            setIsSaved(countries.includes(code));
            return;
          }
        } catch (e) {
          console.error("Error parsing stored countries:", e);
        }
      }
      setIsSaved(false);
    };

    if (typeof window !== "undefined") {
      checkSavedStatus();
    }
  }, [code]);

  const handleSave = () => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_COUNTRIES);
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

    localStorage.setItem(
      LOCAL_STORAGE_KEY_COUNTRIES,
      JSON.stringify(countries)
    );
    setIsSaved(true);
  };

  const handleRemove = () => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_COUNTRIES);

    if (storedData) {
      try {
        const countries = JSON.parse(storedData);

        if (Array.isArray(countries)) {
          const updatedCountries = countries.filter((item) => item !== code);
          localStorage.setItem(
            LOCAL_STORAGE_KEY_COUNTRIES,
            JSON.stringify(updatedCountries)
          );
          setIsSaved(false);
        }
      } catch (e) {
        console.error("Error parsing stored countries:", e);
      }
    }
  };

  return (
    <div className="flex pl-7 pt-2 md:pl-0 md:pt-1 md:ml-auto ">
      {isSaved ? (
        <RemoveButton onClick={handleRemove} />
      ) : (
        <SaveButton onClick={handleSave} isSaved={isSaved} />
      )}
    </div>
  );
}
