"use client";

import { cn } from "../../../../utils";
import { useAtomValue } from "jotai";
import { useState, useEffect } from "react";
import { localDataAtom } from "@/app/_atoms";

export function LargeTimer() {
  const style =
    "w-full h-full text-10xl-vw font-black leading-none flex items-center justify-between";

  const styleContainer = "pc:text-10xl-fix";

  const localData = useAtomValue(localDataAtom);

  const { timezone } = localData;

  const [timeDigits, setTimeDigits] = useState<string[]>([]);

  const updateTime = () => {
    if (timezone) {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: "2-digit" as const,
        minute: "2-digit" as const,
        second: "2-digit" as const,
        hour12: false,
      };

      try {
        const timeString = new Intl.DateTimeFormat("ja-JP", options).format(
          now
        );

        const digits = [];
        for (let i = 0; i < timeString.length; i++) {
          const char = timeString[i];
          if (char === ":" || !isNaN(parseInt(char, 10))) {
            digits.push(char);
          }
        }

        // 桁数が8になるように調整（時：分：秒）
        if (digits.length === 8) {
          setTimeDigits(digits);
        }
      } catch (error) {
        console.error(`タイムゾーン '${timezone}' での時刻取得エラー:`, error);
      }
    }
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timezone]);

  // 現在の時刻をISO形式で取得（datetime属性用）
  const dateTimeAttr = new Date().toISOString();

  return (
    <time dateTime={dateTimeAttr} className={cn(style, styleContainer)}>
      {timeDigits.map((digit, index) => (
        <span
          key={index}
          className={cn(digit === ":" ? "-mt-[0.2em] pc:-mt-[0.18em]" : "")}
        >
          {digit}
        </span>
      ))}
    </time>
  );
}
