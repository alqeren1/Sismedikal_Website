import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { id: 1, name: 'EMBRYOSCOPE+ GÖRÜNTÜLEME SİSTEMİ', brand: 'Vitrolife', path: '' },
 { id: 2, name: 'EMBRYOSCOPE 8 GÖRÜNTÜLEME SİSTEMİ', brand: 'Vitrolife', path: '' },
 { id: 3, name: 'EMBRYOSCOPE FLEX GÖRÜNTÜLEME SİSTEMİ', brand: 'Vitrolife', path: '' },
 { id: 4, name: 'EMBRYOSCOPE GÖRÜNTÜLEME SİSTEMİ', brand: 'Vitrolife', path: '' },
 { id: 5, name: 'DEĞERLENDİRME ARAÇLARI', brand: 'Vitrolife', path: '' },
 { id: 6, name: 'GÖRÜNTÜLEME SİSTEMİ KÜLTÜR KAPLARI', brand: 'Vitrolife', path: '' }


];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="EMBRİYO GÖRÜNTÜLEME SİSTEMLERİ"
    subtitle=""
  />
  );
}