"use client";

import { cn } from "../../../../utils";
import { useTime } from "@/app/_hooks/useTime";

export function LargeTimer() {
  const { timeDigits, dateTimeISO } = useTime();

  const digits =
    timeDigits.length > 0
      ? timeDigits
      : ["0", "0", ":", "0", "0", ":", "0", "0"];

  const style =
    "w-full h-full text-10xl-vw font-black text-center leading-none flex items-center justify-between";

  const styleContainer = "pc:text-10xl-fix";

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
