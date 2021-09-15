  mapboxgl.accessToken = 'pk.eyJ1Ijoic2F5Zi1hbGkiLCJhIjoiY2t0Znl1cmd1MGQybzJxbmx1a3A1YnR2eSJ9.t-2nB9KO3hV4_qUX8ecS6Q';

  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.99260656377989, 40.72414022143868], //East Houston Street & Bowery Intersection//
      pitch: 60, //Added for map tilt
      bearing: -60, //Added for map tilt
      zoom: 13.95,
      
  });
 

var marker = new mapboxgl.Marker()
    .setLngLat([-73.98114566574066, 40.75325460224342])
    .addTo(map);

const busStops = [
[-73.98114566574066, 40.75325460224342], //5 AV/W 41 ST//
[-73.98269456810408, 40.75118432875107], //5 AV/W 38 ST//
[-73.9839117166054, 40.749518676937434], //5 AV/W 35 ST//
[-73.98539385727021, 40.747570028645654], //5 AV/W 33 ST//
[-73.98641123170572, 40.74610832316239], //5 AV/W 30 ST//
[-73.9871194510927, 40.74515172166475], //5 AV/W 29 ST//
[-73.98852768002516, 40.74319774314223], //5 AV/W 26 ST//
[-73.98988331241765, 40.74139184181483], //5 AV/W 23 ST//
[-73.9912539172854, 40.73950142321015], //5 AV/W 20 ST//
[-73.99253495921158, 40.7377445997577], //5 AV/W 17 ST//
[-73.99410813252078, 40.73554768138446], //5 AV/W 13 ST//
[-73.99487920253141, 40.73448503348043], //5 AV/W 12 ST//
[-73.99574684340584, 40.73326108209478], //5 AV/W 10 ST//
[-73.99592343445104, 40.732008707302164], //E 8 ST/5 AV//
[-73.99449968275644, 40.73143275238225], //E 8 ST/UNIVERSITY PL//
[-73.9928737322174, 40.7307746669175], //E 8 ST/MERCER ST//
[-73.99361488767684, 40.7293267443881], //BROADWAY/WAVERLY PL//
[-73.99475657093093, 40.728007756112696], //BROADWAY/W 3 ST//
[-73.99616831363923, 40.72629391064834], //BROADWAY/BLEECKER ST//
[-73.99719023872873, 40.72512971912918], //BROADWAY/W HOUSTON ST//
[-73.99809061134815, 40.724044125925786], //BROADWAY/PRINCE ST//
[-73.9991623739563, 40.7227321746149], //BROADWAY/SPRING ST//
[-74.00098816981661, 40.72056284901685], //BROADWAY/GRAND ST//
[-74.0028658446554, 40.71842701260856], //BROADWAY/WALKER ST//
[-74.00351023687242, 40.717589147589614], //BROADWAY/FRANKLIN ST//
[-74.00559090056348, 40.71517282259686], //BROADWAY/DUANE ST//
[-74.00657094913389, 40.7140248322477], //BROADWAY/CHAMBERS ST//
[-74.00793273987124, 40.712384931702324], //BROADWAY/PARK PL//
[-74.00860575348804, 40.711620131493525], //BROADWAY/BARCLAY ST//
[-74.00993417231672, 40.709997889168896], //BROADWAY/CORTLANDT ST//
[-74.01106494705581, 40.708675198013665], //BROADWAY/THAMES ST//
[-74.01195957952555, 40.7075942189436], //BROADWAY/RECTOR ST//
[-74.01453897108861, 40.703383082313856], //STATE ST/BRIDGE ST//
[-74.01312376189696, 40.70234976213974] //STATE ST/WHITEHALL ST//
];

const geojson = { //Used to add gradient line//
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {},
'geometry': {
'coordinates': busStops, //Used to add gradient line//
'type': 'LineString' //Used to add gradient line//
}
}
]
};
 
map.on('load', () => {
// 'line-gradient' can only be used with GeoJSON sources
// and the source must have the 'lineMetrics' option set to true

map.addSource('line', {
type: 'geojson',
lineMetrics: true,
data: geojson
});
 
// the layer must be of type 'line'
map.addLayer({  
type: 'line',
source: 'line',
id: 'line',
paint: {
'line-color': 'red',
'line-width': 14,
// 'line-gradient' must be specified using an expression
// with the special 'line-progress' property
'line-gradient': [
'interpolate',
['linear'],
['line-progress'],
0,
'blue',
0.1,
'royalblue',
0.3,
'cyan',
0.5,
'lime',
0.7,
'yellow',
1,
'red'
]
},
layout: {
'line-cap': 'round',
'line-join': 'round'
}
}); //End of gradient line code//

    //Start of Hover Over Marker Popup Code

map.addSource('places', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [

{
'type': 'Feature',
'properties': {
'description':
'<strong> Bus Stop: 5 AV/W 41 ST<br>Neighborhood: Midtown South<br>Public Park: Bryant Park<br>Attraction: New York Public Library </p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.98114566574066, 40.75325460224342]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 38 ST<br>Neighborhood: Midtown South</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.98269456810408, 40.75118432875107]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 35 ST<br>Neighborhood: Midtown South</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.9839117166054, 40.749518676937434]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 33 ST<br>Neighborhood: Midtown South<br>Attraction: Empire State Building</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.98539385727021, 40.747570028645654]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 30 ST<br>Neighborhood: Midtown South</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.98641123170572, 40.74610832316239]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 29 ST<br>Neighborhood: Midtown South</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.9871194510927, 40.74515172166475]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 26 ST<br>Neighborhood: Flatiron District<br>Public Park: Madison Park - North<br>Attraction(s): National Museum of Mathematics</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.98852768002516, 40.74319774314223]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 23 ST<br>Neighborhood: Flatiron District<br>Public Park: Madison Park - North<br>Attraction(s): Flatiron Building</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.98988331241765, 40.74139184181483]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 20 ST<br>Neighborhood: Flatiron District</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.9912539172854, 40.73950142321015]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 17 ST<br>Neighborhood: Union Square<br>Public Park: Union Square Park - North</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99253495921158, 40.7377445997577]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 13 ST<br>Neighborhood: Greenwich Village<br>Attraction(s): The New School, Parsons School of Design</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99410813252078, 40.73554768138446]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 12 ST<br>Neighborhood: Greenwich Village<br>Attraction(s): The New School, Parsons School of Design</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99487920253141, 40.73448503348043]
}
},


{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: 5 AV/W 10 ST<br>Neighborhood: Greenwich Village</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99574684340584, 40.73326108209478]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: E 8 ST/5 AV<br>Neighborhood: Greenwich Village</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99592343445104, 40.732008707302164]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: E 8 ST/UNIVERSITY PL<br>Neighborhood: Greenwich Village<br>Public Park: Washington Square Park<br>Attraction(s): New York University</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99449968275644, 40.73143275238225]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: E 8 ST/MERCER ST<br>Neighborhood: Greenwich Village<br>Attraction(s): New York University</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.9928737322174, 40.7307746669175]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/WAVERLY PL<br>Neighborhood: Greenwich Village, NoHo<br>Attraction(s): New York University</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99361488767684, 40.7293267443881]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/W 3 ST<br>Neighborhood: Greenwich Village, NoHo</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99475657093093, 40.728007756112696]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/BLEECKER ST<br>Neighborhood: Greenwich Village, NoHo</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99616831363923, 40.72629391064834]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/W HOUSTON ST<br>Neighborhood: SoHo</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99719023872873, 40.72512971912918]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/PRINCE ST<br>Neighborhood: SoHo<br>Attraction(s): Museum of Ice Cream</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.99809061134815, 40.724044125925786]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/SPRING ST<br>Neighborhood: SoHo</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-73.9991623739563, 40.7227321746149]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/GRAND ST<br>Neighborhood: SoHo</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.00098816981661, 40.72056284901685]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>BROADWAY/WALKER ST<br>Neighborhood: Tribeca, Chinatown</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.0028658446554, 40.71842701260856]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/FRANKLIN ST<br>Neighborhood: Tribeca, Chinatown</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.00351023687242, 40.717589147589614]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/DUANE ST<br>Neighborhood: Tribeca, Civic Center<br>Attraction(s): African Burial Ground National Monument</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.00559090056348, 40.71517282259686]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/CHAMBERS ST<br>Neighborhood: Tribeca, Civic Center<br>Public Park: City Hall Park<br>Attraction(s): New York City Hall</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.00657094913389, 40.7140248322477]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/PARK PL<br>Neighborhood: Tribeca, Civic Center<br>Public Park: City Hall Park<br>Attraction(s): The Woolworth Building</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.00793273987124, 40.712384931702324]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/BARCLAY ST<br>Neighborhood: Tribeca, Civic Center<br>Public Park: City Hall Park<br>Attraction(s): New York City Hall</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.00860575348804, 40.711620131493525]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/CORTLANDT ST<br>Neighborhood: Financial District<br>Attraction(s): One World Trade Center, 9/11 Memorial & Museum</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.00993417231672, 40.709997889168896]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/THAMES ST<br>Neighborhood: Financial District<br>Attraction(s): American Stock Exchange</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.01106494705581, 40.708675198013665]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: BROADWAY/RECTOR ST<br>Neighborhood: Financial District<br>Attraction(s): New York Stock Exchange, Charging Bull</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.01195957952555, 40.7075942189436]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: STATE ST/BRIDGE ST<br>Neighborhood: Financial District<Br>Public Park: The Battery - North<br>Attraction(s): National Museum of the American Indian, Korean War Memorial</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.01453897108861, 40.703383082313856]
}
},

{
'type': 'Feature',
'properties': {
'description':
'<strong>Bus Stop: STATE ST/WHITEHALL ST<br>Neighborhood: Financial District<br>Public Park: The Battery - South<br>Attraction(s): Ellis Island National Museum of Immigration, Statue of Liberty National Park</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-74.01312376189696, 40.70234976213974]
}
},

]
}
});

// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'circle',
'source': 'places',
'paint': {
'circle-color': '#4264fb',
'circle-radius': 6,
'circle-stroke-width': 2,
'circle-stroke-color': '#ffffff'
}
});

 
// Create a popup, but don't add it to the map yet.
const popup = new mapboxgl.Popup({
closeButton: false,
closeOnClick: false
});
 
map.on('mouseenter', 'places', (e) => {
// Change the cursor style as a UI indicator.
map.getCanvas().style.cursor = 'pointer';
 
// Copy coordinates array.
const coordinates = e.features[0].geometry.coordinates.slice();
const description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
// Populate the popup and set its coordinates
// based on the feature found.
popup.setLngLat(coordinates).setHTML(description).addTo(map);
});
 
map.on('mouseleave', 'places', () => {
map.getCanvas().style.cursor = '';
popup.remove();
});
});




let counter = 0;
function move(){
  setTimeout(()=>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  },1000); 
}
