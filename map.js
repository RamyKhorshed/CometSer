var map;
var sizeValue = 0;
var dateValue = 500;
var gmarkers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(0,0),
    mapTypeId: 'satellite'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  // script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  // document.getElementsByTagName('head')[0].appendChild(script);
  // setAllMarkers()
  for (comet of store.comets) {
    var latLng = new google.maps.LatLng(comet.lat,comet.long);
    var marker = new google.maps.Marker({
       position: latLng,
       map: map
     })
     gmarkers.push(marker)
  }

}

function removeMarkers(){
    for(i=0; i<gmarkers.length; i++){
        gmarkers[i].setMap(null);
    }
}

let sizeSlider = document.getElementById("sizeSlider")
let sizeOutput = document.getElementById("sizeValue")

let dateSlider = document.getElementById("dateSlider")
let dateOutput = document.getElementById("dateValue")

function updateMap(array) {
  for (comet of array) {
    var latLng = new google.maps.LatLng(comet.lat,comet.long);
    var marker = new google.maps.Marker({
       position: latLng,
       map: map
     })
     gmarkers.push(marker)
  }
}


sizeOutput.innerHTML = sizeSlider.value;
sizeSlider.oninput = function () {
  sizeValue = Math.round(parseInt(this.value)/1000)
  sizeOutput.innerHTML = sizeValue
  removeMarkers();
  newComets = filterComets();
  updateMap(newComets);
}

dateOutput.innerHTML = dateSlider.value;

dateSlider.oninput = function () {
  dateOutput.innerHTML = this.value  
  dateValue = parseInt(this.value)
  removeMarkers();
  newComets = filterComets();
  updateMap(newComets);
}
