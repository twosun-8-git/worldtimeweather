import { X } from "lucide-react";

import { cn } from "@/utils";

type Props = {
  className?: string;
  color?: string;
  size?: number;
};

export function CloseIcon({ className, size = 10, color = "#94949d" }: Props) {
  return <X size={size} color={color} className={cn(className)} />;
}
