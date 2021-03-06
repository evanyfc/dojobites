var map;
var infowindow;

window.initMap = function() {
  var codingdojo = {lat: 47.609999, lng: -122.196985};

  map = new google.maps.Map(document.getElementById('map'), {
    center: codingdojo,
    zoom: 16
  });

  var goldStar = {
    path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
    fillColor: 'yellow',
    fillOpacity: 0.8,
    scale: 0.1,
    strokeColor: 'gold',
    strokeWeight: 3
  };

  var marker = new google.maps.Marker({
    position: codingdojo,
    icon: goldStar,
    map: map
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: codingdojo,
    radius: 500,
    type: ['restaurant'],
    rankBy: google.maps.places.RankBy.PROMINENCE
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name + '<br>' + place.vicinity);
    $('#placeName').val(place.name);
    $('#rating').val(place.rating);
    $('#address').val(place.vicinity);
    infowindow.open(map, this);
  });
}

$(document).ready(function() {

});
