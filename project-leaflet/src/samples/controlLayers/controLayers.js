import { Map, control, polyline } from 'leaflet';
import { createTileLayers } from '../../helper';
import {
  CALARCA,
  DEFAULT_ZOOM,
  LAT_UNIQUINDIO,
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
const sites = [MY_HOME, CALARCA];
const mySites = polyline(sites, { color: 'red' }).addTo(map);

map.fitBounds(sites);

const baseLayers = {
  Default: defaultLayer,
  'Second map': secondLayer
};

const overlays = {
  Marker: mySites
};

control.layers(baseLayers, overlays, { collapsed: false }).addTo(map);
