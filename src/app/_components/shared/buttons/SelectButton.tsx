import { cn } from "@/utils";

type Props = {
  className?: string;
  onClick: () => void;
};

export function SelectButton({ className, onClick }: Props) {
  const baseStyle =
    "flex h-7 items-center justify-center border border-blue gap-x-1 rounded py-2 px-2.5 leading-none cursor-pointer";

  return (
    <button
      type="button"
      className={cn(baseStyle, className)}
      onClick={onClick}
    >
      <span className="text-sm text-blue">select</span>
    </button>
  );
}
