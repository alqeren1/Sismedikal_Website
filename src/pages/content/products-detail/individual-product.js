import { usePathname } from 'next/navigation';
import ProductDisplay from './detailed-product-component';
import productsData from './test.json';

const ProductDetail = () => {
  const pathname = usePathname();
  const productId = pathname.split('/').pop(); // Gets the last part of the URL

  // Find the product using case-insensitive comparison and URL-friendly format
  const product = productsData.find(p => {
    // Remove special characters and convert to lowercase for comparison
    const urlFriendlyName = p.name
      .toLowerCase()
      .replace(/[™®]/g, '')  // Remove ™ and ® symbols
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ''); // Remove any other special characters
    
    return urlFriendlyName === productId.toLowerCase();
  });

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Ürün bulunamadı</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProductDisplay product={product} />
    </div>
  );
};

export default ProductDetail;