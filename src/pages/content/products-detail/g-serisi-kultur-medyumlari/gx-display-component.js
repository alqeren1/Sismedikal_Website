import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Beaker, ShieldCheck, Info } from 'lucide-react';

const GXDisplay = () => {
  const products = [
    {
      name: "Gx-MOPS™ PLUS",
      code: "10173",
      volume: "1 x 125 mL",
      description: "MOPS buffered medium containing human serum albumin, gentamicin and antioxidants for handling and manipulating oocytes and embryos in ambient atmosphere.",
      application: "For use after equilibration at +37°C."
    },
    {
      name: "Gx-IVF™",
      code: "10171",
      volume: "1 x 60 mL",
      description: "Bicarbonate buffered medium containing human serum albumin, gentamicin and antioxidants for preparation and handling of gametes, for in vitro fertilisation and intrauterine insemination.",
      application: "For use after equilibration at +37°C and 6 % CO2."
    },
    {
      name: "Gx-TL™",
      code: "10172",
      volume: "1 x 30 mL",
      description: "Bicarbonate buffered medium containing hyaluronan, human serum albumin, gentamicin and antioxidants for culture of embryos from fertilisation to the blastocyst stage and for embryo transfer.",
      application: "For use after equilibration at +37°C and 6 % CO2."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Gx Media</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Featuring a triple antioxidant combination, Gx-MOPS™ PLUS, Gx-IVF™ and Gx-TL™ represent the latest generation of Vitrolife media. The triple antioxidant protection for gamete and embryo handling, fertilisation and culture have a highly beneficial effect on embryo development.
        </p>
      </div>

      {/* Storage Information */}
      <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3 mb-8">
        <ShieldCheck className="text-blue-600 w-6 h-6" />
        <p className="text-blue-800 font-medium">Store dark at +2 to +8ºC</p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.code} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                  <p className="text-gray-500">Code: {product.code}</p>
                  <p className="text-gray-500">{product.volume}</p>
                </div>
                <Beaker className="w-8 h-8 text-blue-600" />
              </div>
              
              <div className="space-y-3 pt-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Description</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Application</h3>
                  <p className="text-gray-600 text-sm">{product.application}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="mt-12 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Triple antioxidant protection including Acetyl-L-Carnitine, Alpha-Lipoic Acid and N-Acetyl-L-Cysteine for improved embryo development</p>
          </div>
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Benefits present at both 5% and 20% oxygen levels</p>
          </div>
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Improved ICSI fertilisation rates when used for sperm preparation, oocyte collection and subsequent ICSI fertilisation</p>
          </div>
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700">Significantly improved pregnancy rates for women aged 35–40 years when used continuously throughout the IVF process</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GXDisplay;