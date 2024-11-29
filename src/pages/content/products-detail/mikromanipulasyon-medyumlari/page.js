import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { id: 1, name: 'ICSI™', brand: 'Vitrolife', path: '' },
 { id: 2, name: 'HYASE-10X™', brand: 'Vitrolife', path: '' }
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