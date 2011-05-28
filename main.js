var options = { zoom: 3.0, center: [47.19537,8.524404] };
var earth = new WebGLEarth('earth_div', options);


var earth2 = new WebGLEarth("earth_div2", options);
earth2.initMap(WebGLEarth.Maps.CUSTOM, [ 
    "ERDAS IWS",
    "http://iws{sub}.erdas.com/ecwp/ecw_wmts.dll?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=sampleiws_images_geodetic_worldgeodemo.ecw&STYLE=&TILEMATRIXSET=ogc:1.0:googlemapscompatible&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=image%2Fjpeg",
    //"http://webglearth.googlecode.com/svn/resources/tms/{z}/{x}/{y}.jpg", 
    1, 
    5, 
    256, 
    false,
    ['',2,3,4,5,6]]);
earth2.setMap(WebGLEarth.Maps.CUSTOM, "ERDAS IWS");



