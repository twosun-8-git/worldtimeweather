import { cn } from "@/app/utils";
import { CircleImage } from "@/app/_components/shared";

type Props = {
  alt?: string;
  src?: string;
  country: string;
  timezone: string;
};

export function CountryTimezone({
  alt = "country flag",
  country,
  src = "/assets/flags/alt-circle.png",
  timezone,
}: Props) {
  const style = "flex flex-col text-gray-500 text-xs whitespace-nowrap";
  const mdStyle = "md:text-sm md:flex-row";

  return (
    <figure className="flex items-center gap-x-1.5">
      <CircleImage src={src} alt={alt} />
      <figcaption className={cn(style, mdStyle)}>
        <span>{country}</span>
        <span className="hidden md:inline">&nbsp;-&nbsp;</span>
        <span>{timezone}</span>
      </figcaption>
    </figure>
  );
}
