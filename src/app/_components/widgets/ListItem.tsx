import { forwardRef } from "react";

import { CircleImage } from "@/app/_components/shared";
import { ListItemButton } from "./ListItemButton";

type Props = {
  country: string;
  code: string;
  timezone: string;
};

export const ListItem = forwardRef<HTMLLIElement, Props>(
  ({ country, code, timezone }: Props, ref) => {
    return (
      <li ref={ref} className="py-2 px-2 md:flex md:items-center md:w-full">
        <figure className="flex items-start gap-x-1 mb-md:items-center md:w-[308px] md:whitespace-nowrap pc:w-[320px] pc:gap-x-1.5">
          <CircleImage
            src={`/assets/flags/${code}.png`}
            alt={country}
            className="w-6 shrink-[0] md:w-5"
          />
          <figcaption className="flex flex-col text-sm font-bold pt-1 mb-md:flex-row mb-lg:text-[16px] md:pt-0">
            <span>{country}</span>
            <span>-</span>
            <span>{timezone}</span>
          </figcaption>
        </figure>
        <div className="pl-7 py-1 leading-none md:pl-0 md:py-0">
          <time className="font-black text-2xl">20:17:38</time>
        </div>
        <ListItemButton code={code} />
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
