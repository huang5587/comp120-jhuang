let map;

function initMap() {

  var icon = "car.png";
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.352271, lng: -71.05524200000001 },
    zoom: 14,
  });

  var cars = [
  			 	{ 
  			 		position: new google.maps.LatLng(42.3453, -71.0464),
  			  		id: "mXfkjrFw"
  			  	},
  			  	{
  			  		position: new google.maps.LatLng(42.3662, -71.0621),
  			  		id: "nZXB8ZHz"
  			  	},
  			  	{
  			  		position: new google.maps.LatLng(42.3603, -71.0547),
  			  		id: "Tkwu74WC"
  			  	},
  			  	{
  			  		position: new google.maps.LatLng(42.3472, -71.0802),
  			  		id: "5KWpnAJN"
  			  	},
		  		{
  			  		position: new google.maps.LatLng(42.3663, -71.0544),
  			  		id: "uf5ZrXYw"
  			  	},
		  		{
  			  		position: new google.maps.LatLng(42.3542, -71.0704),
  			  		id: "VMerzMH8"
  			  	},
  			  ];

  for (let i = 0; i < cars.length; i++) {
    const marker = new google.maps.Marker({
      position: cars[i].position,
      icon: icon,
      map: map,
    });
  }
}
