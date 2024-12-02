import { usePathname } from 'next/navigation';
import ProductDisplay from './detailed-product-component';
import productsData from './test.json';

const flattenProducts = (data) => {
  let flatProducts = [];
  
  // Recursive function to handle nested arrays and objects
  const processItem = (item) => {
    if (Array.isArray(item)) {
      item.forEach(subItem => processItem(subItem));
    } else if (item && typeof item === 'object') {
      if (item.name) {
        flatProducts.push(item);
      }
      // Check for nested products array
      if (item.products) {
        item.products.forEach(product => processItem(product));
      }
    }
  };

  // Process the entire data structure
  processItem(productsData);
  
  return flatProducts;
};

const createUrlFriendlyName = (name) => {
  if (!name || typeof name !== 'string') return '';
  
  return name
    .toLowerCase()
    .replace(/[™®]/g, '') // Remove ™ and ® symbols
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, ''); // Remove any other special characters
};

const ProductDetail = () => {
  const pathname = usePathname();
  const productId = pathname.split('/').pop(); // Gets the last part of the URL
  
  // Flatten the nested product structure
  const flattenedProducts = flattenProducts(productsData);
  
  // Find the product using case-insensitive comparison and URL-friendly format
  const product = flattenedProducts.find(p => {
    if (!p || !p.name) return false;
    const urlFriendlyName = createUrlFriendlyName(p.name);
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