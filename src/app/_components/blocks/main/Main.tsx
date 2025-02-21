import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Main({ children }: Props) {
  return <main>{children}</main>;
}
