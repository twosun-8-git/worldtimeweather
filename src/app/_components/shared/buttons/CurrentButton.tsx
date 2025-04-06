import { cn } from "@/utils";
import { CheckIcon } from "../icons";

type Props = {
  className?: string;
  isPlane?: boolean;
};

export function CurrentButton({ className, isPlane = true }: Props) {
  const baseStyle =
    "flex h-7 items-center justify-center gap-x-0.5 leading-none";

  const buttonStyle = isPlane
    ? "pr-2.5"
    : "rounded py-2 px-2.5 border border-gray-300";

  return (
    <button
      type="button"
      disabled
      className={cn(baseStyle, buttonStyle, className)}
    >
      <CheckIcon size={12} color="#bec1c9" />
      <span className="text-sm text-gray-300">current</span>
    </button>
  );
}
