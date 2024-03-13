import { Map, marker, popup } from "leaflet";
import { createTileLayers } from "../helper";

const map = new Map('map').setView([4.53389, -75.68111], 13);

createTileLayers().addTo(map);
//Adding marker
marker([4.55402805, -75.6609262169371]).addTo(map);

//Adding popup
const latlng = L.latLng(4.55402805, -75.6609262169371);
popup().setLatLng(latlng)
.setContent('<p>Hello world!<br />Programación de Aplicaciones Web Map.</p>')
.openOn(map);
