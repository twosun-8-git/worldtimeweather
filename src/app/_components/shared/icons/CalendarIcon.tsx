import { Calendar } from "lucide-react";

type Props = {
  size?: number;
  color?: string;
};

export function CalendarIcon({ size = 10, color = "#94949d" }: Props) {
  return <Calendar size={size} color={color} />;
}
