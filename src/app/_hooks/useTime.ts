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
  alignToMinute?: boolean;
};

export function useTime(options: Options = {}) {
  const activeCountry = useAtomValue(activeCountryAtom);

  const userTimezone = options.timezone || activeCountry.timezone;
  const updateInterval = options.updateInterval || 1000;
  const timeFormat = options.timeFormat || "HH:mm:ss";
  const dateFormat = options.dateFormat || "MMM D";
  const alignToMinute =
    options.alignToMinute !== undefined ? options.alignToMinute : true;

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

    let intervalId: NodeJS.Timeout;

    if (alignToMinute) {
      const now = new Date();
      const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

      const timeoutId = setTimeout(() => {
        updateTime();
        intervalId = setInterval(updateTime, updateInterval);
      }, delay);

      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    } else {
      intervalId = setInterval(updateTime, updateInterval);
      return () => clearInterval(intervalId);
    }
  }, [updateTime, updateInterval, alignToMinute]);

  return {
    timeDigits,
    dateTimeISO,
    formattedTime,
    formattedDate,
    updateTime,
  };
}
