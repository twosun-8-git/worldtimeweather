import { Menu } from "lucide-react";

type Props = {
  size?: number;
};

export function MenuIcon({ size = 10 }: Props) {
  return <Menu size={size} />;
}
