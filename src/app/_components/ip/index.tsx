// src/app/components/GeoInfo.tsx
"use client";

import { useEffect, useState } from "react";

type GeoInfoData = {
  ip: string;
  country: string;
  countryCode: string;
  region: string;
  timezone: string;
};

export function GeoInfo() {
  const [data, setData] = useState<GeoInfoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/geoip")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`エラー: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("エラー:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-3 text-xs">読み込み中...</div>;
  if (error) return <div className="p-3 text-xs text-red">エラー: {error}</div>;
  if (!data) return <div className="p-3 text-xs">データがありません</div>;

  return (
    <div className="p-3 bg-background-gray rounded-md mt-4">
      <h2 className="text-sm font-bold mb-2">訪問者情報</h2>
      <p className="text-xs">IP: {data.ip}</p>
      <p className="text-xs">
        国: {data.country} ({data.countryCode})
      </p>
      <p className="text-xs">region: {data.region}</p>
      <p className="text-xs">タイムゾーン: {data.timezone}</p>
    </div>
  );
}
