"use client";

import { cn } from "@/utils";

import { CloseIcon } from "../icons";

type Props = {
  className?: string;
  onClick: () => void;
  size?: "lg" | "md";
};

export function CloseButton({ className, onClick, size = "md" }: Props) {
  const switchSize = size === "md" ? 12 : 20;

  const baseStyle =
    "flex items-center justify-center border rounded-full cursor-pointer";

  const colorStyle =
    size === "md"
      ? "w-5 h-5 bg-red border-red"
      : "w-9 h-9 bg-transparent border-white";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseStyle, colorStyle, className)}
    >
      <CloseIcon size={switchSize} color="#ffffff" />
    </button>
  );
}
