"use client";

import { useEffect, useRef, useState } from "react";

import { useActiveCountry, useStoredCountries } from "@/app/_hooks";
import { SaveButton, RemoveButton } from "@/app/_components/shared";

type Props = {
  code: string;
};

export function ListItemButton({ code }: Props) {
  const [isSaved, setIsSaved] = useState(false);

  const [isJustSaved, setIsJustSaved] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { saveCountry, removeCountry, isCountrySaved } = useStoredCountries();

  const { setActiveCountryByCode } = useActiveCountry();

  useEffect(() => {
    setIsSaved(isCountrySaved(code));
  }, [code, isCountrySaved]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSave = () => {
    saveCountry(code);

    setActiveCountryByCode(code);

    setIsJustSaved(true);

    timerRef.current = setTimeout(() => {
      setIsJustSaved(false);
    }, 4000);

    setIsSaved(true);
  };

  const handleRemove = () => {
    removeCountry(code);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

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
