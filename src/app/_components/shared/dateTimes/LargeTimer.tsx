"use client";

import { useAtomValue } from "jotai";

import { cn } from "@/utils";
import { activeCountryAtom } from "@/app/_atoms";
import { useTime } from "@/app/_hooks";

export function LargeTimer() {
  const activeCountry = useAtomValue(activeCountryAtom);

  const { timeDigits, dateTimeISO } = useTime({
    timezone: activeCountry.timezone,
    alignToMinute: false,
  });

  const digits =
    timeDigits.length > 0
      ? timeDigits
      : ["0", "0", ":", "0", "0", ":", "0", "0"];

  const style =
    "w-full h-full text-10xl-vw font-black text-center leading-none flex items-center justify-between md:mt-2";

  const styleContainer = "pc:text-10xl-fix desktop-lg:text-20xl-fix";

  return (
    <time dateTime={dateTimeISO} className={cn(style, styleContainer)}>
      {digits.map((digit, index) => (
        <span
          key={index}
          className={cn(
            digit === ":"
              ? "shrink-0 w-[6%] -mt-[0.2em] pc:-mt-[0.18em]"
              : "shrink-0 w-[14.666%]"
          )}
        >
          {digit}
        </span>
      ))}
    </time>
  );
}
