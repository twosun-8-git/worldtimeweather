import { NextResponse } from "next/server";

import countries from "i18n-iso-countries";
import countriesEN from "i18n-iso-countries/langs/en.json";

export async function GET(request: Request) {
  countries.registerLocale(countriesEN);

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

  if (ip === "127.0.0.1" || ip === "::1" || ip === "unknown") {
    return NextResponse.json({
      ip: "開発環境",
      country: "Japan",
      countryCode: "JP",
      timezone: "Asia/Tokyo",
    });
  }

  try {
    const response = await fetch(`https://ipinfo.io/${ip}/json`);

    if (!response.ok) {
      throw new Error(`ipinfo.io responded with status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      ip,
      country: countries.getName(data.country, "en"),
      countryCode: data.country,
      region: data.region,
      timezone: data.timezone,
    });
  } catch (error) {
    console.error("API error:", error);

    // エラー時はデフォルト値を返す
    return NextResponse.json({
      ip,
      country: "United States of America",
      countryCode: "us",
      timezone: "America/New_York",
    });
  }
}
