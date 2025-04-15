import Script from "next/script";
export function Advertisement() {
  return (
    <div className="flex items-center justify-center w-full h-[90px] mt-4 mb-6 border border-gray-100 sm:mb-11 md:mb-14 pc:mb-[84px]">
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADSENSE_CLIENT_ID}`}
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
}
