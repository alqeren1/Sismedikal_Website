"use client";

import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

export default function Intro3() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  /*
    Original Leaflet coordinates:
    [39.907178, 32.86347]

    MapLibre uses:
    [longitude, latitude]

    Same exact geographical position.
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

      // Clean OpenFreeMap style
      style: "https://tiles.openfreemap.org/styles/positron",

      center: position,

      // ORIGINAL ZOOM
      zoom: 17,

      // Add our own attribution control below
      attributionControl: false,
    });

    mapRef.current = map;

    // --------------------------------------------------
    // + / - ZOOM BUTTONS
    // --------------------------------------------------

    map.addControl(
      new maplibregl.NavigationControl({
        showCompass: false,
        showZoom: true,
      }),
      "top-left",
    );

    // --------------------------------------------------
    // DISABLE MOUSE-WHEEL ZOOM
    // --------------------------------------------------

    map.scrollZoom.disable();
    map.dragPan.disable();

    // --------------------------------------------------
    // ATTRIBUTION
    // --------------------------------------------------

    map.addControl(
      new maplibregl.AttributionControl({
        compact: false,
      }),
      "bottom-right",
    );

    // --------------------------------------------------
    // CUSTOM SISMEDIKAL MARKER
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
      Reproduces original Leaflet positioning:

      iconSize: [50, 50]
      iconAnchor: [25, 50]
    */

    new maplibregl.Marker({
      element: markerElement,
      anchor: "top-left",
      offset: [-25, -50],
    })
      .setLngLat(pinPosition)
      .addTo(map);

    // --------------------------------------------------
    // RESIZE WHEN MAP LOADS
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
            // ORIGINAL MAP SIZE
            height: "40vh",
            width: "97vw",
            position: "relative",
            zIndex: 0,
          }}
        />
      </div>

      <style jsx global>{`
        /* ----------------------------------------------
           ZOOM + / - BUTTONS
        ---------------------------------------------- */

        .maplibregl-ctrl-group {
          border-radius: 4px !important;
        }

        .maplibregl-ctrl-group button {
          width: 30px !important;
          height: 30px !important;
        }

        /* ----------------------------------------------
           VERY SMALL ATTRIBUTION
        ---------------------------------------------- */

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
