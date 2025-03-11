// src/app/api/geoip/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // IPアドレスの取得
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

  // 開発環境用のフォールバック
  const devEnvironment =
    ip === "127.0.0.1" || ip === "::1" || ip === "localhost";

  try {
    // 本番環境または開発環境に応じて処理を分ける
    if (devEnvironment) {
      // 開発環境用のモックデータ
      return NextResponse.json({
        ip: "開発環境",
        country: "Japan",
        countryCode: "JP",
        timezone: "Asia/Tokyo",
      });
    } else {
      // 本番環境: 実際のIPからgeo情報を取得
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.reason || "Unknown error");
      }

      return NextResponse.json({
        ip,
        country: data.country_name,
        countryCode: data.country_code,
        timezone: data.timezone,
      });
    }
  } catch (error) {
    console.error("GeoIP API error:", error);

    // エラー時のフォールバック
    return NextResponse.json({
      ip,
      country: "Unknown",
      countryCode: "XX",
      timezone: "UTC",
    });
  }
}
