import { cn } from "@/utils";
import { Trash2 } from "lucide-react";

type Props = {
  className?: string;
  onClick: () => void;
};

export function RemoveButton({ className, onClick }: Props) {
  const baseStyle =
    "flex w-auto h-7 items-center justify-center text-gray-200 hover:text-red";

  return (
    <button
      type="button"
      className={cn(baseStyle, className)}
      onClick={onClick}
    >
      <Trash2 size={14} />
    </button>
  );
}
