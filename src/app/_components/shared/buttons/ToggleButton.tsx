"use client";

import { useAtomValue } from "jotai";

import { activeCountryAtom } from "@/app/_atoms";
import { CurrentButton, SelectButton } from "@/app/_components/shared";
import { cn } from "@/utils";

type Props = {
  className?: string;
  code: string;
  isPlane?: boolean;
  onClick: () => void;
};

export function ToggleButton({ className, code, isPlane, onClick }: Props) {
  const activeCountry = useAtomValue(activeCountryAtom);

  const RenderButton = () =>
    code === activeCountry.code ? (
      <CurrentButton isPlane={isPlane} />
    ) : (
      <SelectButton onClick={onClick} />
    );

  return (
    <div className={cn(className)}>
      <RenderButton />
    </div>
  );
}
