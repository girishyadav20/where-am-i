(function(){
  var map = L.map("mapid").setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2lyaXNoeWFkYXYyMCIsImEiOiJjaXgwMzdtdmEwMXF4MnpxY3d5bzF3a21tIn0.ZzV0PBfMtGT_kjV0AffDIw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa´/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
  }).addTo(map);
})()
