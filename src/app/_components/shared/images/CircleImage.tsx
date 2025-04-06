import Image from "next/image";

import { cn } from "@/utils";

type Props = {
  className?: string;
  src: string;
  alt: string;
};

export function CircleImage({ className, src, alt }: Props) {
  const baseStyle =
    "block relative w-6 shrink-0 aspect-square rounded-full border border-gray-100 overflow-hidden";

  return (
    <div className={cn(baseStyle, className)}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </div>
  );
}
