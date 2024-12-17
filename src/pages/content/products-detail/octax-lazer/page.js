import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/octax-lazer', name: 'OCTAX LAZER', brand: 'Vitrolife', path: 'octax.png' }

];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="OCTAX LAZER & GÖRÜNTÜLEME SİSTEMİ"
    subtitle=""
  />
  );
}