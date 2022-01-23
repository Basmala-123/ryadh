// map// Map ======================
var openedWindow;
var mapCustomStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#007558"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
];
var markers = [];
//initialize the map
var map;
function initialize() {
    var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(24.774265, 46.738586),
        styles: mapCustomStyle,
    };
    // load the map to the div container
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //set the store marker icon specification
    var storeMarkerIcon = {
        size: new google.maps.Size(100, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
    };
    //for each location, define the marker and information about the store for info window.
    for (var i = 0; i < storeLocation.length; i++) {
        storeMarkerIcon["url"] = i % 2 == 0 ? 'storeType1.png' : 'storeType2.png';
        //set the marker for each window.
        var marker = new google.maps.Marker({
            position: storeLocation[i],
            map: map,
            // icon: storeLocationIcons[i],
            index: i
        });
        //add all markers to the markers array
        markers.push(marker);
        //add the listener for each marker click event, so the information about the store will be shown in the balloon.
        google.maps.event.addListener(marker, 'click', (function (marker) {
            // // close the infowindow if anything opened already
            // if (openedWindow) {
            //     openedWindow.close();
            // }
            // //create and add the content to the info window according to the selected location.
            // var infowindow = new google.maps.InfoWindow({
            //     content: storeInfo[this.index]
            // });
            // //show the info window.
            // infowindow.open(map, this);
            // openedWindow = infowindow;
            window.open(storeInfo[this.index],'_blank');
        }));
    }
    //clustering option on zook out
    mcOptions = {
        styles: [{
            height: 52,
            url: "assets/images/cluster.png",
            textSize: 18,
            width: 53,
            textColor: "orange"
        },
        ],
        gridSize: 150
    }
    // call the jaascript library to cluster the markers
    // var markerClusterer = new MarkerClusterer(map, markers, mcOptions);
}
//finally load the map in your page :)
google.maps.event.addDomListener(window, 'load', initialize);
function goToLocation(lati, lngi) {
    map.setCenter({ lat: lati, lng: lngi });
}