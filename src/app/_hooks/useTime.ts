"use client";

import { useState, useEffect, useCallback } from "react";
import { useAtomValue } from "jotai";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { localDataAtom } from "@/app/_atoms";

dayjs.extend(utc);
dayjs.extend(timezone);

type Options = {
  timezone?: string; // オプションでタイムゾーンを指定可能
  updateInterval?: number; // 更新間隔（ミリ秒）
  timeFormat?: string; // 時刻のフォーマット
  dateFormat?: string; // 日付のフォーマット
};

export function useTime(options: Options = {}) {
  const localData = useAtomValue(localDataAtom);

  // オプションのタイムゾーンまたはatomのタイムゾーンを使用
  const userTimezone = options.timezone || localData.timezone;
  const updateInterval = options.updateInterval || 1000;
  const timeFormat = options.timeFormat || "HH:mm:ss";
  const dateFormat = options.dateFormat || "MMM D";

  const [timeDigits, setTimeDigits] = useState<string[]>([]);
  const [dateTimeISO, setDateTimeISO] = useState<string>("");
  const [formattedTime, setFormattedTime] = useState<string>("");
  const [formattedDate, setFormattedDate] = useState<string>("");

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
