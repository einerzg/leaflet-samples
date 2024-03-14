import { Map, circleMarker, geoJSON } from "leaflet";
import { createTileLayers } from "../helper";
import { DEFAULT_ZOOM, LAT_UNIQUINDIO, LNG_UNIQUINDIO } from "../helper/constants";
import { example } from "../data/geojson";

const map = new Map("map").setView([LAT_UNIQUINDIO, LNG_UNIQUINDIO], DEFAULT_ZOOM);

createTileLayers().addTo(map);
geoJSON(example).addTo(map);
