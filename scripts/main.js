
let map = L.map('centers').setView([29.654956, -82.317301], 12);
let marker1 = L.marker([29.642290, -82.369180]).addTo(map); // CWC
let marker2 = L.marker([29.660270, -82.436990]).addTo(map); // Village Counseling
let marker3 = L.marker([29.652220, -82.316750]).addTo(map); // GP Respite
let marker4 = L.marker([29.649100, -82.294970]).addTo(map); // Crisis Center
let marker5 = L.marker([29.644410, -82.292410]).addTo(map); // Health Street

marker1.bindPopup("<b>UF Counseling and Wellness Center</b><br>3190 Radio Rd, Gainesville, FL 32611</br>(352) 392-1575").openPopup();
marker2.bindPopup("<b>Village Counseling Center</b><br>3919 W Newberry Rd. Suite 5, Gainesville, FL 32607</br>(352) 373-8189").openPopup();
marker3.bindPopup("<b>Gainesville Peer Respite</b><br>728 E University Ave. Gainesville, FL 32601</br>(352) 559-4559").openPopup();
marker4.bindPopup("<b>Alachua County Crisis Center</b><br>Southeast, 218 SE 24th St, Gainesville, FL 32641</br>(352) 264-6789").openPopup();
marker5.bindPopup("<b>HealthStreet</b><br>2401 SW Archer Rd, Gainesville, FL 32608</br>(352) 294-4880").openPopup();



L.tileLayer('https://api.mapbox.com/styles/v1/rebeccasan/ck2xi6ya91tcv1cmu5kcjc2zi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmViZWNjYXNhbiIsImEiOiJjazJ4aDhkcHAwcTU3M25scXg1NG83YjVpIn0.UXcHGT269gOArUXkm4O-rA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
