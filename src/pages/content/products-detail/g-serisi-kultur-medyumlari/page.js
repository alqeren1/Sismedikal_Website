import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { id: 1, name: 'G-RINSE™', brand: 'Vitrolife', path: 'G-RINSE1.png' },
  { id: 2, name: 'G-IVF™ PLUS', brand: 'Vitrolife', path: 'givf1.png' },
  { id: 3, name: 'G-1™ PLUS', brand: 'Vitrolife', path: 'G120PLUS1.png' },
  { id: 4, name: 'EMBRYOGLUE®', brand: 'Vitrolife', path: 'eglue1.png' },
  { id: 5, name: 'G-MOPS™', brand: 'Vitrolife', path: 'G-MOPS1.png' },
  { id: 6, name: 'G-GAMETE™', brand: 'Vitrolife', path: 'GGAMETE30202016_475X4921.png' },
  { id: 7, name: 'G-2™', brand: 'Vitrolife', path: 'G21.png' },
  { id: 8, name: 'HSA-SOLUTION™', brand: 'Vitrolife', path: 'HSA1.png' },
  { id: 9, name: 'G-MOPS™ PLUS', brand: 'Vitrolife', path: 'G-MOPS20PLUS1.png' },
  { id: 10, name: 'G-TL™', brand: 'Vitrolife', path: 'G-TL_Product_page1.png' },
  { id: 11, name: 'G-2™ PLUS', brand: 'Vitrolife', path: 'G220PLUS1.png' },
  { id: 12, name: 'G-MM™', brand: 'Vitrolife', path: 'G-MM1.png' },
  { id: 13, name: 'G-IVF™', brand: 'Vitrolife', path: 'GIVF60202016_475X4921.png' },
  { id: 14, name: 'G-1™', brand: 'Vitrolife', path: 'G11.png' },
  { id: 15, name: 'G-PGD™', brand: 'Vitrolife', path: 'G-PGD1.png' }
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