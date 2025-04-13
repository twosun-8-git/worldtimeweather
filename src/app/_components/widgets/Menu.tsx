"use client";

import { useSetAtom } from "jotai";

import { visibleModalAtom } from "@/app/_atoms";

export function Menu() {
  const setVisibleModal = useSetAtom(visibleModalAtom);

  return (
    <button
      type="button"
      onClick={() => setVisibleModal(true)}
      className="flex items-center gap-x-1 pt-1.5"
    >
      <span className="text-sm text-gray-700">Menu</span>
    </button>
  );
}
