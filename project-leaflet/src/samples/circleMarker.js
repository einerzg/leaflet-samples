import { Map, circleMarker } from "leaflet";
import { createTileLayers } from "../helper";
import { DEFAULT_ZOOM, LAT_UNIQUINDIO, LNG_UNIQUINDIO } from "../helper/constants";

const map = new Map("map").setView([LAT_UNIQUINDIO, LNG_UNIQUINDIO], DEFAULT_ZOOM);

createTileLayers().addTo(map);
//Adding marker
const uniquidioMarker = circleMarker([LAT_UNIQUINDIO, LNG_UNIQUINDIO], {
    radius: 40,
    color: 'green',
    fillOpacity: 0.6,
    fillColor: 'blue',
    weight: 2,
}).addTo(map);

// Adding tooltip
uniquidioMarker.bindTooltip("<h3>Uniquindio</h3>",{
    opacity: 1,
    direction: 'top',
    sticky: true,
}).openTooltip();