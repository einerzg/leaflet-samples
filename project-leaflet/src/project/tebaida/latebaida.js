import { Map, control, geoJSON, layerGroup, marker } from 'leaflet';
import { DEFAULT_ZOOM } from '../../helper/constants';
import { createTileLayers } from '../../helper';
import { layers } from '../../data/layers';
import path from './path.json';

const map = new Map('map').setView([4.4512175, -75.7887314], DEFAULT_ZOOM);

const defaultLayer = createTileLayers().addTo(map);
const secondLayer = createTileLayers(layers.baseLayers.thunderForest.map.atlas);

const educationGroup = layerGroup();
const markersEducation = [
  marker([4.4512, -75.788304], { alt: 'colegio1' }).bindPopup(
    'INSTITUCIÓN EDUCATIVA SANTA TERESITA'
  ),
  marker([4.4532517, -75.7906383], { alt: 'colegio2' }).bindPopup(
    'INSTITUCIÓN EDUCATIVA LUIS ARANGO CARDONA'
  ),
  marker([4.4524244, -75.7912977], { alt: 'colegio3' }).bindPopup(
    'INSTITUCIÓN EDUCATIVA INSTITUTO TEBAIDA'
  ),
  marker([4.4547179, -75.7882707], { alt: 'colegio4' }).bindPopup(
    'INSTITUCIÓN EDUCATIVA PEDACITO DE CIELO'
  )
];

markersEducation.forEach(function (education) {
  educationGroup.addLayer(education);
});

const route = geoJSON(path);

const baseLayers = { Default: defaultLayer, 'Second Layer': secondLayer };

const overlays = { Educacion: educationGroup, Ruta: route };

control.layers(baseLayers, overlays).addTo(map);

/*
marker([4.4531191, -75.7893854], { alt: 'alcaldia' })
  .addTo(map)
  .bindPopup('ALCALDIA');
marker([4.4515337, -75.7865493], { alt: 'policia' })
  .addTo(map)
  .bindPopup('ESTACIÓN DE POLICIA');
marker([4.4518982, -75.7848804], { alt: 'hospital' })
  .addTo(map)
  .bindPopup('HOSPITAL PIO X');
marker([4.4531923, -75.7885731], { alt: 'parque1' })
  .addTo(map)
  .bindPopup('PLAZA DE BOLIVAR');
marker([4.4514682, -75.7874188], { alt: 'parque2' })
  .addTo(map)
  .bindPopup('PLAZA NUEVA');
marker([4.4514355, -75.7849107], { alt: 'bomberos' })
  .addTo(map)
  .bindPopup('ESTACION DE BOMBEROS VOLUNTARIOS');
marker([4.4520489, -75.7914086], { alt: 'cruz roja' })
  .addTo(map)
  .bindPopup('CRUZ ROJA LA TEBAIDA');
marker([4.4531972, -75.7894741], { alt: 'restaurante1' })
  .addTo(map)
  .bindPopup('RESTAURANTE SAL Y CARBÓN');
marker([4.4511798, -75.7893386], { alt: 'restaurante2' })
  .addTo(map)
  .bindPopup('RESTAURANTE MARAVELEZ');
marker([4.4508126, -75.7875076], { alt: 'restaurante3' })
  .addTo(map)
  .bindPopup('RESTAURANTE DONDE AGUJA');
marker([4.452145, -75.7891103], { alt: 'casa de la cultura' })
  .addTo(map)
  .bindPopup('CENTRO DE CAPACITACIONES');
marker([4.4515452, -75.7839117], { alt: 'estadio' })
  .addTo(map)
  .bindPopup('ESTADIO MUNICIPAL');
marker([4.4551166, -75.7893992], { alt: 'coliseo' })
  .addTo(map)
  .bindPopup('COLISEO MUNICIPAL');

marker([4.45175, -75.7857603], { alt: 'museo' })
  .addTo(map)
  .bindPopup('MUSEO DE LA QUINDIANIDAD');
marker([4.4528054, -75.7912877], { alt: 'bar1' })
  .addTo(map)
  .bindPopup('ALMENDROS BAR');
marker([4.45298, -75.788437], { alt: 'hotel1' })
  .addTo(map)
  .bindPopup('HOTEL ANAPOIMA');
marker([4.4529095, -75.7896601], { alt: 'hotel2' })
  .addTo(map)
  .bindPopup('HOTEL MIRADOR DE SAN ESTEBAN');

marker([4.4531191, -75.7893854], {
  icon: icon({ iconUrl: icons.public, iconSize: [35, 35] })
}).addTo(map);
*/
// alcaldiamarker..bindPopup('ALCALDIA').opentooltips();

// const coord =[
// [
// [4.463003507272376, -75.77964861817601],
// [4.457583714737467, -75.79113661292655],
// [4.453043029518767, -75.79576056544072],
// [4.4509412176424945, -75.79773128761587],
// [4.447145622400527, -75.79603065755171],
// [4.4425363265595195, -75.7903207787946],
// [4.446332347659279, -75.78515432031254],
// [4.445654764572765, -75.78080420663022],
// [4.446942670218007, -75.7783593527278],
// [4.451617452563923, -75.77604984145886],
// [4.452634657761422, -75.7816203791541],
// [4.459481142092031, -75.78189077729516],
// [4.463003507272376, -75.77964861817601],

// ]
// ],

// polygon(coord).addTo(map);
