var myCenter=new google.maps.LatLng(47.747556,26.667003);

	function initialize()
	{
	var mapProp = {
	  center:myCenter,
	  zoom:15,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	  };

	var map=new google.maps.Map(document.getElementById("Gmap"),mapProp);

	var marker=new google.maps.Marker({
	  position:myCenter,
	  });

	marker.setMap(map);
	}

	google.maps.event.addDomListener(window, 'load', initialize);