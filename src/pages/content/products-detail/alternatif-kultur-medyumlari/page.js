import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/asp', name: 'ASP™', brand: 'Vitrolife', path: '' },
  { webpath: '/ivf', name: 'IVF™', brand: 'Vitrolife', path: '' }
];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="ALTERNATİF KÜLTÜR MEDYUMLARI"
    subtitle="Vitrolife'ın Yenilikçi Kültür Medyum Çözümleri"
  />
  );
}