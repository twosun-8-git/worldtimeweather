import { CardItem } from "@/app/_components/widgets";

export function CardList() {
  return (
    <div className="pt-8 px-1">
      <p className="text-xs text-gray-300 sm:text-sm">
        Countries you added ( It is lost when the browser history cleared )
      </p>
      <div className="pt-2 pb-4 sm:pt-3 sm:overflow-x-scroll">
        <div className="flex flex-col gap-2  mb-lg:flex-row mb-lg:flex-wrap sm:gap-3 sm:flex-nowrap">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
}
