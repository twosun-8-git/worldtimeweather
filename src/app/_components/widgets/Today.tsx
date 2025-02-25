import { CalendarIcon } from "@/app/_components/shared";

// TODO: date は Date型で受け取り英語表記に変換
// type Props = {
//   date: string
// }

export function Today() {
  return (
    <div className="flex items-center gap-x-1">
      <CalendarIcon size={16} />
      <time dateTime="2025-01-25">Jan 25</time>
    </div>
  );
}
