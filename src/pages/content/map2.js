"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";

// Dynamically import react-leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

export default function Intro3() {
  const position = [39.89969615767547, 32.858369142483554];
  const pinPosition = [39.89969615767547, 32.858369142483554];
  const { t } = useTranslation();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  if (!isClient) {
    return null; // Return null during SSR
  }

  const createCustomMarkerIcon = () => {
    const L = require("leaflet"); // Dynamically import Leaflet
    return L.divIcon({
      html: `
        <div style="
          display: inline-flex; 
          align-items: center; 
          background: rgba(255, 255, 255, 0.4); 
          backdrop-filter: blur(4px); 
          -webkit-backdrop-filter: blur(4px); 
          padding: 8px; 
          border-radius: 8px; 
       
        ">
          <img src="/pin.png" style="height: 41px; margin-right: 8px;" />
          <span style="
            font-size: 14px; 
            color: red; 
            white-space: nowrap;
          ">
            Sismedikal<br>San. Ltd. Şti.
          </span>
        </div>
      `,
      iconSize: [50, 50], // Adjust size to fit the new container
      iconAnchor: [25, 50],
      className: "",
      popupAnchor: [0, -50],
    });
  };

  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=Sis+Medikal+Ankara`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="container  ">
      <div
        style={{
          height: "40vh",
          width: "97vw",
          position: "relative",
          zIndex: 0,
        }}
      >
        <MapContainer
          center={position}
          zoom={18}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
          <Marker
            position={pinPosition}
            icon={createCustomMarkerIcon()}
            eventHandlers={{
              click: handleMarkerClick,
            }}
          />
        </MapContainer>
      </div>
    </div>
  );
}
