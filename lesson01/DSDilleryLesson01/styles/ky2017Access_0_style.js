var size = 0;
var placement = 'point';
function categories_ky2017Access_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(205,193,14,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(50,150,4,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.498039215686)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,243,1,0.498039215686)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_ky2017Access_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("LiNvaOrD");
    var labelText = "";
    size = 0;
    var labelFont = "14.3px \'Ubuntu\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_ky2017Access_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
