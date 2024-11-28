import "@/styles/globals.css";
import Navbar from "./content/navbar";
import Bottombar from "./content/bottombar";

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
