import { Logo } from "@/app/_components/shared/logos";
import { Menu } from "@/app/_components/widgets/menu";

export function Header() {
  return (
    <header className="flex justify-between px-5">
      <Logo />
      <Menu />
    </header>
  );
}
