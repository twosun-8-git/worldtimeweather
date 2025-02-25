import { Logo, Menu } from "@/app/_components/widgets/";

export function Header() {
  return (
    <header className="flex justify-between px-5">
      <Logo title="World Time Weather" />
      <Menu />
    </header>
  );
}
