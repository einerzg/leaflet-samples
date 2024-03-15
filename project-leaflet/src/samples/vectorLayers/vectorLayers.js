import { Map, circle, rectangle, polyline, polygon } from "leaflet";
import { createTileLayers } from "../../helper";
import {
  CALARCA,
  DEFAULT_ZOOM,
  LAT_ARMENIA,
  LAT_UNIQUINDIO,
  LNG_ARMENIA,
  LNG_UNIQUINDIO,
  MY_HOME,
} from "../../helper/constants";
import { layers } from "../../data/layers";

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
// map.fitBounds(bounds);

//Adding polyline
const sites = [MY_HOME, CALARCA];
polyline(sites, { color: "red" }).addTo(map);

// Adding polygon
const latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];

polygon(latlngs, { color: "red" }).addTo(map);

// Polygon with hole
const latlngs2 = [
    [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
    [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
  ];

polygon(latlngs2, { color: "blue" }).addTo(map);
map.fitBounds(latlngs);
