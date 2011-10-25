function initialize(){

    var options = {
        zoom: 3.0,
        center: [47.19537,8.524404],
        proxyHost: 'proxy.php?full_headers=1&full_status=1&mode=native&url='
    };
    var earth = new WebGLEarth( 'earth_div', options );

    var earth2 = new WebGLEarth("earth_div2", options);
    earth2.initMap(WebGLEarth.Maps.CUSTOM, [
        "ERDAS IWS",
        options.proxyHost +
            "http://iws{sub}.erdas.com/ecwp/ecw_wmts.dll"
            + encodeURIComponent("?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=sampleiws_images_geodetic_worldgeodemo.ecw&STYLE=&TILEMATRIXSET=ogc:1.0:googlemapscompatible&")
            + "TILEMATRIX={z}%26TILEROW={y}%26TILECOL={x}"
            + encodeURIComponent("&FORMAT=image%2Fjpeg"),
        //"http://webglearth.googlecode.com/svn/resources/tms/{z}/{x}/{y}.jpg",
        1,
        5,
        256,
        false,
        ['',2,3,4,5,6]]);
    earth2.setMap(WebGLEarth.Maps.CUSTOM, "ERDAS IWS");

}

