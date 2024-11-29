import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { id: 1, name: 'DENUDASYON PİPETİ', brand: 'Vitrolife', path: '' },
 { id: 2, name: 'TRANSFER PİPETİ', brand: 'Vitrolife', path: '' },
 { id: 3, name: 'PZD PİPETİ', brand: 'Vitrolife', path: '' },
 { id: 4, name: 'PİPET AKSESUARLARI', brand: 'Vitrolife', path: '' },
 { id: 5, name: 'ICSI PİPETİ', brand: 'Vitrolife', path: '' },
 { id: 6, name: 'HOLDING PİPETİ', brand: 'Vitrolife', path: '' },
 { id: 7, name: 'BİYOPSİ PİPETİ', brand: 'Vitrolife', path: '' },
 { id: 8, name: 'HATCHING PİPETİ', brand: 'Vitrolife', path: '' }

];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="MANİPÜLASYON PİPETLERİ"
    subtitle=""
  />
  );
}