let map = L.map('map').setView([4.4536099, -75.8018303], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([4.4531191, -75.7893854], { alt:'alcaldia' }).addTo(map).bindPopup('ALCALDIA');
L.marker([4.4515337, -75.7865493], { alt:'policia' }).addTo(map).bindPopup('ESTACIÓN DE POLICIA');
L.marker([4.4518982, -75.7848804], { alt:'hospital' }).addTo(map).bindPopup('HOSPITAL PIO X');
L.marker([4.4531923, -75.7885731], { alt:'parque1' }).addTo(map).bindPopup('PLAZA DE BOLIVAR');
L.marker([4.4514682, -75.7874188], { alt:'parque2' }).addTo(map).bindPopup('PLAZA NUEVA');
L.marker([4.4514355, -75.7849107], { alt:'bomberos' }).addTo(map).bindPopup('ESTACION DE BOMBEROS VOLUNTARIOS');
L.marker([4.4520489, -75.7914086], { alt:'cruz roja' }).addTo(map).bindPopup('CRUZ ROJA LA TEBAIDA');
L.marker([4.4531972, -75.7894741], { alt:'restaurante1' }).addTo(map).bindPopup('RESTAURANTE SAL Y CARBÓN');
L.marker([4.4511798, -75.7893386], { alt:'restaurante2' }).addTo(map).bindPopup('RESTAURANTE MARAVELEZ');
L.marker([4.4508126, -75.7875076], { alt:'restaurante3' }).addTo(map).bindPopup('RESTAURANTE DONDE AGUJA');
L.marker([4.452145, -75.7891103], { alt:'casa de la cultura' }).addTo(map).bindPopup('CENTRO DE CAPACITACIONES');
L.marker([4.4515452, -75.7839117], { alt:'estadio' }).addTo(map).bindPopup('ESTADIO MUNICIPAL');
L.marker([4.4551166, -75.7893992], { alt:'coliseo' }).addTo(map).bindPopup('COLISEO MUNICIPAL');
L.marker([4.4512, -75.788304], { alt:'colegio1' }).addTo(map).bindPopup('INSTITUCIÓN EDUCATIVA SANTA TERESITA');
L.marker([4.4532517, -75.7906383], { alt:'colegio2' }).addTo(map).bindPopup('INSTITUCIÓN EDUCATIVA LUIS ARANGO CARDONA');
L.marker([4.4524244, -75.7912977], { alt:'colegio3' }).addTo(map).bindPopup('INSTITUCIÓN EDUCATIVA INSTITUTO TEBAIDA');
L.marker([4.4547179, -75.7882707], { alt:'colegio4' }).addTo(map).bindPopup('INSTITUCIÓN EDUCATIVA PEDACITO DE CIELO');
L.marker([4.45175, -75.7857603], { alt:'museo' }).addTo(map).bindPopup('MUSEO DE LA QUINDIANIDAD');
L.marker([4.4528054, -75.7912877], { alt:'bar1' }).addTo(map).bindPopup('ALMENDROS BAR');
L.marker([4.45298, -75.788437], { alt:'hotel1' }).addTo(map).bindPopup('HOTEL ANAPOIMA');
L.marker([4.4529095,-75.7896601], { alt:'hotel2' }).addTo(map).bindPopup('HOTEL MIRADOR SAN ESTEBAN');
