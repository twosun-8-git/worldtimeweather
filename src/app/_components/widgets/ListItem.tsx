import { CircleImage } from "@/app/_components/shared";
import { SaveButton, RemoveButton } from "@/app/_components/shared";

export function ListItem() {
  return (
    <>
      <li className="py-2 px-2 md:flex md:items-center md:w-full">
        <figure className="flex items-start gap-x-1 mb-md:items-center md:w-[308px] md:whitespace-nowrap pc:w-[320px] pc:gap-x-1.5">
          <CircleImage
            src="/assets/flags/usa.png"
            alt="United State America"
            className="w-6 shrink-[0] md:w-5"
          />
          <figcaption className="flex flex-col text-sm font-bold pt-1 mb-md:flex-row mb-lg:text-[16px] md:pt-0">
            <span>United State America</span>
            <span className="hidden mb-md:inline">&nbsp;-&nbsp;</span>
            <span>New_York</span>
          </figcaption>
        </figure>
        <div className="pl-7 py-1 leading-none md:pl-0 md:py-0">
          <time className="font-black text-2xl">20:17:38</time>
        </div>
        <div className="flex gap-x-2 text-xs pl-7 text-gray-500 leading-none md:text-sm md:pt-[4px] pc:pl-10 pc:gap-x-3">
          <time>Jan 25</time>
          <span>Sunny</span>
          <span>36°C / 96.8°F</span>
        </div>
        <div className="flex pl-7 pt-2 md:pl-0 md:pt-1 md:ml-auto ">
          <SaveButton />
        </div>
      </li>
      <li className="py-2 px-2 md:flex md:items-center md:w-full">
        <div className="flex items-start gap-x-1 mb-md:items-center md:w-[308px] md:whitespace-nowrap pc:w-[320px] pc:gap-x-1.5">
          <CircleImage
            src="/assets/flags/jpn.png"
            alt="United State America"
            className="w-6 shrink-[0] md:w-5"
          />
          <div className="flex flex-col text-sm font-bold pt-[2px] mb-md:flex-row mb-lg:text-[16px] md:pt-0">
            <span>Japan</span>
            <span className="hidden mb-md:inline">&nbsp;-&nbsp;</span>
            <span>Asia</span>
          </div>
        </div>
        <div className="pl-7 py-1 md:pl-0 md:py-0">
          <time className="font-black text-2xl">20:17:38</time>
        </div>
        <div className="flex gap-x-2 text-xs pl-7 text-gray-500 md:text-sm md:pt-[4px] pc:pl-10 pc:gap-x-3">
          <time>Jan 25</time>
          <span>Sunny</span>
          <span>36°C / 96.8°F</span>
        </div>
        <div className="flex pl-7 pt-2 md:pl-0 md:pt-1 md:ml-auto ">
          <RemoveButton />
        </div>
      </li>
    </>
  );
}
