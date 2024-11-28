import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  { id: 1, name: 'G-RINSE™', brand: 'Vitrolife', path:'' },
  { id: 2, name: 'G-IVF™ PLUS', brand: 'Vitrolife' },
  { id: 3, name: 'G-1™ PLUS', brand: 'Vitrolife' },
  { id: 4, name: 'EMBRYOGLUE®', brand: 'Vitrolife' },
  { id: 5, name: 'G-MOPS™', brand: 'Vitrolife' },
  { id: 6, name: 'G-GAMETE™', brand: 'Vitrolife' },
  { id: 7, name: 'G-2™', brand: 'Vitrolife' },
  { id: 8, name: 'HSA-SOLUTION™', brand: 'Vitrolife' },
  { id: 9, name: 'G-MOPS™ PLUS', brand: 'Vitrolife' },
  { id: 10, name: 'G-TL™', brand: 'Vitrolife' },
  { id: 11, name: 'G-2™ PLUS', brand: 'Vitrolife' },
  { id: 12, name: 'G-MM™', brand: 'Vitrolife' },
  { id: 13, name: 'G-IVF™', brand: 'Vitrolife' },
  { id: 14, name: 'G-1™', brand: 'Vitrolife' },
  { id: 15, name: 'G-PGD™', brand: 'Vitrolife' }
];

export default function GSeriesProducts() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">G-SERİSİ KÜLTÜR MEDYUMLARI</h1>
          <p className="text-xl text-blue-600">Vitrolife'ın Yenilikçi Kültür Medyum Çözümleri</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => router.push(product.path)}
              className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden group"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-50">
                <img
                  src="/api/placeholder/300/300"
                  alt={product.name}
                  className="w-full h-full object-contain object-center transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{product.name}</h3>
                <p className="text-blue-600 mb-4">{product.brand}</p>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300 hover:bg-blue-700 group">
                  <span>DAHA FAZLA</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}