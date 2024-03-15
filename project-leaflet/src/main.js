import { Map } from "leaflet";
import { createTileLayers } from "./helper";
import { DEFAULT_ZOOM, LAT_ARMENIA, LNG_ARMENIA } from "./helper/constants";

const map = new Map('map').setView([LAT_ARMENIA, LNG_ARMENIA], DEFAULT_ZOOM);

createTileLayers().addTo(map);
