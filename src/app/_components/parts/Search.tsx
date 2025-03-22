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

  const handleFocus = () => {
    if (keyword.length >= 2) {
      setVisibleList(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setVisibleList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setVisibleList]);

  return (
    <div className="mt-2 px-1 md:mt-4" ref={containerRef}>
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
