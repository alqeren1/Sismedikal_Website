import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { id: 1, name: 'G-RINSE™', brand: 'Vitrolife', path:'' },
  { id: 2, name: 'G-IVF™ PLUS', brand: 'Vitrolife' },
  { id: 3, name: 'G-1™ PLUS', brand: 'Vitrolife' },
  { id: 4, name: 'EMBRYOGLUE®', brand: 'Vitrolife' },
  { id: 5, name: 'G-MOPS™', brand: 'Vitrolife' },
  { id: 6, name: 'G-GAMETE™', brand: 'Vitrolife' },
  { id: 7, name: 'G-2™', brand: 'Vitrolife' },
  { id: 8, name: 'HSA-SOLUTION™', brand: 'Vitrolife' },
  { id: 9, name: 'G-MOPS™ PLUS', brand: 'Vitrolife' },
  { id: 10, name: 'G-TL™', brand: 'Vitrolife' },
  { id: 11, name: 'G-2™ PLUS', brand: 'Vitrolife' },
  { id: 12, name: 'G-MM™', brand: 'Vitrolife' },
  { id: 13, name: 'G-IVF™', brand: 'Vitrolife' },
  { id: 14, name: 'G-1™', brand: 'Vitrolife' },
  { id: 15, name: 'G-PGD™', brand: 'Vitrolife' }
];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="G-SERİSİ KÜLTÜR MEDYUMLARI"
    subtitle="Vitrolife'ın Yenilikçi Kültür Medyum Çözümleri"
  />
  );
}