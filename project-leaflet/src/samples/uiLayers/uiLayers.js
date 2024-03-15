import { Map, icon, marker, popup } from "leaflet";
import { createTileLayers } from "../../helper";
import { DEFAULT_ZOOM, LAT_ARMENIA, LAT_HOSPITAL, LAT_RESTAURANT, LAT_UNIQUINDIO, LNG_ARMENIA, LNG_HOSPITAL, LNG_RESTAURANT, LNG_UNIQUINDIO, icons } from "../../helper/constants";

const map = new Map("map").setView([LAT_UNIQUINDIO, LNG_UNIQUINDIO], DEFAULT_ZOOM);

createTileLayers().addTo(map);
//Adding marker
const uniquidioMarker = marker([LAT_UNIQUINDIO, LNG_UNIQUINDIO]).addTo(map);

marker([LAT_HOSPITAL, LNG_HOSPITAL],{
  icon: icon({iconUrl: icons.hospital})
}).addTo(map);

marker([LAT_RESTAURANT, LNG_RESTAURANT],{
  icon: icon({iconUrl: icons.restaurant})
}).addTo(map);

// Adding tooltip
uniquidioMarker.bindTooltip("<h3>Uniquindio</h3>",{
    opacity: 1,
    direction: 'top',
    sticky: true,
}).openTooltip();

//Adding popup
const latlng = L.latLng(LAT_ARMENIA, LNG_ARMENIA);
popup()
  .setLatLng(latlng)
  .setContent("<p>Hello Armenia!<br />Programación de Aplicaciones Web Map.</p>")
  .openOn(map);

