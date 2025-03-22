import { cn } from "../../../../utils";
import { CheckIcon } from "../icons";

type Props = {
  className?: string;
  isSaved: boolean;
  onClick: () => void;
};

export function SaveButton({ className, isSaved, onClick }: Props) {
  const baseStyle =
    "flex items-center justify-center gap-x-1 rounded py-2 px-2.5 text-white leading-none cursor-pointer";

  return (
    <button
      type="button"
      className={cn(
        baseStyle,
        className,
        `${isSaved ? "bg-gray-200" : "bg-blue"}`
      )}
      onClick={onClick}
    >
      {isSaved && <CheckIcon size={12} color="#ffffff" />}
      <span className="text-sm">{isSaved ? "saved" : "save"}</span>
    </button>
  );
}
