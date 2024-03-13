import { Map, circle, rectangle, polyline } from "leaflet";
import { createTileLayers } from "../helper";
import {
  CALARCA,
  DEFAULT_ZOOM,
  LAT_ARMENIA,
  LAT_UNIQUINDIO,
  LNG_ARMENIA,
  LNG_UNIQUINDIO,
  MY_HOME,
} from "../helper/constants";
import { layers } from "../data/layers";

const map = new Map("map").setView(
  [LAT_UNIQUINDIO, LNG_UNIQUINDIO],
  DEFAULT_ZOOM
);

createTileLayers(layers.baseLayers.thunderForest.map.atlas).addTo(map);

//Adding circle
circle([LAT_UNIQUINDIO, LNG_UNIQUINDIO], {
  radius: 400,
  color: "green",
  fillOpacity: 0.1,
  fillColor: "blue",
  weight: 2,
}).addTo(map);

//Adding retangle
const bounds = [
  [LAT_UNIQUINDIO, LNG_UNIQUINDIO],
  [LAT_ARMENIA, LNG_ARMENIA],
];
rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(map);
map.fitBounds(bounds);

//Adding polyline
const sites = [MY_HOME, CALARCA];
polyline(sites, { color: "red" }).addTo(map);
