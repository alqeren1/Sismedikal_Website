import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/embryoscope-plus', name: 'EMBRYOSCOPE+ GÖRÜNTÜLEME SİSTEMİ', brand: 'Vitrolife', path: 'embryoscope+.png' },
{ webpath: '/embryoscope-8', name: 'EMBRYOSCOPE 8 GÖRÜNTÜLEME SİSTEMİ', brand: 'Vitrolife', path: 'embryoscope8.png' },
{ webpath: '/embryoscope-flex', name: 'EMBRYOSCOPE FLEX GÖRÜNTÜLEME SİSTEMİ', brand: 'Vitrolife', path: 'embryoscope-flex.png' },
{ webpath: '/embryoscope', name: 'EMBRYOSCOPE GÖRÜNTÜLEME SİSTEMİ', brand: 'Vitrolife', path: 'embryoscope-system.png' },
{ webpath: '/degerlendirme-araclari', name: 'DEĞERLENDİRME ARAÇLARI', brand: 'Vitrolife', path: 'degerlendirme.png' },
{ webpath: '/goruntuleme-sistemi-kultur-kaplari', name: 'GÖRÜNTÜLEME SİSTEMİ KÜLTÜR KAPLARI', brand: 'Vitrolife', path: 'imaging-system-culture.jpeg' }


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