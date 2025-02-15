import Link from "next/link";

export function Logo() {
  return (
    <h1>
      <Link href="/" className="text-[10px] ">
        World Time Weather
      </Link>
    </h1>
  );
}
