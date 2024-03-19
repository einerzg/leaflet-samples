import { Map, marker } from 'leaflet';
import { LAT_ARMENIA, LNG_ARMENIA } from '../../helper/constants';
import { createTileLayers } from '../../helper';

const map = new Map('map').setView([LAT_ARMENIA, LNG_ARMENIA], 13);
createTileLayers().addTo(map);

map.on('click', function (eventData) {
  const { latlng } = eventData;
  marker([latlng.lat, latlng.lng]).addTo(map);
});

map.on('contextmenu', function () {
  console.log('rigth click');
});

map.on('keypress', function (eventData) {
  console.log(eventData);
});

map.on('mousemove', function (eventData) {
  console.log('mousemove');
});
