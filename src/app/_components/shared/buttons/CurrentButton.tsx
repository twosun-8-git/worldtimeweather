import { cn } from "@/utils";
import { CheckIcon } from "../icons";

type Props = {
  className?: string;
};

export function CurrentButton({ className }: Props) {
  const baseStyle =
    "flex h-7 items-center justify-center gap-x-0.5 rounded py-2 px-2.5 border border-gray-300 text-white leading-none";

  return (
    <button type="button" disabled className={cn(baseStyle, className)}>
      <CheckIcon size={12} color="#bec1c9" />
      <span className="text-sm text-gray-300">current</span>
    </button>
  );
}
