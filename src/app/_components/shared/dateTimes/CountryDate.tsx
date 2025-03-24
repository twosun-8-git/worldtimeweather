import { cn, getDateByTimezone } from "@/utils";

type Props = {
  className?: string;
  timezone: string;
};

export function CountryDate({ className, timezone }: Props) {
  const countryDate = getDateByTimezone(timezone);

  return (
    <>
      {typeof countryDate === "object" && (
        <time className={cn(className)} dateTime={countryDate.iso}>
          {countryDate.display}
        </time>
      )}
    </>
  );
}
