import { Thermometer } from "lucide-react";

type Props = {
  size?: number;
  color?: string;
};

export function TempIcon({ size = 10, color = "#94949d" }: Props) {
  return <Thermometer size={size} color={color} />;
}
