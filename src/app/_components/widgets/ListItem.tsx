"use client";
import { forwardRef } from "react";

import { CircleImage, MediumTimer } from "@/app/_components/shared";
import { ToggleButton } from "@/app/_components/shared";

type Props = {
  country: string;
  code: string;
  timezone: string;
};

export const ListItem = forwardRef<HTMLLIElement, Props>(
  ({ country, code, timezone }: Props, ref) => {
    return (
      <li
        ref={ref}
        className="py-2 px-2 md:flex md:items-center md:w-full md:justify-between"
      >
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
        <div className="flex flex-col pl-7 leading-none md:pl-0 md:py-0 md:flex-row md:items-center">
          <MediumTimer timezone={timezone} className="t-1 pb-2" />
          <ToggleButton
            code={code}
            className="flex w-20 justify-start md:ml-4"
          />
        </div>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
