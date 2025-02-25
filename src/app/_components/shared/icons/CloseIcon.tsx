import { X } from "lucide-react";

type Props = {
  size?: number;
  color?: string;
};

export function CloseIcon({ size = 10, color = "#94949d" }: Props) {
  return <X size={size} color={color} className="mt-0.5" />;
}
