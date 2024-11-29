import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { id: 1, name: 'SENSE', brand: 'Vitrolife', path: '' },
 { id: 2, name: 'SINGLE LUMEN™', brand: 'Vitrolife', path: '' },
 { id: 3, name: 'DOUBLE LUMEN™', brand: 'Vitrolife', path: '' },
 { id: 4, name: 'İĞNE AKSESUARLARI', brand: 'Vitrolife', path: '' }
];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="OOSİT TOPLAMA İĞNELERİ"
    subtitle=""
  />
  );
}