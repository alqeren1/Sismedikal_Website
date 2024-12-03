import "@/styles/globals.css";
import Navbar from "./content/navbar";
import Bottombar from "./content/bottombar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* Navbar will be available on all pages */}
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Bottombar /> {/* Navbar will be available on all pages */}
    </div>
  );
}
