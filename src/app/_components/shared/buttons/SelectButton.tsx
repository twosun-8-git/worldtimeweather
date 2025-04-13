import { cn } from "@/utils";

type Props = {
  className?: string;
  onClick: () => void;
};

export function SelectButton({ className, onClick }: Props) {
  const baseStyle =
    "flex h-7 items-center justify-center border border-blue-900 gap-x-1 rounded py-2 px-2.5 leading-none cursor-pointer hover:bg-blue-700 ";

  return (
    <button
      type="button"
      className={cn(baseStyle, className)}
      onClick={onClick}
    >
      <span className="text-sm text-blue-900">select</span>
    </button>
  );
}
