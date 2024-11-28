export default function Bottombar() {
  const offices = [
    {
      city: "Ankara Ofis",
      contact: "(0312) 426 0663 - Fax : (0312) 426 7401",
      email: "info@sismed.com",
      address: "Cinnah Cad. Gelibolu Sk. No:3/7 Kavaklıdere - ANKARA",
    },
    {
      city: "İstanbul Ofis",
      contact: "(0216) 492 4620 - 21 - Fax : (0216) 492 4642",
      email: "info@sismed.com",
      address: "Cumhuriyet Caddesi No:131/2 Bağlarbaşı - İSTANBUL",
    },
  ];

  return (
    <div className="w-full h-auto bg-[#003a7a] text-white flex items-start sans justify-between px-4 xl:px-20">
      {offices.map((office, index) => (
        <div key={index} className="p-8">
          <div className="text-2xl mb-4">{office.city}</div>
          <div>{office.contact}</div>
          <div>{office.email}</div>
          <div>{office.address}</div>
        </div>
      ))}
    </div>
  );
}
