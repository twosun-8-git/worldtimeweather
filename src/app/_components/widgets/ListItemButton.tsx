"use client";

import { useAtomValue } from "jotai";

import { useActiveCountry, useStoredCountries } from "@/app/_hooks";
import { activeCountryAtom } from "@/app/_atoms";
import { CurrentButton, SelectButton } from "@/app/_components/shared";

type Props = {
  code: string;
};

export function ListItemButton({ code }: Props) {
  const activeCountry = useAtomValue(activeCountryAtom);

  const { saveCountry } = useStoredCountries();

  const { setActiveCountryByCode } = useActiveCountry();

  const handleSave = () => {
    saveCountry(code);
    setActiveCountryByCode(code);
  };

  const RenderButton = () =>
    code === activeCountry.code ? (
      <CurrentButton />
    ) : (
      <SelectButton onClick={handleSave} />
    );

  return (
    <div className="flex w-20 ml-4 justify-start">
      <RenderButton />
    </div>
  );
}
