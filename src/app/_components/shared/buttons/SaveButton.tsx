import { cn } from "../../../../utils";
import { CheckIcon } from "../icons";

type Props = {
  className?: string;
  isJustSaved: boolean;
  onClick: () => void;
};

export function SaveButton({ className, isJustSaved, onClick }: Props) {
  const baseStyle =
    "flex h-7 items-center justify-center gap-x-1 rounded py-2 px-2.5 text-white leading-none cursor-pointer";

  return (
    <button
      type="button"
      className={cn(
        baseStyle,
        className,
        `${isJustSaved ? "bg-gray-200" : "bg-blue"}`
      )}
      onClick={onClick}
    >
      {isJustSaved && <CheckIcon size={12} color="#ffffff" />}
      <span className="text-sm">{isJustSaved ? "saved" : "save"}</span>
    </button>
  );
}
