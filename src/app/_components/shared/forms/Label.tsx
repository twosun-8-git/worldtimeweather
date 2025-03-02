import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
  label: string;
  require?: boolean;
};
export function Label({ children, id, label, require = true }: Props) {
  return (
    <label htmlFor={id}>
      <span className="block mb-1">
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
