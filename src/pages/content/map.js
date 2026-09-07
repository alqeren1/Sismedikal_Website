"use client";

import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

export default function Intro3() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  /*
    ORIGINAL COORDINATES

    Important:
    MapLibre uses [longitude, latitude],
    so these are the SAME geographical coordinates
    as your old Leaflet values, only expressed in
    MapLibre's required order.
  */
  const position = [32.86347, 39.907178];

  const pinPosition = [32.86347, 39.907178];

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    // --------------------------------------------------
    // CREATE MAP
    // --------------------------------------------------

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://tiles.openfreemap.org/styles/positron",
      center: position,
      zoom: 17,
      attributionControl: false,
    });

    mapRef.current = map;

    // + / - ZOOM BUTTONS
    map.addControl(
      new maplibregl.NavigationControl({
        showCompass: false,
        showZoom: true,
      }),
      "top-left",
    );

    // Disable mouse-wheel zoom
    map.scrollZoom.disable();

    map.addControl(
      new maplibregl.AttributionControl({
        compact: false,
      }),
      "bottom-right",
    );

    // --------------------------------------------------
    // CREATE EXACT SISMEDIKAL MARKER
    // --------------------------------------------------

    const markerElement = document.createElement("div");

    markerElement.style.display = "inline-flex";
    markerElement.style.alignItems = "center";
    markerElement.style.background = "rgba(255, 255, 255, 0.4)";
    markerElement.style.backdropFilter = "blur(4px)";
    markerElement.style.webkitBackdropFilter = "blur(4px)";
    markerElement.style.padding = "8px";
    markerElement.style.borderRadius = "8px";
    markerElement.style.cursor = "pointer";
    markerElement.style.whiteSpace = "nowrap";

    markerElement.innerHTML = `
      <img
        src="/pin.png"
        style="
          height: 41px;
          width: auto;
          margin-right: 8px;
          display: block;
        "
      />

      <span
        style="
          font-size: 14px;
          color: red;
          white-space: nowrap;
          line-height: normal;
        "
      >
        Sismedikal<br>
        San. Ltd. Şti.
      </span>
    `;

    // --------------------------------------------------
    // GOOGLE MAPS CLICK
    // --------------------------------------------------

    markerElement.addEventListener("click", () => {
      const googleMapsUrl =
        "https://www.google.com/maps/dir/?api=1&destination=Sis+Medikal+Ankara";

      window.open(googleMapsUrl, "_blank");
    });

    // --------------------------------------------------
    // ADD MARKER
    // --------------------------------------------------

    /*
      Your old Leaflet icon used:

      iconSize: [50, 50]
      iconAnchor: [25, 50]

      That means the marker element's upper-left corner
      was positioned 25px left and 50px above the exact
      geographical point.

      top-left + offset reproduces that behavior.
    */

    new maplibregl.Marker({
      element: markerElement,
      anchor: "top-left",
      offset: [-25, -50],
    })
      .setLngLat(pinPosition)
      .addTo(map);

    // --------------------------------------------------
    // RESIZE AFTER LOAD
    // --------------------------------------------------

    map.on("load", () => {
      map.resize();
    });

    // --------------------------------------------------
    // CLEANUP
    // --------------------------------------------------

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      <div className="container">
        <div
          ref={mapContainerRef}
          style={{
            // ORIGINAL SIZE
            height: "50vh",
            width: "99.1vw",

            position: "relative",
            zIndex: 0,
          }}
        />
      </div>

      {/* ------------------------------------------------
          VERY SMALL ATTRIBUTION
      ------------------------------------------------ */}

      <style jsx global>{`
        .maplibregl-ctrl-attrib {
          font-size: 8px !important;
          line-height: 9px !important;
          padding: 0 2px !important;
          margin: 0 !important;

          background: rgba(255, 255, 255, 0.55) !important;
        }

        .maplibregl-ctrl-attrib a {
          font-size: 8px !important;
          line-height: 9px !important;
          text-decoration: none !important;
        }

        .maplibregl-ctrl-attrib-inner {
          font-size: 8px !important;
          line-height: 9px !important;
        }
      `}</style>
    </>
  );
}
