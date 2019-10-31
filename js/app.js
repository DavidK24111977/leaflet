var mymap = L.map('mapid').setView([50.067336, 4.548450], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGF2aWRraXBzIiwiYSI6ImNrMmVoZW8yZjA2NjEzYnA1cWJqZGYwNW8ifQ.vqJFnRhbghaNYVU54d5LvQ'
}).addTo(mymap);

getIcon("fondry");
getLocation(getIcon("fondry"),"fondry","Fondry des chiens","Lorem ipsum dolor sit amet",[50.069335, 4.556054]);

getIcon("chateau");
getLocation(getIcon("chateau"),"chateau","Château de Nismes","Lorem ipsum dolor sit amet",[50.075341, 4.550089]);

getIcon("parc");
getLocation(getIcon("parc"),"parc","Parc de Nismes","Lorem ipsum dolor sit amet",[50.076802, 4.552044]);

function getIcon(name){
    return L.icon({
        iconUrl: 'img/'+name+'-m.png',
        iconSize:     [120, 120],
        iconAnchor:   [50, 0],
        popupAnchor:  [0, 0],
        riseOnHover: true
    });
}

function getLocation(icon,name,titre,desc,coordonnees){
    var loc = L.marker(coordonnees, {icon: getIcon(name),title:titre,riseOnHover:true}).addTo(mymap);
   return loc.bindPopup("<h1>"+titre+"</h1><img src='img/"+name+".png'><p>"+desc+"</p>").closePopup();
}
