import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
    { id: 1, name: 'ASP™', brand: 'Vitrolife', path:'' },
    { id: 2, name: 'IVF™', brand: 'Vitrolife' },
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