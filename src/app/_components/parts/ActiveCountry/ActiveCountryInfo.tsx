import { cn } from "@/app/utils";

import {
  CountryTimezone,
  Today,
  Weather,
  Temp,
} from "@/app/_components/widgets";

export function ActiveCotunryInfo() {
  const style =
    "flex flex-col gap-y-1 text-gray-500 text-xs border border-gray-100 p-2 rounded";

  const mdStyle = "md:text-sm md:border-none md:p-0 md:flex-row md:gap-x-2";

  const containerStyle = "container:gap-x-4";

  return (
    <div className="flex items-start w-full justify-between md:items-center container:px-1">
      <CountryTimezone country="United State America" timezone="New_York" />
      <div className={cn(style, mdStyle, containerStyle)}>
        <Today />
        <Weather />
        <Temp />
      </div>
    </div>
  );
}
