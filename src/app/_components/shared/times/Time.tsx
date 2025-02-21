import { cn } from "@/app/utils";

export function Time() {
  const style =
    "w-full h-full text-10xl-vw font-black leading-none flex items-center justify-between";

  const styleContainer = "container:text-10xl-fix";

  return (
    <time dateTime="23:59:10+09:00" className={cn(style, styleContainer)}>
      <span>2</span>
      <span>4</span>
      <span className="-mt-[0.2em] container:-mt-[0.18em]">:</span>
      <span>5</span>
      <span>8</span>
      <span className="-mt-[0.2em] container:-mt-[0.18em]">:</span>
      <span>6</span>
      <span>9</span>
    </time>
  );
}
