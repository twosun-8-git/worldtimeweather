import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
  require?: boolean;
};
export function Label({ children, label, require = true }: Props) {
  return (
    <label>
      <span className="block mb-0.5">
        {require && (
          <span className="text-red font-bold text-sm mr-1 sm:text-base">
            *
          </span>
        )}
        <span className="text-sm sm:text-base text-black-300">{label}</span>
      </span>
      {children}
    </label>
  );
}
