import L from "leaflet";
import { tileLayers } from "./helper/data";

const map = L.map('map').setView([4.53389, -75.68111], 13);

L.tileLayer.wms('https://srvags.sgc.gov.co/arcgis/services/EPIS/EPIS_V2/MapServer/WMSServer?', {
    format: 'image/png',
    transparent: true,
    attribution: tileLayers.baseLayers.default.atribution
}).addTo(map);
