"use client";

import { useSetAtom } from "jotai";

import { visibleModalAtom } from "@/app/_atoms";
import { MenuIcon } from "@/app/_components/shared/icons";

export function Menu() {
  const setVisibleModal = useSetAtom(visibleModalAtom);

  return (
    <button
      type="button"
      onClick={() => setVisibleModal(true)}
      className="flex items-center gap-x-1 pt-1.5"
    >
      <MenuIcon size={12} />
      <span className="text-xs text-gray-700">Menu</span>
    </button>
  );
}
