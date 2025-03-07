import { cn } from "@/app/utils";

type Props = {
  className?: string;
  disabled?: boolean;
  label?: string;
};

export function SubmitButton({
  className,
  disabled = false,
  label = "Submit",
}: Props) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(
        "bg-blue w-[108px] h-9 text-white rounded-full text-sm sm:w-[126px] sm:text-base sm:h-10",
        disabled ? "cursor-default" : "cursor-pointer",
        className
      )}
    >
      {label}
    </button>
  );
}
