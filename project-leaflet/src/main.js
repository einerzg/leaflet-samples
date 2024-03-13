import { Map } from "leaflet";
import { createTileLayers } from "./helper";

const map = new Map('map').setView([4.53389, -75.68111], 13);

createTileLayers().addTo(map);