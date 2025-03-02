import { X } from "lucide-react";

import { cn } from "@/app/utils";

type Props = {
  className?: string;
  color?: string;
  size?: number;
};

export function CloseIcon({ className, size = 10, color = "#94949d" }: Props) {
  const baseStyle = "mt-0.5";
  return <X size={size} color={color} className={cn(baseStyle, className)} />;
}
