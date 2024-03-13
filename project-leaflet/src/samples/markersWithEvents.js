import { Map, marker, popup } from "leaflet";
import { createTileLayers } from "../helper";
import { DEFAULT_ZOOM, LAT_UNIQUINDIO, LNG_UNIQUINDIO } from "../helper/constants";

const map = new Map("map").setView([LAT_UNIQUINDIO, LNG_UNIQUINDIO], DEFAULT_ZOOM);

createTileLayers().addTo(map);
//Adding marker
const uniquindioMarker = marker([LAT_UNIQUINDIO, LNG_UNIQUINDIO], {
    draggable: true,
}).addTo(map);

// Dragging events
uniquindioMarker.on('movestart', () => console.log('Start Move'));
uniquindioMarker.on('dragstart', () => console.log('Start Drag'));
uniquindioMarker.on('move', () => console.log('Moving'));
uniquindioMarker.on('drag', () => console.log('Dragging'));
uniquindioMarker.on('moveend', () => console.log('Move end'));
uniquindioMarker.on('dragend', () => console.log('Drag end'));

// Mouse events
uniquindioMarker.on('click', () => {
    console.log('Click')
    // remove marker
    map.removeLayer(uniquindioMarker);
});
uniquindioMarker.on('dnclick', () => console.log('Double click'));
uniquindioMarker.on('contextmenu', () => console.log('Click rigth'));
uniquindioMarker.on('mousedown', () => console.log('Mouse down'));
uniquindioMarker.on('mouseup', () => console.log('Mouse up'));
uniquindioMarker.on('mouseover', () => console.log('Mouse over'));
uniquindioMarker.on('mouseout', () => console.log('Mouse out'));
