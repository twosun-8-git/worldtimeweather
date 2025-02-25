import { WeatherIcon } from "@/app/_components/shared";

// TODO: weatherは string（sun, rainなど）で受け取りアイコンと文字出力
// type Props = {
//   weather: string
// }

export function Weather() {
  return (
    <div className="flex items-center gap-x-1">
      <WeatherIcon type="rain" size={16} />
      <time dateTime="2025-01-25">Sunny</time>
    </div>
  );
}
