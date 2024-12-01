import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
 
  { webpath: '/micro-droplet-dish', name: 'MICRO-DROPLET DISH', brand: 'Vitrolife', path: '' },
  { webpath: '/centre-well-dish', name: 'CENTRE-WELL DISH', brand: 'Vitrolife', path: '' },
  { webpath: '/culture-dish-40-mm', name: 'CULTURE DISH 40 MM', brand: 'Vitrolife', path: '' },
  { webpath: '/collection-dish-90-mm', name: 'COLLECTION DISH 90 MM', brand: 'Vitrolife', path: '' },
  { webpath: '/serological-pipettes', name: 'SEROLOGICAL PIPETTES', brand: 'Vitrolife', path: '' },
  { webpath: '/5-well-dish', name: '5-WELL DISH', brand: 'Vitrolife', path: '' },
  { webpath: '/icsi-dish', name: 'ICSI DISH', brand: 'Vitrolife', path: '' },
  { webpath: '/culture-dish-60-mm', name: 'CULTURE DISH 60 MM', brand: 'Vitrolife', path: '' },
  { webpath: '/centrifuge-tubes', name: 'CENTRIFUGE TUBES', brand: 'Vitrolife', path: '' },
  { webpath: '/pasteur-pipettes', name: 'PASTEUR PIPETTES', brand: 'Vitrolife', path: '' },
  { webpath: '/oocyte-collection-tube', name: 'OOCYTE COLLECTION TUBE', brand: 'Vitrolife', path: '' }
   
];

export default function Home() {
  return (
    <ProductGrid
    products={products}
    title="VITROLIFE KÜLTÜR KAPLARI"
    subtitle=""
  />
  );
}