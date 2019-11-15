
let mymap = L.map('vineyards').setView([38, -75.633502], 4.5);


L.tileLayer('https://api.mapbox.com/styles/v1/rebeccasan/ck2xi6ya91tcv1cmu5kcjc2zi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmViZWNjYXNhbiIsImEiOiJjazJ4aDhkcHAwcTU3M25scXg1NG83YjVpIn0.UXcHGT269gOArUXkm4O-rA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for (let i=0; i<places.length; i++) {
  L.marker( [places[i].latitude, places[i].longitude])
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
    places[i].descrip + '</p>')
  .addTo(mymap);
}
