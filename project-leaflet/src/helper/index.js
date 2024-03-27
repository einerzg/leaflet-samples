/* eslint-disable space-before-function-paren */
import { tileLayer, geoJSON } from 'leaflet';
import { layers, layersWMS } from '../data/layers';
import { MAX_ZOOM, MIN_ZOOM } from './constants';
import { example } from '../samples/geojson/data';

// Const for basic tile layer
const DEFAULT_LAYER = layers.baseLayers.default;
const DEFAULT_OPTIONS = {
  minZoom: MIN_ZOOM,
  maxZoom: MAX_ZOOM,
  attribution: DEFAULT_LAYER.atribution
};

// Const for tile layer with wms
const DEFAULT_LAYER_WMS = layersWMS.mundialis;
const DEFAULT_OPTIONS_WMS = {
  layers: DEFAULT_LAYER_WMS.layers.osmOverlayWMS,
  format: 'image/png',
  transparent: true,
  ...DEFAULT_OPTIONS
};

export function createTileLayers(
  url = DEFAULT_LAYER.map,
  options = DEFAULT_OPTIONS
) {
  return tileLayer(url, options);
}

export function createTileLayersWMS(
  url = DEFAULT_LAYER_WMS.baseUrl,
  options = DEFAULT_OPTIONS_WMS
) {
  return tileLayer.wms(url, options);
}

// Const for tile layer with geoJSON
const DEFAULT_FILE = example;
const DEFAULT_OPTIONS_GEOJSON = {
  color: 'gray'
};

export function createGeoJSON(
  file = DEFAULT_FILE,
  options = DEFAULT_OPTIONS_GEOJSON
) {
  return geoJSON(file, options);
}
