import { ListItem } from "@/app/_components/widgets";

type Props = {
  keyword: string;
};

export function List({ keyword }: Props) {
  console.log(keyword);
  return (
    <ul className="divide-y divide-gray-100 border border-gray-100 rounded-b-md bg-white relative">
      <ListItem />
    </ul>
  );
}
