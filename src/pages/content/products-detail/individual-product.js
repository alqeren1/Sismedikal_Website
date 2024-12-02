import { usePathname } from 'next/navigation';
import ProductDisplay from './detailed-product-component';
import productsData from './test.json';

const normalizeText = (text) => {
  if (!text || typeof text !== 'string') return '';
  
  const turkishMap = {
    'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c',
    'İ': 'i', 'Ğ': 'g', 'Ü': 'u', 'Ş': 's', 'Ö': 'o', 'Ç': 'c'
  };

  return text
    .toLowerCase()
    .replace(/[™®©℠]/g, '')
    .replace(/[ığüşöçİĞÜŞÖÇ]/g, char => turkishMap[char] || char)
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

const ProductDetail = () => {
  const pathname = usePathname();
  const productId = pathname.split('/').pop();

  const findProduct = (data) => {
    const stack = [...(Array.isArray(data) ? data : [data])];
    const normalizedProductId = normalizeText(productId);
    
    while (stack.length) {
      const current = stack.pop();
      
      if (!current) continue;

      if (current.name && normalizeText(current.name) === normalizedProductId) {
        return current;
      }

      if (Array.isArray(current.products)) {
        stack.push(...current.products);
      }
    }
    return null;
  };

  const product = findProduct(productsData);

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