import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  let ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] || // CloudFront, Reverse Proxy 用
    req.headers.get("cf-connecting-ip") || // Cloudflare 用
    req.headers.get("true-client-ip") || // 一部のプロキシ
    req.headers.get("x-real-ip") || // Nginx などで利用
    req.headers.get("forwarded")?.match(/for=([^;]+)/)?.[1]; // `Forwarded` ヘッダー対応

  // ローカル開発環境の場合
  if (!ip || ip === "127.0.0.1" || ip === "::1") {
    ip = "localhost (開発環境)";
  }

  console.log("Visitor IP:", ip); // ログ出力（Amplify 環境では CloudWatch に記録）

  // IP をレスポンスのヘッダーに追加（フロントエンドで取得できるようにする）
  const res = NextResponse.next();
  res.headers.set("X-Visitor-IP", ip);

  return res;
}

// Middleware を適用するパスを指定（すべてのページに適用）
export const config = {
  matcher: "/:path*",
};
