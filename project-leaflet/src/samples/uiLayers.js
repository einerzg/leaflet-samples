import { Map, marker, popup } from "leaflet";
import { createTileLayers } from "../helper";
import { DEFAULT_ZOOM, LAT_ARMENIA, LAT_UNIQUINDIO, LNG_ARMENIA, LNG_UNIQUINDIO } from "../helper/constants";

const map = new Map("map").setView([LAT_ARMENIA, LNG_ARMENIA], DEFAULT_ZOOM);

createTileLayers().addTo(map);
//Adding marker
marker([LAT_UNIQUINDIO, LNG_UNIQUINDIO]).addTo(map);

//Adding popup
const latlng = L.latLng(LAT_UNIQUINDIO, LNG_UNIQUINDIO);
popup()
  .setLatLng(latlng)
  .setContent("<p>Hello world!<br />Programación de Aplicaciones Web Map.</p>")
  .openOn(map);

