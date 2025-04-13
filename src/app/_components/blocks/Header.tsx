import { Logo, Menu } from "@/app/_components/widgets/";

export function Header() {
  return (
    <header className="flex items-start justify-between px-5 pt-1 md:pt-2">
      <Logo />
      <Menu />
    </header>
  );
}
