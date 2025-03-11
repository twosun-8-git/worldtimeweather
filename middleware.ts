import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // ヘッダーから IP を取得
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] || // CloudFront やリバースプロキシ環境向け
    req.headers.get("cf-connecting-ip") || // Cloudflare の場合
    req.headers.get("true-client-ip") || // 一部のプロキシ環境
    "IP取得失敗"; // 取得できない場合

  // IP をコンソールに記録（Amplify の CloudWatch で確認可能）
  console.log("Visitor IP:", ip);

  // IP をレスポンスのヘッダーに追加（必要に応じて）
  const res = NextResponse.next();
  res.headers.set("X-Visitor-IP", ip);

  return res;
}

// Middleware を適用するパスを指定（すべてのページに適用）
export const config = {
  matcher: "/:path*",
};
