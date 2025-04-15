import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import { Header } from "@/app/_components/blocks";

export const metadata: Metadata = {
  title: "World Time Weather",
  description:
    "Check real-time information on current time and weather conditions worldwide. Instantly view different time zones and access up-to-date weather and temperature data from around the globe. The perfect tool for international communication and travel planning.",
  icons: {
    icon: ["/assets/favicons/favicon.ico"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-29FCYW05Z6"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
