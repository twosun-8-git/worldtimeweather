import { CalendarIcon, CountryDate } from "@/app/_components/shared";

type Props = {
  timezone: string;
};

export function Today({ timezone }: Props) {
  return (
    <div className="flex items-center gap-x-1">
      <CalendarIcon size={16} />
      <CountryDate timezone={timezone} />
    </div>
  );
}
