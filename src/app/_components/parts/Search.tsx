"use client";

import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";

import { visibleListAtom } from "@/app/_atoms";
import { SearchInput } from "@/app/_components/widgets";
import { List } from "@/app/_components/parts";

export function Search() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [visibleList, setVisibleList] = useAtom(visibleListAtom);

  const [keyword, setKeyword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    setVisibleList(value.length >= 2);
  };

  const handleFocus = () => setVisibleList(keyword.length >= 2);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setVisibleList(false);
        setKeyword("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setVisibleList]);

  return (
    <div className="w-full px-2 relative mt-2 md:mt-4" ref={containerRef}>
      <SearchInput
        keyword={keyword}
        onChange={handleChange}
        onFocus={handleFocus}
        visibleList={visibleList}
      />
      {visibleList && <List keyword={keyword} />}
    </div>
  );
}
