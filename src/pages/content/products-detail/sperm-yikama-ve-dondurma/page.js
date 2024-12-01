import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/spermgrad-30-125', name: 'SPERMGRAD™ 30/125', brand: 'Vitrolife', path: '' },
{ webpath: '/spermrinse', name: 'SPERMRINSE™', brand: 'Vitrolife', path: '' },
{ webpath: '/spermfreeze-solution', name: 'SPERMFREEZE SOLUTION™', brand: 'Vitrolife', path: '' }
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