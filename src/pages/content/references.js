import React, { useState } from "react";
import { Search } from "lucide-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ReferencesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const references = {
    ANKARA: [
      "ANATOLIA TÜPBEBEK",
      "ANKARA ÜNİVERSİTESİ",
      "ANKARA TÜP BEBEK MERKEZİ",
      "ANKARA ŞEHİR HASTANESİ",
      "BAŞKENT ÜNİVERSİTESİ",
      "CENTRUM TÜP BEBEK MERKEZİ",
      "ETLİK ZÜBEYDE HANIM",
      "GAZİ ÜNİVERSİTESİ",
      "GENART",
      "GÜLHANE EĞİTİM VE ARAŞTIRMA HASTANESİ",
      "GÜRGAN KLİNİK",
      "GÜVEN HASTANESİ",
      "MEDICANA HASTANESİ",
      "NOVAART TÜP BEBEK MERKEZİ",
      "ÖZEL HRS KADIN HASTANESİ",
    ],
    ADANA: [
      "ACIBADEM ADANA HASTANESİ",
      "ADANA METRO HESTANESİ",
      "ADANA PROF.DR.TURAN ÇETİN",
      "ÇUKUROVA ÜNİVERSİTESİ",
      "MEDLINE ADANA HASTANESİ",
    ],
    ANTALYA: [
      "AKDENIZ ÜNİVERSİTESİ",
      "ANADOLU SAĞLIK MERKEZİ",
      "GELECEK TÜP BEBEK MERKEZİ",
      "ANTALYA MEMORIAL HASTANESİ",
    ],
    AFYON: ["ÖZEL TELEK HASTANESİ"],
    BURSA: [
      "ACIBADEM BURSA HASTANESİ",
      "ÖZEL JİMER HASTANESİ",
      "BURSA ART KLİNİK",
      "JINEMED BURSA TÜP BEBEK MERKEZİ",
      "PEMBE MAVİ HASTANESİ",
      "SORANUS TÜP BEBEK MERKEZİ",
      "ULUDAĞ ÜNİVERSİTESİ",
    ],
    ÇORUM: ["HİTİT ÜNİVERSİTESİ"],
    DENİZLİ: ["PAMUKKALE ÜNİVERSİTESİ", "ERPA HASTANESİ"],
    DİYARBAKIR: [
      "DİYARBAKIR MEMORIAL HASTANESİ",
      "VENİ VİDİ TÜP BEBEK MERKEZİ",
    ],
    ELAZIĞ: ["MEDICAL PARK ELAZIĞ HASTANESİ", "FIRAT ÜNİVERSİTESİ"],
    ERZURUM: ["ÖZEL BUHARA HASTANESİ", "ERZURUM ATATÜRK ÜNİVERSİTESİ"],
    ESKİŞEHİR: ["ACIBADEM HASTANESİ"],
    EDİRNE: ["TRAKYA ÜNİVERSİTESİ HASTANESİ"],
    GAZİANTEP: [
      "GAZiANTEP CENGİZ GÖKÇEK HASTANESİ",
      "KİBELE (SANKO) HASTANESİ",
      "NOVA FERTIL TÜP BEBEK MERKEZİ",
      "UMAY TÜP BEBEK MERKEZİ",
    ],
    HATAY: ["MOZAİK HASTANESİ"],
    ISPARTA: ["SÜLEYMAN DEMİREL ÜNİVERSİTESİ"],
    İSTANBUL: [
      "ACIBADEM INTERNATIONAL HASTANESİ",
      "ACIBADEM ATAKENT HASTANESİ",
      "ACIBADEM FULYA HASTANESİ",
      "ACIBADEM KADIKÖY HASTANESİ",
      "ACIBADEM MASLAK HASTANESİ",
      "AMERİKAN HASTANESİ",
      "AVRUPA ŞAFAK HASTANESİ",
      "BAHÇECİ FULYA TÜP BEBEK MERKEZİ",
      "BAHÇECİ UMUT TÜP BEBEK MERKEZİ",
      "BATI BAHAT HASTANESİ",
      "BEZMİALEM VAKIF ÜNIVERSİTESİ TIP FAKÜLTESİ HASTANESİ",
      "BRÜKSEL TÜP BEBEK MERKEZİ",
      "ERDEM HASTANESİ",
      "EMSEY HASTANESİ",
      "EUROFERTİL TÜP BEBEK MERKEZİ",
      "FERTİJİN KLİNİK",
      "GAZİOSMANPAŞA HASTANESİ",
      "HİSAR HASTANESİ",
      "İ.A.Ü. VM MEDICAL PARK FLORYA HASTANESİ",
      "İSTANBUL FLORENCE NIGHTINGALE HASTANESİ",
      "İSTİNYE ÜNİVERSİTESİ HASTANESİ",
      "İSTANBUL TÜP BEBEK VE KADIN SAĞLIĞI MERKEZİ",
      "İSTANBUL ÜNIVERSİTESİ İSTANBUL TIP FAKÜLTESİ HASTANESİ",
      "İSTANBUL ÜNIVERSİTESİ CERRAHPAŞA TIP FAKÜLTESİ HASTANESİ",
      "JİNEMED HOSPİTAL",
      "KADIKÖY FLORENCE NIGHTINGALE HASTANESİ",
      "KANUNİ SULTAN SÜLEYMAN EĞİTİM VE ARAŞTIRMA HASTANESİ",
      "KOÇ ÜNİVERSİTESİ HASTANESİ",
      "KOLAN HASTANESİ – BEYLİKDÜZÜ",
      "KOLAN HASTANESİ – ŞİŞLİ",
      "LIV HOSPITAL",
      "MARMARA ÜNİVERSİTESİ HASTANESİ",
      "MEDICANA BAHÇELİEVELER",
      "MEDİCANA ÇAMLICA",
      "MEDICANA INTERNATIONAL",
      "MEDICINE ASYA HOSPITAL",
      "MEDICAL PARK BAHÇELİEVLER",
      "MEDICAL PARK GÖZTEPE",
      "MEDIPOL ÜNİVERSİTESİ HASTANESİ",
      "MEDISTATE HOSPITAL",
      "MEMORIAL HOSPITAL – BAHÇELİEVLER",
      "MEMORIAL HOSPITAL – ŞİŞLİ",
      "SÜLEYMANİYE KADIN DOĞUM VE ÇOCUK HASTALIKLARI",
      "VM MEDICAL PARK PENDIK HASTANESİ",
      "YEDİTEPE ÜNİVERSİTESİ HASTANESİ",
      "ZEYNEP KAMİL HASTANESİ – TÜP BEBEK MERKEZİ",
    ],
    KIBRIS: [
      "ADA TÜP BEBEK MERKEZİ",
      "DÜNYA TÜP BEBEK MERKEZİ",
      "ELITE HOSPITAL",
      "LEFKOŞA TÜP BEBEK MERKEZİ",
      "LIFE HOSPITAL KIBRIS",
      "MAGOSA TÜP BEBEK MERKEZİ",
      "NORTH MIRACLE HOSPITAL",
      "VITA ALTERA IVF",
      "YAKIN DOGU ÜNİVERSİTESİ",
    ],
  };

  const normalizeString = (str) => {
    const turkishMap = {
      İ: "i",
      ı: "i",
      Ş: "s",
      ş: "s",
      Ğ: "g",
      ğ: "g",
      Ü: "u",
      ü: "u",
      Ö: "o",
      ö: "o",
      Ç: "c",
      ç: "c",
    };
    return str
      .split("")
      .map((char) => turkishMap[char] || char)
      .join("")
      .toLowerCase();
  };

  const filteredReferences = Object.entries(references).reduce(
    (acc, [city, hospitals]) => {
      const filteredHospitals = hospitals.filter(
        (hospital) =>
          normalizeString(hospital).includes(normalizeString(searchTerm)) ||
          normalizeString(city).includes(normalizeString(searchTerm))
      );
      if (filteredHospitals.length > 0) {
        acc[city] = filteredHospitals;
      }
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen bg-blue-50 ">
      <div className="relative w-full bg-gradient-to-br from-blue-400 to-blue-500 h-[100px] xl:h-[200px] flex flex-col justify-center items-center">
        <div className="text-white text-center z-10">
          <h1 className="text-4xl xl:text-7xl font-bold md:mb-2 ">
            Referanslarımız
          </h1>
          <p className="text-base md:text-lg xl:text-xl text-white">
            Türkiye ve Kıbrıs Genelinde Güvenilir Partnerlerimiz
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Search Section */}

        <div className="relative w-full px-8 mx-auto mb-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Şehir veya hastane adı ile ara..."
              className="w-full bg-white pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* References Section */}
        <div className="space-y-8">
          {Object.entries(filteredReferences).map(([city, hospitals]) => (
            <div key={city} className="w-full px-10 mb-8 py-4 rounded-2xl  ">
              {/* City Name */}
              <h1 className="text-3xl sm:text-5xl text-blue-500 mb-2 font-bold">
                {city}
              </h1>
              <div className="border border-b mb-4"></div>
              {/* Single Row of Hospitals */}
              <div className="flex-col space-y-4 text-blue-900 text-md sm:text-xl">
                {hospitals.map((hospital, index) => (
                  <div key={index}>{hospital}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
