"use client";

import { useAtomValue } from "jotai";

import { useActiveCountry, useStoredCountries } from "@/app/_hooks";
import { activeCountryAtom } from "@/app/_atoms";
import { CurrentButton, SelectButton } from "@/app/_components/shared";
import { cn } from "@/utils";

type Props = {
  className?: string;
  code: string;
  isPlane?: boolean;
};

export function ToggleButton({ className, code, isPlane }: Props) {
  const activeCountry = useAtomValue(activeCountryAtom);

  const { saveCountry } = useStoredCountries();

  const { setActiveCountryByCode } = useActiveCountry();

  const handleSave = () => {
    saveCountry(code);
    setActiveCountryByCode(code);
  };

  const RenderButton = () =>
    code === activeCountry.code ? (
      <CurrentButton isPlane={isPlane} />
    ) : (
      <SelectButton onClick={handleSave} />
    );

  return (
    <div className={cn(className)}>
      <RenderButton />
    </div>
  );
}
