import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/icsi', name: 'ICSI™', brand: 'Vitrolife', path: 'ICSI.png' },
{ webpath: '/hyase-10x', name: 'HYASE-10X™', brand: 'Vitrolife', path: 'HYASE.png' }
];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="MİKROMANİPÜLASYON MEDYUMLARI"
    subtitle="Vitrolife'ın Yenilikçi Kültür Medyum Çözümleri"
  />
  );
}