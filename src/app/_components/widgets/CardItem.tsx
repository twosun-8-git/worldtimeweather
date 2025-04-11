import { cn } from "@/utils";
import {
  CircleImage,
  MediumTimer,
  RemoveButton,
  ToggleButton,
} from "@/app/_components/shared";

type Props = {
  country: string;
  code: string;
  onClickActive: () => void;
  onClickCancel: () => void;
  timezone: string;
};

export function CardItem({
  country,
  code,
  onClickActive,
  onClickCancel,
  timezone,
}: Props) {
  const style =
    "flex flex-col text-gray-500 text-sm whitespace-nowrap sm:flex-row";

  const mblgStyle = "mb-lg:text-xs";

  const smStyle = "sm:text-sm sm:truncate";

  return (
    <div className="flex-none w-full border border-gray-100 p-2 text-left rounded-lg mb-lg:w-[calc((100%-8px)/2)] mb-lg:p-2.5 sm:w-[240px]">
      <div className="contents w-full sm:flex sm:flex-col sm:justify-center">
        <figure className="flex items-start gap-x-1 sm:items-center sm:gap-x-2">
          <CircleImage
            src={`/assets/flags/${code}.png`}
            alt={`${country} flag`}
            className="w-4 sm:w-6"
          />
          <figcaption className={cn(style, mblgStyle, smStyle)}>
            <span>{country}</span>
            <span className="hidden sm:inline">&nbsp;-&nbsp;</span>
            <span>{timezone}</span>
          </figcaption>
        </figure>
        <div className="py-1 pl-5 text-left sm:pt-1 sm:pl-8 md:pt-0">
          <MediumTimer className="text-4xl" timezone={timezone} />
        </div>
        <div className="flex justify-between gap-x-1 text-gray-500 text-xs pl-5 whitespace-nowrap sm:pt-1 md:pt-0 sm:gap-x-2 sm:pl-8">
          <ToggleButton code={code} onClick={onClickActive} />
          <RemoveButton onClick={onClickCancel} />
        </div>
      </div>
    </div>
  );
}
