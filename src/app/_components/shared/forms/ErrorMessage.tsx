import { cn } from "@/app/utils";

type Props = {
  message: string | undefined;
  className?: string;
};
export function ErrorMessage({ message, className }: Props) {
  return <div className={cn("text-xs text-red", className)}>{message}</div>;
}
