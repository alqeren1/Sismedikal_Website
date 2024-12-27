import "@/styles/globals.css";
import Navbar from "./content/navbar";
import Bottombar from "./content/bottombar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-22QZPYF57Y", {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      {/* Google Analytics Scripts */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-22QZPYF57Y`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-22QZPYF57Y', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      {/* Main App Layout */}
      <I18nextProvider i18n={i18n}>
        <Navbar /> {/* Navbar will be available on all pages */}
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
        <Bottombar /> {/* Bottombar will be available on all pages */}
      </I18nextProvider>
    </div>
  );
}
