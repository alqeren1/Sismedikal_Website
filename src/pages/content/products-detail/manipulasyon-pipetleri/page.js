import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/icsi-pipeti', name: 'ICSI PİPETİ', brand: 'Vitrolife', path: 'icsi-pipet.png' },
  { webpath: '/holding-pipeti', name: 'HOLDING PİPETİ', brand: 'Vitrolife', path: 'holding-pipet.png' },
  { webpath: '/denudasyon-pipeti', name: 'DENUDASYON PİPETİ (err)', brand: 'Vitrolife', path: 'denudasyon-pipet.png' },
{ webpath: '/transfer-pipeti', name: 'TRANSFER PİPETİ', brand: 'Vitrolife', path: 'transfer-pipet.png' },
{ webpath: '/pzd-pipeti', name: 'PZD PİPETİ', brand: 'Vitrolife', path: 'pzd-pipet.png' },
{ webpath: '/biyopsi-pipeti', name: 'BİYOPSİ PİPETİ', brand: 'Vitrolife', path: 'biyopsi-pipet.png' },
{ webpath: '/hatching-pipeti', name: 'HATCHING PİPETİ', brand: 'Vitrolife', path: 'hatching-pipet.png' },
{ webpath: '/pipet-aksesuarlari', name: 'PİPET AKSESUARLARI', brand: 'Vitrolife', path: 'pipet-aksesuar.png' },

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