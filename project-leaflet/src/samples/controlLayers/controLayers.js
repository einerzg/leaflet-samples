import { Map, control, layerGroup, marker, polyline } from 'leaflet';
import { createTileLayers } from '../../helper';
import {
  CALARCA,
  DEFAULT_ZOOM,
  LAT_ARMENIA,
  LAT_HOSPITAL,
  LAT_UNIQUINDIO,
  LNG_ARMENIA,
  LNG_HOSPITAL,
  LNG_UNIQUINDIO,
  MY_HOME
} from '../../helper/constants';
import { layers } from '../../data/layers';

const map = new Map('map', {
  doubleClickZoom: false
}).setView([LAT_UNIQUINDIO, LNG_UNIQUINDIO], DEFAULT_ZOOM);

// Base layers
const defaultLayer = createTileLayers(
  layers.baseLayers.thunderForest.map.atlas
).addTo(map);
const secondLayer = createTileLayers(layers.baseLayers.osmManik.map);

// Overlayers
const markersLayer = layerGroup();
const markers = [
  marker([LAT_ARMENIA, LNG_ARMENIA]).bindPopup('ARMENIA'),
  marker([LAT_UNIQUINDIO, LNG_UNIQUINDIO]).bindPopup('UNIQUINDIO'),
  marker([LAT_HOSPITAL, LNG_HOSPITAL]).bindPopup('HOSPITAL')
];

markers.forEach(function (marker) {
  markersLayer.addLayer(marker);
});

const sites = [MY_HOME, CALARCA];
const mySites = polyline(sites, { color: 'red' });

map.fitBounds(sites);

const baseLayers = {
  Default: defaultLayer,
  'Second map': secondLayer
};

const overlays = {
  Polynes: mySites,
  Marker: markersLayer
};

control.layers(baseLayers, overlays).addTo(map);
