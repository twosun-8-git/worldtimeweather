import React from "react";
import {
  Sun,
  CloudSun,
  Cloud,
  Cloudy,
  CloudFog,
  CloudDrizzle,
  CloudSnow,
  CloudHail,
  CloudLightning,
  Snowflake,
  CloudRainWind,
} from "lucide-react";

interface WeatherIconProps {
  code: number;
  size?: number;
  color?: string;
}

export const WeatherIcon = ({
  code,
  size = 24,
  color = "currentColor",
}: WeatherIconProps) => {
  const codeStr = code.toString();

  const sunnyCodes = ["1000"];
  const partlyCloudyCodes = ["1003"];
  const cloudCodes = ["1006"];
  const cloudyCodes = ["1009"];
  const fogCodes = ["1030", "1135", "1147"];
  const drizzleCodes = ["1063", "1150", "1153", "1180", "1183"];
  const snowCodes = [
    "1066",
    "1114",
    "1117",
    "1210",
    "1213",
    "1216",
    "1219",
    "1222",
    "1225",
    "1255",
    "1258",
  ];
  const hailCodes = [
    "1069",
    "1072",
    "1168",
    "1171",
    "1198",
    "1201",
    "1204",
    "1207",
    "1249",
    "1252",
    "1261",
    "1264",
  ];
  const lightningCodes = ["1087", "1273", "1276", "1279", "1282"];
  const snowflakeCodes = ["1237"];
  const rainCodes = ["1186", "1189", "1192", "1195", "1240", "1243", "1246"];

  if (sunnyCodes.includes(codeStr)) return <Sun size={size} color={color} />;
  if (partlyCloudyCodes.includes(codeStr))
    return <CloudSun size={size} color={color} />;
  if (cloudCodes.includes(codeStr)) return <Cloud size={size} color={color} />;
  if (cloudyCodes.includes(codeStr))
    return <Cloudy size={size} color={color} />;
  if (fogCodes.includes(codeStr)) return <CloudFog size={size} color={color} />;
  if (drizzleCodes.includes(codeStr))
    return <CloudDrizzle size={size} color={color} />;
  if (snowCodes.includes(codeStr))
    return <CloudSnow size={size} color={color} />;
  if (hailCodes.includes(codeStr))
    return <CloudHail size={size} color={color} />;
  if (lightningCodes.includes(codeStr))
    return <CloudLightning size={size} color={color} />;
  if (snowflakeCodes.includes(codeStr))
    return <Snowflake size={size} color={color} />;
  if (rainCodes.includes(codeStr))
    return <CloudRainWind size={size} color={color} />;

  return <Cloud size={size} color={color} />;
};
