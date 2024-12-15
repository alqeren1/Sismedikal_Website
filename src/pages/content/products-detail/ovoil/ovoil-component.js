import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Info, Check } from "lucide-react";

const OVOILDisplay = () => {
  return (
    <main className="max-w-7xl mx-auto space-y-12 py-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">OVOIL™</h1>
        <p className="text-lg font-medium text-blue-600">Kültür Yağı</p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Kültür tüpleri, kuyuları veya damlacıklarındaki medyumların yüzeylerini kaplamak için geliştirilmiştir. Uygun viskozitede ve yüksek saflıkta hafif parafin yağıdır.
        </p>
      </section>

      {/* Product Cards */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* OVOIL */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <article className="grid md:grid-cols-2 gap-6">
              <figure className="flex items-center justify-center">
                <Image
                  src="/api/placeholder/200/300"
                  width={200}
                  height={300}
                  alt="OVOIL 100mL" 
                  className="object-contain max-h-[300px] rounded-lg"
                />
              </figure>
              <div className="space-y-4">
                <header>
                  <h2 className="text-2xl font-bold text-gray-900">OVOIL™</h2>
                  <p className="text-lg font-medium text-blue-600">100 mL</p>
                  <p className="text-gray-500">REF: 10029</p>
                </header>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Tanım</h3>
                  <p className="text-gray-600 text-sm">Steril hafif parafin yağı.</p>
                </div>
              </div>
            </article>
          </CardContent>
        </Card>

        {/* OVOIL HEAVY */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <article className="grid md:grid-cols-2 gap-6">
              <figure className="flex items-center justify-center">
                <Image 
                  src="/api/placeholder/200/300"
                  width={200}
                  height={300}
                  alt="OVOIL HEAVY" 
                  className="object-contain max-h-[300px] rounded-lg"
                />
              </figure>
              <div className="space-y-4">
                <header>
                  <h2 className="text-2xl font-bold text-gray-900">OVOIL HEAVY™</h2>
                  <p className="text-lg font-medium text-blue-600">100 mL</p>
                  <p className="text-gray-500">REF: 10174</p>
                </header>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Tanım</h3>
                  <p className="text-gray-600 text-sm">Yüksek viskoziteli sentetik yağ.</p>
                </div>
              </div>
            </article>
          </CardContent>
        </Card>
      </section>

      {/* Specifications */}
      <section className="bg-white shadow-lg rounded-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Teknik Özellikler</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Kullanım Amacı</h3>
              <p className="text-gray-600">In vitro fertilizasyon ve mikromanipülasyon işlemlerinde medyumu kaplamak içindir.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">İçerik</h3>
              <p className="text-gray-600">Hafif parafin yağı</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Uygulama</h3>
              <p className="text-gray-600">+37°C ve kullanım amacına göre ortam atmosferi, %5 veya %6 CO₂ ile öndengeleme yapıldıktan sonra kullanılmalı.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Raf Ömrü</h3>
              <p className="text-gray-600">Gönderim tarihinden itibaren minimum 5 hafta. Son kullanma tarihi için lütfen şişe etiketine bakınız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Information */}
      <section className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <Info className="text-blue-600 w-6 h-6" />
          <p className="text-blue-800 font-medium">Saklama Koşulu: Karanlık, +2-8°C</p>
        </div>
      </section>
    </main>
  );
};

export default OVOILDisplay;