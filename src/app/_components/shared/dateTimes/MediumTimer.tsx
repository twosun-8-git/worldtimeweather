"use client";

import { cn } from "@/utils";
import { useTime } from "@/app/_hooks";

type Props = {
  className?: string;
  timezone: string;
};

export function MediumTimer({ className, timezone }: Props) {
  const baseStyle =
    "flex items-center w-full h-full text-3xl font-black leading-none";

  const { timeDigits } = useTime({
    updateInterval: 60000,
    timeFormat: "HH:mm",
    timezone: timezone,
  });

  const digits = timeDigits.length > 0 ? timeDigits : ["0", "0", ":", "0", "0"];

  return (
    <time className={cn(baseStyle, className)}>
      {digits.map((digit, index) => (
        <span
          key={index}
          className={cn(
            digit === ":" ? "shrink-0 w-3 -mt-[0.2em]" : "shrink-0 w-6"
          )}
        >
          {digit}
        </span>
      ))}
    </time>
  );
}
