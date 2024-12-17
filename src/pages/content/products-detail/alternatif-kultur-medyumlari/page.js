import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/asp', name: 'ASP™', brand: 'Vitrolife', path: 'ASP125.png' },
];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="DİĞER KÜLTÜR MEDYUMLARI"
    subtitle="Vitrolife'ın Yenilikçi Kültür Medyum Çözümleri"
  />
  );
}