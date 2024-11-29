import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { id: 1, name: 'RAPIDWARM™ OMNI', brand: 'Vitrolife', path: '' },
 { id: 2, name: 'RAPIDWARM™ CLEAVE', brand: 'Vitrolife', path: '' },
 { id: 3, name: 'RAPIDWARM™ BLAST', brand: 'Vitrolife', path: '' },
 { id: 4, name: 'RAPID-I™ VİTRİFİKASYON SİSTEMİ', brand: 'Vitrolife', path: '' },
 { id: 5, name: 'RAPIDVIT™ OMNI', brand: 'Vitrolife', path: '' },
 { id: 6, name: 'RAPIDVIT™ CLEAVE', brand: 'Vitrolife', path: '' },
 { id: 7, name: 'RAPIDVIT™ BLAST', brand: 'Vitrolife', path: '' }
];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="VİTRİFİKASYON"
    subtitle="Vitrolife'ın Yenilikçi Kültür Medyum Çözümleri"
  />
  );
}