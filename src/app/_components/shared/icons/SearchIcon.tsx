import { Search } from "lucide-react";

type Props = {
  className?: string;
  size?: number;
};

export function SearchIcon({ className, size = 10 }: Props) {
  return <Search size={size} className={className} />;
}
