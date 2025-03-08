import { Check, X } from "lucide-react";
import { useSetAtom } from "jotai";

import { cn } from "../../../../utils";
import { visibleModalAtom } from "@/app/_atoms";

type Props = {
  result: boolean;
  onClick: () => void;
};

export function SubmitedMessage({ result, onClick }: Props) {
  const setVisibleModal = useSetAtom(visibleModalAtom);

  const baseStyle =
    "flex items-center justify-center gap-x-1 text-white w-[108px] h-9 rounded-full text-sm sm:w-[126px] sm:text-base sm:h-10";

  const backgroundColor = result ? "bg-green" : "bg-red";

  const icon = result ? (
    <Check size={14} className="sm:mt-0.5" />
  ) : (
    <X size={14} className="sm:mt-0.5" />
  );

  const buttonLabel = result ? "Success" : "Failed";

  const text = result
    ? "Your inquiry has been sent."
    : "Sorry, we couldn’t send your inquiry.";

  const handleClick = () => {
    onClick();
    setVisibleModal(false);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={handleClick}
        className={cn(baseStyle, backgroundColor)}
      >
        {icon}
        <span>{buttonLabel}</span>
      </button>
      <div className="text-xs text-gray-700 mt-1">{text}</div>
    </div>
  );
}
