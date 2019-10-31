var mymap = L.map('mapid').setView([50.067336, 4.548450], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGF2aWRraXBzIiwiYSI6ImNrMmVoZW8yZjA2NjEzYnA1cWJqZGYwNW8ifQ.vqJFnRhbghaNYVU54d5LvQ'
}).addTo(mymap);


// Marker
var fondryIcon = L.icon({
    iconUrl: 'img/fondry-m.png',
    iconSize:     [120, 120], // size of the icon
    iconAnchor:   [50, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var fondry = L.marker([50.069335, 4.556054], {icon: fondryIcon}).addTo(mymap);
fondry.bindPopup("<h1>Fondry des chiens</h1><img src='img/fondry.png'><p>Lorem ipsum dolor sit amet</p>").closePopup();

var chateauIcon = L.icon({
    iconUrl: 'img/chateau-m.png',
    iconSize:     [120, 120], // size of the icon
    iconAnchor:   [50, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var chateau = L.marker([50.075341, 4.550089], {icon: chateauIcon}).addTo(mymap);
chateau.bindPopup("<h1>Château de Nismes</h1><img src='img/chateau.png'><p>Lorem ipsum dolor sit amet</p>").closePopup();
