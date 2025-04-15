import Script from "next/script";
export function Advertisement() {
  return (
    <div className="flex items-center justify-center w-full h-[90px] mt-4 mb-6 border border-gray-100 sm:mb-11 md:mb-14 pc:mb-[84px]">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.GOOGLE_ADSENSE_CLIENT_ID}
        data-ad-slot="8649972591"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="adsbygoogle-init" strategy="afterInteractive">
        {`
          window.adsbygoogle = window.adsbygoogle || [];
          window.adsbygoogle.push({});
        `}
      </Script>
    </div>
  );
}
