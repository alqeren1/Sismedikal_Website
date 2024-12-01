import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/sense', name: 'SENSE', brand: 'Vitrolife', path: '' },
{ webpath: '/single-lumen', name: 'SINGLE LUMEN™', brand: 'Vitrolife', path: '' },
{ webpath: '/double-lumen', name: 'DOUBLE LUMEN™', brand: 'Vitrolife', path: '' },
{ webpath: '/igne-aksesuarlari', name: 'İĞNE AKSESUARLARI', brand: 'Vitrolife', path: '' }
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