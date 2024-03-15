import { Map, geoJSON } from "leaflet";
import { createTileLayers } from "../../helper";
import { LAT_UNIQUINDIO, LNG_UNIQUINDIO } from "../../helper/constants";
import { example } from "./data";

const map = new Map("map").setView([LAT_UNIQUINDIO, LNG_UNIQUINDIO], 10);

createTileLayers().addTo(map);
geoJSON(example).addTo(map);
