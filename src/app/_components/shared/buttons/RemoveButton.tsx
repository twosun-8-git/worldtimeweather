import { cn } from "../../../../utils";
import { CloseIcon } from "../icons";

type Props = {
  className?: string;
  onClick: () => void;
};

export function RemoveButton({ className, onClick }: Props) {
  const baseStyle =
    "flex items-center justify-center gap-x-0.5 rounded py-2 px-2.5 bg-red text-white leading-none cursor-pointer";

  return (
    <button
      type="button"
      className={cn(baseStyle, className)}
      onClick={onClick}
    >
      <CloseIcon size={12} color="#ffffff" />
      <span className="text-sm">remove</span>
    </button>
  );
}
