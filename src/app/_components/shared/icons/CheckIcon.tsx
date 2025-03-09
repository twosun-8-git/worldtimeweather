import { Check } from "lucide-react";

type Props = {
  size?: number;
  color?: string;
};

export function CheckIcon({ size = 10, color = "#94949d" }: Props) {
  return <Check size={size} color={color} className="mt-0.5" />;
}
