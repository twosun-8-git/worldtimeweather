import { cn } from "../../../../utils";

import { CheckIcon } from "../icons";

type Props = {
  // onClick: () => void;
  className?: string;
  text?: string;
  isSaved?: boolean;
};

export function SaveButton({
  className,
  text = "save",
  isSaved = false,
}: Props) {
  const baseStyle =
    "flex items-center justify-center gap-x-1 rounded py-2 px-2.5 bg-blue text-white leading-none cursor-pointer";

  return (
    <button type="button" className={cn(baseStyle, className)}>
      {isSaved && <CheckIcon size={12} color="#ffffff" />}
      <CheckIcon size={12} color="#ffffff" />
      <span className="text-sm">{text}</span>
    </button>
  );
}
