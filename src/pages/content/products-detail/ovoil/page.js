import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { id: 1, name: 'OVOIL™', brand: 'Vitrolife', path:'' },

];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="OVOIL"
    subtitle=""
  />
  );
}