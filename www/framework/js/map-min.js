var mymap=L.map("map",{center:[51.505,-.09],zoom:13,zoomControl:!1,attributionControl:!0});new L.Control.Zoom({position:"bottomleft"}).addTo(mymap),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap);