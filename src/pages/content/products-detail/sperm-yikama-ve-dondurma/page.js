import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/spermgrad-30-125', name: 'SPERMGRAD™ 30/125', brand: 'Vitrolife', path: 'spermgrad125.png' },
{ webpath: '/spermrinse', name: 'SPERMRINSE™', brand: 'Vitrolife', path: 'SpermRinse.png' },
{ webpath: '/spermfreeze-solution', name: 'SPERMFREEZE SOLUTION™', brand: 'Vitrolife', path: 'SpermFreeze_Solution.png' }
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