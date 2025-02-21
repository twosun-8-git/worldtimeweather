import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return (
    <div className="w-full max-w-900 mx-auto px-5 container:px-0">
      {children}
    </div>
  );
}
