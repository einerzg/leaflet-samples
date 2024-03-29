import { Map, control, geoJSON } from 'leaflet';
import { LAT_CAICEDONIA, LNG_CAICEDONIA } from '../../helper/constants';
import { MANZANAS_CAICEDONIA } from '../../cartografia/MANZANAS_CAICEDONIA';
import { VEREDAS_CAICEDONIA } from '../../cartografia/VEREDAS_CAICEDONIA';
import { VIAS_CAICEDONIA } from '../../cartografia/VIAS_CAICEDONIA';
import { RUTAS_TURISTICAS } from '../../cartografia/RUTAS_TURISTICAS';
import { SITIOS_INTERES } from '../../cartografia/SITIOS_INTERES';
import { createTileLayers, createTileLayersWMS } from '../../helper';
import { layers } from '../../data/layers';
import { onEachManzana, onEachVereda, onEachVia, onEachRuta, styles, onEachSitio, pointToMarker } from './functions';

const map = new Map('map', {
  center: [LAT_CAICEDONIA, LNG_CAICEDONIA],
  zoom: 14
});

const OSM = createTileLayers().addTo(map);
const WMS = createTileLayersWMS().addTo(map);
const GOOGLE = createTileLayers(layers.baseLayers.google.GoogleSatellite.map).addTo(map);
const ESRI = createTileLayers(layers.baseLayers.esri.worldStreetMap.map).addTo(map);

const MANZANAS = geoJSON(MANZANAS_CAICEDONIA, {
  color: 'red',
  onEachFeature: onEachManzana
}).addTo(map);
const VEREDAS = geoJSON(VEREDAS_CAICEDONIA, {
  color: 'green',
  onEachFeature: onEachVereda
}).addTo(map);
const VIAS = geoJSON(VIAS_CAICEDONIA, {
  color: 'blue',
  onEachFeature: onEachVia
}).addTo(map);

const RUTAS = geoJSON(RUTAS_TURISTICAS, {
  style: styles,
  onEachFeature: onEachRuta
}).addTo(map);

const SITIOS = geoJSON(SITIOS_INTERES, {
  pointToLayer: pointToMarker,
  onEachFeature: onEachSitio
}).addTo(map);

const baseLayers = {
  'Thunder Forest': WMS,
  'Esri Street Map': ESRI,
  'Google Hibrid': GOOGLE,
  'Open Stree tMap': OSM
};

const cartografiaBase = {
  'Veredas Rurales': VEREDAS,
  'Manzanas Urbanas': MANZANAS,
  'Vías Urbanas': VIAS,
  'Rutas Turisticas': RUTAS,
  'Sitios de Interés': SITIOS
};

control.layers(baseLayers, cartografiaBase).addTo(map);

control.scale().addTo(map);
