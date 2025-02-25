import { cn } from "@/app/utils";

import { CloseIcon } from "../icons";

type Props = {
  onClick: () => void;
  size?: "l" | "m";
};

export function CloseButton({ onClick, size = "m" }: Props) {
  const switchSize = size === "m" ? 12 : 20;

  const baseStyle = "flex items-center justify-center border rounded-full";

  const colorStyle =
    size === "m"
      ? "w-5 h-5 bg-red border-red"
      : "w-9 h-9 bg-transparent border-white";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseStyle, colorStyle)}
    >
      <CloseIcon size={switchSize} color="#ffffff" />
    </button>
  );
}
