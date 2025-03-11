"use client";

import { useEffect, useState } from "react";

export function Ip() {
  const [ip, setIp] = useState("取得中...");

  useEffect(() => {
    fetch(window.location.href) // 自分自身にリクエスト
      .then((res) => res.headers.get("X-Visitor-IP"))
      .then((ip) => setIp(ip || "取得失敗"))
      .catch(() => setIp("エラー"));
  }, []);

  return (
    <div>
      <h1>訪問者の IP アドレス</h1>
      <p>{ip}</p>
    </div>
  );
}
