"use client";

import { useState, useEffect, useCallback } from "react";
import { useAtomValue } from "jotai";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { activeCountryAtom } from "@/app/_atoms";

dayjs.extend(utc);
dayjs.extend(timezone);

type Options = {
  timezone?: string;
  updateInterval?: number;
  timeFormat?: string;
  dateFormat?: string;
};

export function useTime(options: Options = {}) {
  const localData = useAtomValue(activeCountryAtom);

  const userTimezone = options.timezone || localData.timezone;
  const updateInterval = options.updateInterval || 1000;
  const timeFormat = options.timeFormat || "HH:mm:ss";
  const dateFormat = options.dateFormat || "MMM D";

  const [timeDigits, setTimeDigits] = useState<string[]>([]);
  const [dateTimeISO, setDateTimeISO] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  const updateTime = useCallback(() => {
    if (userTimezone) {
      try {
        const now = dayjs().tz(userTimezone);

        const timeString = now.format(timeFormat);

        const digits = timeString.split("");

        setTimeDigits(digits);
        setDateTimeISO(now.toISOString());
        setFormattedTime(timeString);
        setFormattedDate(now.format(dateFormat));
      } catch (error) {
        console.error(
          `タイムゾーン '${userTimezone}' での時刻取得エラー:`,
          error
        );
      }
    }
  }, [userTimezone, timeFormat, dateFormat]);

  useEffect(() => {
    updateTime();

    const intervalId = setInterval(updateTime, updateInterval);

    return () => clearInterval(intervalId);
  }, [updateTime, updateInterval]);

  return {
    timeDigits,
    dateTimeISO,
    formattedTime,
    formattedDate,
    updateTime,
  };
}
