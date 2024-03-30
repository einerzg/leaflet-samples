import { Map, control, geoJSON, icon, layerGroup, marker } from 'leaflet';
import { DEFAULT_ZOOM, icons } from '../../helper/constants';
import { createTileLayers } from '../../helper';
import { layers } from '../../data/layers';
import  path from './path.json';
import urb from './urb.json';
import senderos from './sederos.json';

const map = new Map('map').setView([4.4512175, -75.7887314], 15);

const defaultLayer = createTileLayers().addTo(map);
const secondLayer = createTileLayers(layers.baseLayers.thunderForest.map.atlas);
const thirdLayer = createTileLayers(layers.baseLayers.google.GoogleSatellite.map).addTo(map);
const fourthLayer = createTileLayers(layers.baseLayers.esri.worldStreetMap.map).addTo(map);

const educationGroup = layerGroup();
const markersEducation = [
  marker([4.4512, -75.788304], { icon: icon({ iconUrl: icons.house }) },
    { alt: 'colegio1' }).bindPopup(
    'INSTITUCIÓN EDUCATIVA SANTA TERESITA'
  ),
  marker([4.4532517, -75.7906383], { icon: icon({ iconUrl: icons.house }) },
    { alt: 'colegio2' }).bindPopup(
    'INSTITUCIÓN EDUCATIVA LUIS ARANGO CARDONA'
  ),
  marker([4.4524244, -75.7912977], { icon: icon({ iconUrl: icons.house }) },
    { alt: 'colegio3' }).bindPopup(
    'INSTITUCIÓN EDUCATIVA INSTITUTO TEBAIDA'
  ),
  marker([4.4547179, -75.7882707], { icon: icon({ iconUrl: icons.house }) },
    { alt: 'colegio4' }).bindPopup(
    'INSTITUCIÓN EDUCATIVA PEDACITO DE CIELO'
  )
];

markersEducation.forEach(function (education) {
  educationGroup.addLayer(education);
});

const restauranteGroup = layerGroup();
const markersRestaurantes = [
  marker([4.4531972, -75.7894741], { icon: icon({ iconUrl: icons.restaurant }) },
    { alt: 'restaurante1' }).bindPopup(
    'RESTAURANTE SAL Y CARBÓN'
  ),
  marker([4.4511798, -75.7893386],{ icon: icon({ iconUrl: icons.restaurant }) },
     { alt: 'restaurante2' }).bindPopup(
    'RESTAURANTE MARAVELEZ'
  ),
  marker([4.4508126, -75.7875076], { icon: icon({ iconUrl: icons.restaurant }) },
    { alt: 'restaurante3' }).bindPopup(
    'RESTAURANTE DONDE AGUJA'
  )

];

markersRestaurantes.forEach(function (restaurante) {
  restauranteGroup.addLayer(restaurante);
});

const organismosdeGroup = layerGroup();
const markersOrganismos = [
  marker([4.4514355, -75.7849107], { icon: icon({ iconUrl: icons.building }) },
    { alt: 'bomberos' }).bindPopup(
    'ESTACION DE BOMBEROS VOLUNTARIOS'
  ),
  marker([4.4520489, -75.7914086], { icon: icon({ iconUrl: icons.building }) },
    { alt: 'cruz roja' }).bindPopup(
    'CRUZ ROJA LA TEBAIDA'
  ),
];

markersOrganismos.forEach(function (organismos) {
  organismosdeGroup.addLayer(organismos);
});

const edificiosGroup = layerGroup();
const markersEdificios = [
  marker([4.4531191, -75.7893854], { icon: icon({ iconUrl: icons.house }) },
    { alt: 'alcaldia' }).bindPopup(
    'ALCALDIA'),
  marker([4.4515337, -75.7865493], { icon: icon({ iconUrl: icons.house }) },
    { alt: 'policia' }).bindPopup(
    'ESTACIÓN DE POLICIA'),
  marker([4.4518982, -75.7848804], { icon: icon({ iconUrl: icons.hospital }) },
    { alt: 'hospital' }).bindPopup
  ('HOSPITAL PIO X'),
];

markersEdificios.forEach(function (edificios) {
  edificiosGroup.addLayer(edificios);
});

const parquesGroup = layerGroup();
const markersParques = [
  marker([4.4531923, -75.7885731], { alt: 'parque1' }).bindPopup(
    'PLAZA DE BOLIVAR'),
  marker([4.4514682, -75.7874188], { alt: 'parque2' }).bindPopup(
    'PLAZA NUEVA'),
];

markersParques.forEach(function (parques) {
  parquesGroup.addLayer(parques);
});

const escenariosdeportivosGroup = layerGroup();
const markersEscenariodeportivo = [
  marker([4.4515452, -75.7839117], { icon: icon({ iconUrl: icons.sport_soccer }) },
    { alt: 'estadio' }).bindPopup(
    'ESTADIO MUNICIPAL'),
  marker([4.4551166, -75.7893992], { icon: icon({ iconUrl: icons.sport_soccer }) },
    { alt: 'coliseo' }).bindPopup(
    'COLISEO MUNICIPAL'),
];

markersEscenariodeportivo.forEach(function (deporte) {
  escenariosdeportivosGroup.addLayer(deporte);
});
const escenariosculturalesGroup = layerGroup();
const markersEscenariosculturales = [
  marker([4.452145, -75.7891103], { icon: icon({ iconUrl: icons.book_addresses }) },
    { alt: 'casa de la cultura' }).bindPopup(
    'CENTRO DE CAPACITACIONES'),
  marker([4.45175, -75.7857603], { icon: icon({ iconUrl: icons.book_addresses }) },
    { alt: 'museo' }).bindPopup(
    'MUSEO DE LA QUINDIANIDAD'),

];

markersEscenariosculturales.forEach(function (cultura) {
  escenariosculturalesGroup.addLayer(cultura);
});

const hotelesGroup = layerGroup();
const markersHoteles = [
  marker([4.45298, -75.788437], { icon: icon({ iconUrl: icons.building }) },
    { alt: 'hotel1' }).bindPopup(
    'HOTEL ANAPOIMA'),
  marker([4.4529095, -75.7896601], { icon: icon({ iconUrl: icons.building }) },
    { alt: 'hotel2' }).bindPopup(
    'HOTEL MIRADOR DE SAN ESTEBAN'),
];

markersHoteles.forEach(function (hotel) {
  hotelesGroup.addLayer(hotel);
});

const barGroup = layerGroup();
const markersBar = [
  marker([4.4528054, -75.7912877], { icon: icon({ iconUrl: icons.drink }) },
    { alt: 'bar1' }).bindPopup(
    'ALMENDROS BAR'),
];

markersBar.forEach(function (bar) {
  barGroup.addLayer(bar);
});



const route = geoJSON(path);
const Area = geoJSON(urb);
const caminos = geoJSON(senderos);

const baseLayers = { Default: defaultLayer, 'Second Layer': secondLayer, 'Third Layer': thirdLayer, 'Fourth Layer': fourthLayer, };

const overlays = {
  Educación: educationGroup,
  Restaurantes: restauranteGroup,
  'Organismos de Socorro': organismosdeGroup,
  'Edificaciones Indispensables': edificiosGroup, 
  Parques: parquesGroup,
  'Escenarios Deportivos': escenariosdeportivosGroup,
  'Escenarios Culturales': escenariosculturalesGroup,
  Hoteles: hotelesGroup,
  Bar: barGroup,
'Senderos': caminos, 
'Area Rural': Area, 'Area Urbana': route,
};



control.layers(baseLayers, overlays,).addTo(map);
