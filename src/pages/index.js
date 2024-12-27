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

        <link rel="icon" type="image/png" href="/sis_icon.png" />

        <meta
          name="description"
          content="IVF'de 25 yılı aşkın deneyimi ile, sektör lideri çözüm ortağınız."
        />
      </Head>
      <div className="bg-white flex flex-col min-h-screen">
        {/* Navbar */}

        {/* Content */}
        <div className="relative">
          <Main />
        </div>
      </div>
    </>
  );
}
