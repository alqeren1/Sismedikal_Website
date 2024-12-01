import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/rapidwarm-omni', name: 'RAPIDWARM™ OMNI', brand: 'Vitrolife', path: '' },
{ webpath: '/rapidwarm-cleave', name: 'RAPIDWARM™ CLEAVE', brand: 'Vitrolife', path: '' },
{ webpath: '/rapidwarm-blast', name: 'RAPIDWARM™ BLAST', brand: 'Vitrolife', path: '' },
{ webpath: '/rapid-i-vitrifikasyon-sistemi', name: 'RAPID-I™ VİTRİFİKASYON SİSTEMİ', brand: 'Vitrolife', path: '' },
{ webpath: '/rapidvit-omni', name: 'RAPIDVIT™ OMNI', brand: 'Vitrolife', path: '' },
{ webpath: '/rapidvit-cleave', name: 'RAPIDVIT™ CLEAVE', brand: 'Vitrolife', path: '' },
{ webpath: '/rapidvit-blast', name: 'RAPIDVIT™ BLAST', brand: 'Vitrolife', path: '' }
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