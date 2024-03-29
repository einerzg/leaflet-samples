import { Map, control, layerGroup, marker, polyline } from 'leaflet';
import { createTileLayers } from '../../helper';
import {TEBAIDA}from '../../helper/constants';
import { layers } from '../../data/layers';

const map = new Map('map', {
    doubleClickZoom: false
  }).setView([4.4512175, -75.7887314], DEFAULT_ZOOM);