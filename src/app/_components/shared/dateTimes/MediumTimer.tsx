import { cn } from "@/utils";

type Props = {
  className?: string;
};

export function MediumTimer({ className }: Props) {
  const baseStyle = "w-full h-full text-2xl font-black leading-none";

  return (
    <time dateTime="23:59:10+09:00" className={cn(baseStyle, className)}>
      23:59:10
    </time>
  );
}
