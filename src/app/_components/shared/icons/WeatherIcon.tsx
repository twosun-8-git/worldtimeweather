import { Sun, Cloud, CloudRain } from "lucide-react";

type WeatherType = "sun" | "cloud" | "rain";

type Props = {
  type?: WeatherType;
  size?: number;
  color?: string;
};

export function WeatherIcon({
  type = "sun",
  size = 10,
  color = "#94949d",
}: Props) {
  const weatherIcons = {
    sun: <Sun size={size} color={color} />,
    cloud: <Cloud size={size} color={color} />,
    rain: <CloudRain size={size} color={color} />,
  };

  return weatherIcons[type] || weatherIcons.sun;
}
