import Image from "next/image";
import Navbar from "./content/navbar";
import Main from "./content/main";
import Head from "next/head";
import Bottombar from "./content/bottombar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sismedikal</title>
        <meta
          name="description"
          content="IVF'de 25 yılı aşkın deneyimi ile, sektör lideri çözüm ortağınız."
        />
      </Head>
      <div className="bg-white flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-20">
          <Navbar />
        </div>
        {/* Content */}
        <div className="relative">
          <Main />
        </div>
        {/* Bottombar */}
        <div className="relative">
          <Bottombar />
        </div>
      </div>
    </>
  );
}
