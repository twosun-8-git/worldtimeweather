"use client";

import { useState } from "react";

import { List } from "@/app/_components/parts";
import { SearchInput } from "@/app/_components/widgets";

export function Search() {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <SearchInput keyword={keyword} setKeyword={setKeyword} />
      {keyword.length >= 3 && <List keyword={keyword} />}
    </>
  );
}
