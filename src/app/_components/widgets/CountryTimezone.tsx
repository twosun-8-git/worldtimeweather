import { cn } from "@/utils";
import { CircleImage } from "@/app/_components/shared";

type Props = {
  country: string;
  code: string;
  timezone: string;
};

export function CountryTimezone({ country, code, timezone }: Props) {
  const style = "flex flex-col text-gray-500 text-xs whitespace-nowrap";

  const mdStyle = "md:text-sm sm:flex-row";

  const image = code ? `${code}.png` : "alt-circle.png";

  return (
    <figure className="flex items-center gap-x-1.5">
      <CircleImage src={`/assets/flags/${image}`} alt={country} />
      <figcaption className={cn(style, mdStyle)}>
        <span>{country}</span>
        <span className="hidden sm:inline">&nbsp;-&nbsp;</span>
        <span>{timezone}</span>
      </figcaption>
    </figure>
  );
}
