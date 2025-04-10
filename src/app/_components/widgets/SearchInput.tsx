"use client";

import { cn } from "@/utils";
import { InputText, SearchIcon } from "@/app/_components/shared";

type Props = {
  keyword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  visibleList: boolean;
};

export function SearchInput({
  keyword,
  onChange,
  onFocus,
  visibleList,
}: Props) {
  const baseStyle =
    "flex items-center gap-x-1 text-navy-100 absolute left-2 top-1/2 -translate-y-1/2 text-sm transition-opacity duration-300";

  const placeholderOpacity = keyword.length > 0 ? "opacity-0" : "opacity-100";

  return (
    <label className="relative">
      <div className={cn(baseStyle, placeholderOpacity)}>
        <SearchIcon size={14} />
        <span>Search other country</span>
      </div>
      <InputText
        className={
          visibleList
            ? `rounded-none rounded-tl-md rounded-tr-md border-b-0`
            : `rounded-md`
        }
        value={keyword}
        onChange={onChange}
        onFocus={onFocus}
      />
    </label>
  );
}
