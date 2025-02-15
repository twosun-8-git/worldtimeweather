import { MenuIcon } from "@/app/_components/shared/icons";

export function Menu() {
  return (
    <button className="flex items-center gap-x-1 pt-1.5">
      <MenuIcon size={12} />
      <span className="text-[10px]">Menu</span>
    </button>
  );
}
