"use client";

import { useState } from "react";
import { useAtom } from "jotai";

import { visibleListAtom } from "@/app/_atoms";
import { SearchInput } from "@/app/_components/widgets";
import { List } from "@/app/_components/parts";

export function Search() {
  const [visibleList, setVisibleList] = useAtom(visibleListAtom);

  const [keyword, setKeyword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    setVisibleList(value.length >= 2);
  };

  return (
    <div className="px-1">
      <SearchInput keyword={keyword} onChange={handleChange} />
      {visibleList && <List keyword={keyword} />}
    </div>
  );
}
