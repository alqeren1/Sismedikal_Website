import { usePathname } from "next/navigation";
import ProductDisplay from "./detailed-product-component";
import GXDisplay from "./g-serisi-kultur-medyumlari/gx-display-component";
import EvaluationDisplay from "./embryoscope/evaluation-display";
import EmbryoGlueDisplay from "./g-serisi-kultur-medyumlari/embryoglue-display-component";
import OVOILDisplay from "./ovoil/ovoil-component";
import productsData from "./sismed_products.json";

const normalizeText = (text) => {
  if (!text || typeof text !== "string") return "";
  const turkishMap = {
    ı: "i",
    ğ: "g",
    ü: "u",
    ş: "s",
    ö: "o",
    ç: "c",
    İ: "i",
    Ğ: "g",
    Ü: "u",
    Ş: "s",
    Ö: "o",
    Ç: "c",
  };
  const specialCharMap = {
    "+": "plus",
    "&": "and",
    "@": "at",
    "#": "hash",
  };

  // Decode URI component first in case the input is URL-encoded
  const decodedText = decodeURIComponent(text);
  const normalized = decodedText
    .toLowerCase()
    .replace(/[™®©℠]/g, "") // Remove trademarks
    .replace(/[ığüşöçİĞÜŞÖÇ]/g, (char) => turkishMap[char] || char) // Normalize Turkish characters
    .replace(/[+&@#]/g, (char) => specialCharMap[char] || "-") // Replace special chars
    .replace(/\//g, "-") // Replace slash with dash
    .replace(/\s+/g, "-") // Convert spaces to hyphens
    .replace(/[^a-z0-9-]/g, "") // Remove non-alphanumeric characters
    .replace(/-+/g, "-") // Replace multiple hyphens with one
    .replace(/^-|-$/g, ""); // Trim hyphens

  console.log("Original:", text);
  console.log("Decoded:", decodedText);
  console.log("Normalized:", normalized);
  return normalized;
};

const ProductDetail = () => {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();

  const findProduct = (data) => {
    const stack = [...(Array.isArray(data) ? data : [data])];
    const normalizedProductId = normalizeText(productId);
    console.log("Searching for normalized product ID:", normalizedProductId);

    while (stack.length) {
      const current = stack.pop();
      if (!current) continue;

      if (current.name) {
        const normalizedName = normalizeText(current.name);
        console.log("Comparing with:", current.name);
        console.log("Normalized to:", normalizedName);
        if (normalizedName === normalizedProductId) {
          return current;
        }
      }

      if (Array.isArray(current.products)) {
        stack.push(...current.products);
      }
      if (Array.isArray(current.categories)) {
        stack.push(...current.categories);
      }
    }
    return null;
  };

  const product = findProduct(productsData);

  const getProductDisplay = (product) => {
    if (product.id === "gx") {
      return <GXDisplay />;
    }
    if (product.id === "embryoglue") {
      return <EmbryoGlueDisplay />;
    }
    if (product.id === "ovoil") {
      return <OVOILDisplay />;
    }
    if (product.id === "evaluation") {
      return <EvaluationDisplay />;
    }
    return <ProductDisplay product={product} />;
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Ürün bulunamadı</h1>
      </div>
    );
  }

  return (
    <div className="bg-white w-full mx-auto px-4 py-8">
      {getProductDisplay(product)}
    </div>
  );
};

export default ProductDetail;
