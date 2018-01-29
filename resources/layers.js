var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
/*****WMS-Layer****************************************************************************** */
var lyr_area_result_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tickets1.manserv.net:28080/geoserver/future/wms",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "area_result",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "area_result",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_area_result_0, 0]);

var lyr_buffer_result_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tickets1.manserv.net:28080/geoserver/future/wms",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "buffer_result",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "buffer_result",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_buffer_result_1, 0]);
              
var lyr_ford_AU_sites_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tickets1.manserv.net:28080/geoserver/future/wms",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "ford_AU_sites",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "ford_AU_sites",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ford_AU_sites_2, 0]);

/**************************WFS*************************************************** */
var vectorSource = new ol.source.Vector({
                format: new ol.format.GeoJSON(),
                url: function(extent) {
                  return 'http://tickets1.manserv.net:28080/geoserver/wfs?service=WFS&' +
                      'version=1.1.0&request=GetFeature&typename=future:test_site&' +
                      'outputFormat=application/json&srsname=EPSG:4326&' +
                      'bbox=' + extent.join(',') + ',EPSG:4326';
                },
                strategy: ol.loadingstrategy.bbox
              });
        
        
var vector = new ol.layer.Vector({
                source: vectorSource,
                style: new ol.style.Style({
                  stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 255, 1.0)',
                    width: 2
                  })
                })
              });              
/***********************WFS-Layer*********************************************              
var format_test_site_3 = new ol.format.GeoJSON();
var features_test_site_3 = format_test_site_3.readFeatures(json_test_site_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_site_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_test_site_3.addFeatures(features_test_site_3);
var lyr_test_site_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_test_site_3, 
                style: style_test_site_3,
                title: '<img src="styles/legend/test_site_3.png" /> test_site'
            });
*/
lyr_area_result_0.setVisible(true);lyr_buffer_result_1.setVisible(true);lyr_ford_AU_sites_2.setVisible(true);vector.setVisible(true);
var layersList = [baseLayer,lyr_area_result_0,lyr_buffer_result_1,lyr_ford_AU_sites_2,vector];
/*
lyr_test_site_3.set('fieldAliases', {'pkuid': 'pkuid', });
lyr_test_site_3.set('fieldImages', {'pkuid': 'TextEdit', });
lyr_test_site_3.set('fieldLabels', {'pkuid': 'no label', });
lyr_test_site_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
*/
