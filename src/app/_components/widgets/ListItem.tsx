"use client";
import { forwardRef } from "react";

import { useTime } from "@/app/_hooks";
import { CircleImage } from "@/app/_components/shared";
import { ListItemButton } from "./ListItemButton";
import { cn } from "@/utils";

type Props = {
  country: string;
  code: string;
  timezone: string;
};

export const ListItem = forwardRef<HTMLLIElement, Props>(
  ({ country, code, timezone }: Props, ref) => {
    const { timeDigits } = useTime({
      timezone: timezone,
    });

    const digits =
      timeDigits.length > 0
        ? timeDigits
        : ["0", "0", ":", "0", "0", ":", "0", "0"];

    return (
      <li ref={ref} className="py-2 px-2 md:flex md:items-center md:w-full">
        <figure className="flex items-start gap-x-1 md:items-center md:whitespace-nowrap pc:gap-x-1.5">
          <CircleImage
            src={`/assets/flags/${code}.png`}
            alt={country}
            className="w-6 shrink-[0] md:w-5"
          />
          <figcaption className="flex flex-col text-sm font-bold pt-1 mb-lg:pt-0 mb-lg:text-[16px] sm:flex-row md:pt-0">
            <span>{country}</span>
            <span className="hidden sm:inline">&nbsp;-&nbsp;</span>
            <span>{timezone}</span>
          </figcaption>
        </figure>
        <div className="flex flex-col pl-7 leading-none md:pl-0 md:py-0 md:ml-auto md:flex-row md:items-center md:gap-x-4 lg:gap-x-8">
          <time className="flex items-center font-black text-3xl pt-1 pb-2">
            {digits.slice(0, -3).map((digit, index) => (
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
          <ListItemButton code={code} />
        </div>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
