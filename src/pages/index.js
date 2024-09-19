import Image from "next/image";
import Navbar from "./content/navbar";

import Main from "./content/main";
import Head from "next/head";

import localFont from "next/font/local";
import Bottombar from "./content/bottombar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Sismedikal</title>
        <meta
          name="description"
          content="IVF'de 25 yılı aşkın deneyimi ile, sektör lideri çözüm ortağınız. "
        />
      </Head>
      <div className="bg-[#ffffff] flex flex-col min-h-screen">
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div className="flex-grow">
          <Main />
        </div>
        <div className="mt-16">
          <Bottombar />
        </div>
      </div>
    </>
  );
}
