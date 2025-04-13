import type { Metadata } from "next";

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
      </body>
    </html>
  );
}
