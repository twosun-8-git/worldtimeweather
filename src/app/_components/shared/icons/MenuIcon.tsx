import { Menu } from "lucide-react";

type Props = {
  size?: number;
  color?: string;
};

export function MenuIcon({ size = 10, color = "#94949d" }: Props) {
  return <Menu size={size} color={color} />;
}
