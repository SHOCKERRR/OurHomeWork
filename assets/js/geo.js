const mymap = L.map('map').setView([54.095759, 28.317835], 17);

const ME_ICON = L.icon({
    iconUrl: 'assets/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 20],
    popupAnchor: [-3, -76]
});
const FRIEND_ICON = L.icon({
    iconUrl: 'assets/images/marker-icon-2.png',
    iconSize: [25, 41],
    iconAnchor: [12, 20],
    popupAnchor: [-3, -76]
});
const PLACE_ICON = L.icon({
    iconUrl: 'assets/images/marker-icon-3.png',
    iconSize: [25, 41],
    iconAnchor: [12, 20],
    popupAnchor: [-3, -76]
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 25,
    minZoom: 10,
    zoomControl: true,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

let popup = L.popup();

function placeMarker(coor = [54.095759, 28.317835], icon = false){
    if (icon) L.marker(coor, {icon: icon}).addTo(mymap)
    else L.marker(coor).addTo(mymap)
    // Стиль маркера и его метод 
    // .bindPopup("<b>Hello!</b><br />I am here.").openPopup();
}

function onMapClick(e) {
    console.log(e)
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
