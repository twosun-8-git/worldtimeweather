import { LogoType } from "@/app/_components/shared";

type Props = {
  title: string;
};

export function Logo({ title }: Props) {
  return (
    <h1>
      <LogoType title={title} />
    </h1>
  );
}
