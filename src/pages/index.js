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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

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
