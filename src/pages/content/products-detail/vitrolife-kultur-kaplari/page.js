import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../gridcomponent';

const products = [
 
    { id: 1, name: 'MICRO-DROPLET DISH', brand: 'Vitrolife', path: '' },
    { id: 2, name: 'CENTRE-WELL DISH', brand: 'Vitrolife', path: '' }, 
    { id: 3, name: 'CULTURE DISH 40 MM', brand: 'Vitrolife', path: '' },
    { id: 4, name: 'COLLECTION DISH 90 MM', brand: 'Vitrolife', path: '' },
    { id: 5, name: 'SEROLOGICAL PIPETTES', brand: 'Vitrolife', path: '' },
    { id: 6, name: '5-WELL DISH', brand: 'Vitrolife', path: '' },
    { id: 7, name: 'ICSI DISH', brand: 'Vitrolife', path: '' },
    { id: 8, name: 'CULTURE DISH 60 MM', brand: 'Vitrolife', path: '' },
    { id: 9, name: 'CENTRIFUGE TUBES', brand: 'Vitrolife', path: '' },
    { id: 10, name: 'PASTEUR PIPETTES', brand: 'Vitrolife', path: '' },
    { id: 11, name: 'OOCYTE COLLECTION TUBE', brand: 'Vitrolife', path: '' }
   
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