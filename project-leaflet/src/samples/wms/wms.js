import L from "leaflet";
import { createTileLayersWMS } from "../../helper";
import { DEFAULT_ZOOM, LAT_ARMENIA, LNG_ARMENIA } from "../../helper/constants";

const map = L.map('map').setView([LAT_ARMENIA, LNG_ARMENIA], DEFAULT_ZOOM);
createTileLayersWMS().addTo(map);
