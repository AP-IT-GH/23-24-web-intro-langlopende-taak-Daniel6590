// Initialisatie van de kaart
var map = L.map('map').setView([51.29959487915039, 4.718693256378174], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.29959487915039, 4.718693256378174]).addTo(map);

// Je kunt ook markers, polygons, pop-ups en andere functionaliteiten van Leaflet toevoegen