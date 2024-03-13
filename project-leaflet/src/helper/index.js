import { tileLayer } from "leaflet";
import { layers, layersWMS } from "./data";

// Const for basic tile layer
const DEFAULT_LAYER = layers.baseLayers.default;
const DEFAULT_OPTIONS = {
  minZoom: 0,
  maxZoom: 19,
  attribution: DEFAULT_LAYER.atribution,
};

// Const for tile layer with wms
const DEFAULT_LAYER_WMS = layersWMS.mundialis;
const DEFAULT_OPTIONS_WMS = {
  layers: DEFAULT_LAYER_WMS.layers.osmOverlayWMS,
  format: "image/png",
  transparent: true,
  ...DEFAULT_OPTIONS,
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