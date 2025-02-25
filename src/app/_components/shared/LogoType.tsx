import Link from "next/link";

type Props = {
  title: string;
};

export function LogoType({ title }: Props) {
  return (
    <Link href="/" className="text-xs text-gray-700">
      {title}
    </Link>
  );
}
