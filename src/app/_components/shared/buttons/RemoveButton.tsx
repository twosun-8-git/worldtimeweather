import { cn } from "@/app/utils";

import { CloseIcon } from "../icons";

type Props = {
  // onClick: () => void;
  className?: string;
};

export function RemoveButton({ className }: Props) {
  const baseStyle =
    "flex items-center justify-center gap-x-0.5 rounded py-2 px-2.5 bg-red text-white leading-none cursor-pointer";

  return (
    <button type="button" className={cn(baseStyle, className)}>
      <CloseIcon size={12} color="#ffffff" />
      <span className="text-sm">remove</span>
    </button>
  );
}
