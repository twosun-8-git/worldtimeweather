"use client";

import { useState } from "react";

import { cn } from "@/utils";
import {
  CircleImage,
  MediumTimer,
  CancelButton,
} from "@/app/_components/shared";

type Props = {
  country?: string;
  onClickCard: () => void;
  onClickCanel: () => void;
};

export function CardItem({ country, onClickCard, onClickCanel }: Props) {
  const [visibleCancelButton, setVisibleCancelButton] = useState(false);

  const style =
    "flex flex-col text-gray-500 text-sm whitespace-nowrap sm:flex-row";

  const mblgStyle = "mb-lg:text-xs";

  const smStyle = "sm:text-sm";

  return (
    <div
      className="relative flex-none w-full border border-gray-100 p-2 pr-7 text-left rounded-lg mb-lg:w-[calc((100%-8px)/2)] mb-lg:p-2.5 sm:w-[240px] sm:h-[108px] sm:pr-2"
      onMouseOver={() => setVisibleCancelButton(true)}
      onMouseLeave={() => setVisibleCancelButton(false)}
    >
      <button
        className="contents w-full sm:h-full sm:flex sm:flex-col sm:justify-center"
        onClick={onClickCard}
      >
        <figure className="flex items-start gap-x-1.5 sm:items-center">
          <CircleImage src="/assets/flags/usa.png" alt="hoge" className="w-5" />
          <figcaption className={cn(style, mblgStyle, smStyle)}>
            <span>{country}</span>
          </figcaption>
        </figure>
        <div className="py-1 pl-6 sm:pt-1 text-left md:pt-0">
          <MediumTimer className="sm:text-3xl md:text-4xl" />
        </div>
        <div className="flex gap-x-1 text-gray-500 text-xs pl-6 whitespace-nowrap sm:pt-1 md:pt-0 sm:gap-x-2">
          <span>Jan 25</span>
          <span>Sunny</span>
          <span>36°C / 96.8°F</span>
        </div>
      </button>
      <CancelButton
        className={cn(
          `flex items-center justify-center w-[18px] h-[18px] bg-red rounded-full absolute top-2 right-2 sm:w-5 sm:h-5 sm:-top-2 sm:-right-2 transition-opacity duration-140 ease-in-out ${
            visibleCancelButton ? "opacity-100" : "opacity-0"
          }`
        )}
        onClick={onClickCanel}
      />
    </div>
  );
}
