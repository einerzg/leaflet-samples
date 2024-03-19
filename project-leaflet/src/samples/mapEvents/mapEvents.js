import { Map, marker } from 'leaflet';
import { createTileLayers } from '../../helper';
import {
  DEFAULT_ZOOM,
  LAT_UNIQUINDIO,
  LNG_UNIQUINDIO
} from '../../helper/constants';

const map = new Map('map', {
  doubleClickZoom: false
}).setView([LAT_UNIQUINDIO, LNG_UNIQUINDIO], DEFAULT_ZOOM);

createTileLayers().addTo(map);

// Interacion events
map.on('click', function (eventData) {
  console.log('Clicking', eventData);
  marker(eventData.latlng).addTo(map).bindPopup(eventData.latlng.toString());
});

// don't working
map.on('dbclick', function (eventData) {
  console.log('Double click', eventData);
});

map.on('contextmenu', function (eventData) {
  console.log('Rigth click', eventData);
});

map.on('keypress', function (eventData) {
  console.log('Keypress', eventData);
});

// location events
map.on('locationerror', function (eventData) {
  console.log('locationerror', eventData);
});

map.on('locationfound', function (eventData) {
  console.log('locationfound', eventData);
});

map.locate();
