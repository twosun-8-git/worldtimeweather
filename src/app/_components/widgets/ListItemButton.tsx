"use client";

import { useAtomValue } from "jotai";

import { useActiveCountry, useStoredCountries } from "@/app/_hooks";
import { activeCountryAtom } from "@/app/_atoms";
import { CurrentButton, SaveButton } from "@/app/_components/shared";

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
      <SaveButton onClick={handleSave} />
    );

  return (
    <div className="flex pl-7 pt-2 md:pl-0 md:pt-1 md:ml-auto ">
      <RenderButton />
    </div>
  );
}
