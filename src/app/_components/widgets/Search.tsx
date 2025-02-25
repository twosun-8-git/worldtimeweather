import { InputText, SearchIcon } from "@/app/_components/shared";

export function Search() {
  return (
    <div>
      <label className="relative ">
        <div className="flex items-center gap-x-1 text-navy-100 absolute left-2 top-1/2 -translate-y-1/2 text-sm">
          <SearchIcon size={14} />
          <span>Search other country</span>
        </div>
        <InputText className="w-full border border-gray-100 p-2 rounded-md" />
      </label>
    </div>
  );
}
