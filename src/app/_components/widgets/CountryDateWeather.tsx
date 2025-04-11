"use client";

import { useCallback, useEffect, useState } from "react";

import { cn } from "@/utils";
import { ActiveWeather } from "@/types";
import { useFetchWeather } from "@/app/_hooks";
import {
  CalendarIcon,
  CountryDate,
  TempIcon,
  WeatherIcon,
} from "@/app/_components/shared";

type Props = {
  timezone: string;
};

export function CountryDateWeather({ timezone }: Props) {
  const fetchWeather = useFetchWeather();

  const [activeWeather, setActiveWeather] = useState<ActiveWeather | null>(
    null
  );

  const getWeather = useCallback(async () => {
    if (timezone) {
      const data = await fetchWeather(timezone);
      if (data) {
        setActiveWeather(data);
      }
    }
  }, [fetchWeather, timezone]);

  useEffect(() => {
    getWeather();

    const intervalId = setInterval(() => {
      getWeather();
    }, 15 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [getWeather]);

  const style =
    "flex flex-col gap-y-1 text-gray-500 text-xs border border-gray-100 p-2 rounded";

  const mdStyle = "md:text-sm md:border-none md:p-0 md:flex-row md:gap-x-2";

  const containerStyle = "pc:gap-x-4";

  if (!activeWeather) return null;

  const { condition, temp_c, temp_f } = activeWeather;

  return (
    <div className={cn(style, mdStyle, containerStyle)}>
      <div className="flex items-center gap-x-1">
        <CalendarIcon size={16} />
        <CountryDate timezone={timezone} />
      </div>

      <div className="flex items-center gap-x-1">
        <WeatherIcon code={condition.code} size={16} />
        <span>{condition.text}</span>
      </div>
      <div className="flex items-center gap-x-1">
        <TempIcon size={16} />
        <span>
          {temp_c}°C / {temp_f}°F
        </span>
      </div>
    </div>
  );
}
