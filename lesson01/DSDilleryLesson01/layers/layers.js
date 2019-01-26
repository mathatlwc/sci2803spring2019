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
var format_ky2017Access_0 = new ol.format.GeoJSON();
var features_ky2017Access_0 = format_ky2017Access_0.readFeatures(json_ky2017Access_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ky2017Access_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ky2017Access_0.addFeatures(features_ky2017Access_0);var lyr_ky2017Access_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ky2017Access_0, 
                style: style_ky2017Access_0,
    title: 'ky2017Access<br />\
    <img src="styles/legend/ky2017Access_0_0.png" /> <br />\
    <img src="styles/legend/ky2017Access_0_1.png" /> Food Access<br />\
    <img src="styles/legend/ky2017Access_0_2.png" /> Limited Access<br />'
        });

lyr_ky2017Access_0.setVisible(true);
var layersList = [baseLayer,lyr_ky2017Access_0];
lyr_ky2017Access_0.set('fieldAliases', {'ALAND': 'Area Land', 'AWATER': 'Area Water', 'tractID': 'Tract ID', 'A_State': 'State', 'A_County': 'County', 'A_Urban': 'Urban', 'A_POP2010': 'Population', 'A_LILATrac': '>1/2or>10', 'LiNva': 'No Vhcl', 'LiNvaOrD': 'Lmtd Accss', });
lyr_ky2017Access_0.set('fieldImages', {'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'tractID': 'TextEdit', 'A_State': 'TextEdit', 'A_County': 'TextEdit', 'A_Urban': 'TextEdit', 'A_POP2010': 'TextEdit', 'A_LILATrac': 'TextEdit', 'LiNva': 'TextEdit', 'LiNvaOrD': 'TextEdit', });
lyr_ky2017Access_0.set('fieldLabels', {'ALAND': 'inline label', 'AWATER': 'inline label', 'tractID': 'inline label', 'A_State': 'inline label', 'A_County': 'inline label', 'A_Urban': 'inline label', 'A_POP2010': 'inline label', 'A_LILATrac': 'inline label', 'LiNva': 'inline label', 'LiNvaOrD': 'inline label', });
lyr_ky2017Access_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});