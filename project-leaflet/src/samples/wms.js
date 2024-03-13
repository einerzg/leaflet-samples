import L from "leaflet";
import { createTileLayersWMS } from "../helper";

const map = L.map('map').setView([4.53389, -75.68111], 13);
createTileLayersWMS().addTo(map);
