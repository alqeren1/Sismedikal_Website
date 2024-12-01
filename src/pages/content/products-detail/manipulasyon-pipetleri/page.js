import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/denudasyon-pipeti', name: 'DENUDASYON PİPETİ', brand: 'Vitrolife', path: '' },
{ webpath: '/transfer-pipeti', name: 'TRANSFER PİPETİ', brand: 'Vitrolife', path: '' },
{ webpath: '/pzd-pipeti', name: 'PZD PİPETİ', brand: 'Vitrolife', path: '' },
{ webpath: '/pipet-aksesuarlari', name: 'PİPET AKSESUARLARI', brand: 'Vitrolife', path: '' },
{ webpath: '/icsi-pipeti', name: 'ICSI PİPETİ', brand: 'Vitrolife', path: '' },
{ webpath: '/holding-pipeti', name: 'HOLDING PİPETİ', brand: 'Vitrolife', path: '' },
{ webpath: '/biyopsi-pipeti', name: 'BİYOPSİ PİPETİ', brand: 'Vitrolife', path: '' },
{ webpath: '/hatching-pipeti', name: 'HATCHING PİPETİ', brand: 'Vitrolife', path: '' }

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