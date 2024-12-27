import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function Bottombar() {
  const { t } = useTranslation();
  const offices = [
    {
      city: t("bottombar.office"),
      contact: "(0312) 426 0663 - Fax : (0312) 426 7401",
      email: "info@sismed.com",
      address: "Cinnah Cad. Gelibolu Sk. No:3/7 Kavaklıdere - ANKARA",
    },
    {
      city: t("bottombar.office2"),
      contact: "(0216) 492 4620 - 21 - Fax : (0216) 492 4642",
      email: "info@sismed.com",
      address:
        "Murat Reis Mah. Selami Ali Efendi Cad. No:136/6 Üsküdar - İSTANBUL",
    },
  ];

  return (
    <div className="w-full h-auto bg-[#003a7a] text-white flex items-start sans px-2 md:px-4 xl:px-20">
      <div className="flex flex-wrap justify-between w-full">
        {offices.map((office, index) => (
          <div
            key={index}
            className="p-4 py-6 md:px-8 md:py-8 space-y-2 w-full md:w-auto"
          >
            <div className="text-2xl mb-4">{office.city}</div>
            <div className="flex">
              <div>
                <FaPhoneAlt size={22} />
              </div>
              <div className="ml-2">{office.contact}</div>
            </div>
            <div className="flex">
              <div>
                <FaEnvelope size={22} />
              </div>
              <div className="ml-2">{office.email}</div>
            </div>
            <div className="flex">
              <div>
                <FaMapMarkerAlt size={22} />
              </div>
              <div className="ml-2">{office.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
