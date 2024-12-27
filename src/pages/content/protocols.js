import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Protocols() {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("protocols");
  const { t } = useTranslation();
  // Fetch the JSON data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json_data/scraped_links.json"); // Replace with the correct path to your JSON file
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const tabs = {
    protocols: { title: t("protocols.title") },
    links: { title: t("protocols.tab") },
  };

  const pdfLinks = [
    {
      name: t("protocols.con.0"),
      url: "/pdfs/swim_up.pdf", // Replace with actual path
    },
    {
      name: t("protocols.con.1"),
      url: "/pdfs/gradient.pdf", // Replace with actual path
    },
    { name: t("protocols.con.2"), url: "/pdfs/yumurta_toplama.pdf" },
    { name: t("protocols.con.3"), url: "/pdfs/icsi.pdf" },
    { name: t("protocols.con.4"), url: "/pdfs/embriyo_kulturu.pdf" },
    { name: t("protocols.con.5"), url: "/pdfs/embriyo_transfer.pdf" },
    {
      name: t("protocols.con.6"),
      url: "/pdfs/kriyoprezervasyon_klivaj.pdf",
    },
    {
      name: t("protocols.con.7"),
      url: "/pdfs/kriyoprezervasyon_blastokist.pdf",
    },
  ];

  return (
    <div className="flex flex-col bg-blue-50 items-center min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-blue-400 to-blue-500 h-[100px] xl:h-[200px] flex flex-col justify-center items-center">
        <div className="text-white text-center z-10">
          <h1 className="text-4xl xl:text-7xl font-bold">
            {t("protocols.title")}
          </h1>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8 overflow-x-auto scrollbar-hide">
          {Object.entries(tabs).map(([key, { title }]) => (
            <button
              key={key}
              onClick={() => setSelectedTab(key)}
              className={`px-6 py-3 font-semibold ${
                selectedTab === key
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-blue-400"
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {selectedTab === "protocols" && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              {t("protocols.title")}
            </h2>
            <ul className="space-y-4">
              {pdfLinks.map((pdf, index) => (
                <li key={index}>
                  <a
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-lg md:text-xl hover:text-blue-800"
                  >
                    {pdf.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedTab === "links" && (
          <div>
            {data.length === 0 ? (
              <div className="text-center text-gray-600">Loading...</div>
            ) : (
              data.map((subcategory, index) => (
                <div key={index} className="mb-12">
                  {/* Subcategory Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    {subcategory.subcategory}
                  </h3>

                  {/* Links */}
                  <ul className="space-y-2">
                    {subcategory.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 text-lg md:text-xl hover:text-blue-800"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
