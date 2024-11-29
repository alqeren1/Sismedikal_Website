import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { id: 1, name: 'SPERMGRAD™ 30/125', brand: 'Vitrolife', path:'' },
  { id: 2, name: 'SPERMRINSE™', brand: 'Vitrolife' },
  { id: 3, name: 'SPERMFREEZE SOLUTION™', brand: 'Vitrolife' },
];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="SPERM YIKAMA VE DONDURMA"
    subtitle="Vitrolife'ın Yenilikçi Kültür Medyum Çözümleri"
  />
  );
}