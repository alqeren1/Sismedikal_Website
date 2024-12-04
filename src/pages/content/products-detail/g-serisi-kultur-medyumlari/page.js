import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
  { webpath: '/g-rinse', name: 'G-RINSE™', brand: 'Vitrolife', path: 'G-RINSE1.png' },
  { webpath: '/g-ivf-plus', name: 'G-IVF™ PLUS', brand: 'Vitrolife', path: 'givf1.png' },
  { webpath: '/g-1-plus', name: 'G-1™ PLUS', brand: 'Vitrolife', path: 'G120PLUS1.png' },
  { webpath: '/embryoglue', name: 'EMBRYOGLUE®', brand: 'Vitrolife', path: 'eglue1.png' },
  { webpath: '/g-mops', name: 'G-MOPS™', brand: 'Vitrolife', path: 'G-MOPS1.png' },
  { webpath: '/g-gamete', name: 'G-GAMETE™', brand: 'Vitrolife', path: 'GGAMETE30202016_475X4921.png' },
  { webpath: '/g-2', name: 'G-2™', brand: 'Vitrolife', path: 'G21.png' },
  { webpath: '/hsa-solution', name: 'HSA-SOLUTION™', brand: 'Vitrolife', path: 'HSA1.png' },
  { webpath: '/g-mops-plus', name: 'G-MOPS™ PLUS', brand: 'Vitrolife', path: 'G-MOPS20PLUS1.png' },
  { webpath: '/g-tl', name: 'G-TL™', brand: 'Vitrolife', path: 'G-TL_Product_page1.png' },
  { webpath: '/g-2-plus', name: 'G-2™ PLUS', brand: 'Vitrolife', path: 'G220PLUS1.png' },
  { webpath: '/g-mm', name: 'G-MM™', brand: 'Vitrolife', path: 'G-MM1.png' },
  { webpath: '/g-ivf', name: 'G-IVF™', brand: 'Vitrolife', path: 'GIVF60202016_475X4921.png' },
  { webpath: '/g-1', name: 'G-1™', brand: 'Vitrolife', path: 'G11.png' },
  { webpath: '/g-pgd', name: 'G-PGD™', brand: 'Vitrolife', path: 'G-PGD1.png' }
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