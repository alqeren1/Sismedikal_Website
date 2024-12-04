import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/sense', name: 'SENSE', brand: 'Vitrolife', path: 'SENSE-2.png' },
{ webpath: '/single-lumen', name: 'SINGLE LUMEN™', brand: 'Vitrolife', path: 'single-lumen.png' },
{ webpath: '/double-lumen', name: 'DOUBLE LUMEN™', brand: 'Vitrolife', path: 'double-lumen.png' },
{ webpath: '/igne-aksesuarlari', name: 'İĞNE AKSESUARLARI', brand: 'Vitrolife', path: 'aksesuar.png' }
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