import { cn } from "../../../../utils";
import { CloseIcon } from "../icons";

type Props = {
  className?: string;
  code: string;
  storageKey: string;
};

export function RemoveButton({ className, code, storageKey }: Props) {
  const baseStyle =
    "flex items-center justify-center gap-x-0.5 rounded py-2 px-2.5 bg-red text-white leading-none cursor-pointer";

  const handleClick = () => {
    const storedData = localStorage.getItem(storageKey);

    if (storedData) {
      try {
        const countries = JSON.parse(storedData);

        if (Array.isArray(countries)) {
          const updatedCountries = countries.filter((item) => item !== code);
          localStorage.setItem(storageKey, JSON.stringify(updatedCountries));
        }
      } catch (e) {
        console.error("Error parsing stored countries:", e);
      }
    }
  };

  return (
    <button
      type="button"
      className={cn(baseStyle, className)}
      onClick={() => handleClick()}
    >
      <CloseIcon size={12} color="#ffffff" />
      <span className="text-sm">remove</span>
    </button>
  );
}
