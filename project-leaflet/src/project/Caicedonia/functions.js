import { icon, marker } from 'leaflet';
import { icons } from '../../helper/constants';

export function onEachManzana(feature, layer) {
  let popupContent = 'Código Catastral: ';

  if (feature.properties && feature.properties.CODIGO_ANT) {
    popupContent += feature.properties.CODIGO_ANT;
  }

  layer.bindPopup(popupContent);
}

export function onEachVereda(feature, layer) {
  let popupContent = 'Nombre: ';

  if (feature.properties && feature.properties.NAME) {
    popupContent += feature.properties.NAME;
  }

  layer.bindPopup(popupContent);
}

export function onEachVia(feature, layer) {
  let popupContent = 'Nomenclatura: ';

  if (feature.properties && feature.properties.TEXTO) {
    popupContent += feature.properties.TEXTO;
  }

  layer.bindPopup(popupContent);
}

export function onEachRuta(feature, layer) {
  let popupContent = 'Nombre Ruta: ';

  if (feature.properties && feature.properties.name) {
    popupContent += feature.properties.name;
  }

  layer.bindPopup(popupContent);
}

export function styles(feature) {
  switch (feature.properties.id) {
    case 1: return { color: 'yellow' };
    case 2: return { color: 'orange' };
  }
}

export function pointToMarker(feature, latlng) {
  switch (feature.properties.type) {
    case 1: return marker(latlng, { icon: icon({ iconUrl: icons.book_addresses, iconSize: [16, 16] }) });
    case 2: return marker(latlng, { icon: icon({ iconUrl: icons.sport_soccer, iconSize: [16, 16] }) });
    case 3: return marker(latlng, { icon: icon({ iconUrl: icons.building, iconSize: [16, 16] }) });
    case 4: return marker(latlng, { icon: icon({ iconUrl: icons.restaurant, iconSize: [16, 16] }) });
    case 5: return marker(latlng, { icon: icon({ iconUrl: icons.drink, iconSize: [16, 16] }) });
    case 6: return marker(latlng, { icon: icon({ iconUrl: icons.house, iconSize: [16, 16] }) });
    case 7: return marker(latlng, { icon: icon({ iconUrl: icons.award_star_gold_3, iconSize: [16, 16] }) });
    case 8: return marker(latlng, { icon: icon({ iconUrl: icons.pill, iconSize: [16, 16] }) });
    case 9: return marker(latlng, { icon: icon({ iconUrl: icons.hospital, iconSize: [16, 16] }) });
  }
}

export function onEachSitio(feature, layer) {
  let tooltipContent = 'Nombre: ';

  if (feature.properties && feature.properties.name) {
    tooltipContent += feature.properties.name;
  }

  layer.bindTooltip(tooltipContent, {
    opacity: 1,
    direction: 'top',
    sticky: true
  });
}
