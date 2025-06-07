ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:54030").setExtent([-2011148.421641, 1869328.831534, 6890114.642032, 7645936.094277]);
var wms_layers = [];

var format_World_0 = new ol.format.GeoJSON();
var features_World_0 = format_World_0.readFeatures(json_World_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54030'});
var jsonSource_World_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_World_0.addFeatures(features_World_0);
var lyr_World_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_World_0, 
                style: style_World_0,
                popuplayertitle: 'World',
                interactive: false,
                title: '<img src="styles/legend/World_0.png" /> World'
            });
var format_Supplier_1 = new ol.format.GeoJSON();
var features_Supplier_1 = format_Supplier_1.readFeatures(json_Supplier_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54030'});
var jsonSource_Supplier_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supplier_1.addFeatures(features_Supplier_1);
var lyr_Supplier_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supplier_1, 
                style: style_Supplier_1,
                popuplayertitle: 'Supplier',
                interactive: true,
                title: '<img src="styles/legend/Supplier_1.png" /> Supplier'
            });
var format_Seeker_2 = new ol.format.GeoJSON();
var features_Seeker_2 = format_Seeker_2.readFeatures(json_Seeker_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54030'});
var jsonSource_Seeker_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seeker_2.addFeatures(features_Seeker_2);
var lyr_Seeker_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seeker_2, 
                style: style_Seeker_2,
                popuplayertitle: 'Seeker',
                interactive: true,
                title: '<img src="styles/legend/Seeker_2.png" /> Seeker'
            });
var format_Supplier_3 = new ol.format.GeoJSON();
var features_Supplier_3 = format_Supplier_3.readFeatures(json_Supplier_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54030'});
var jsonSource_Supplier_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supplier_3.addFeatures(features_Supplier_3);
var lyr_Supplier_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supplier_3, 
                style: style_Supplier_3,
                popuplayertitle: 'Supplier',
                interactive: true,
                title: '<img src="styles/legend/Supplier_3.png" /> Supplier'
            });
var format_Seeker_4 = new ol.format.GeoJSON();
var features_Seeker_4 = format_Seeker_4.readFeatures(json_Seeker_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54030'});
var jsonSource_Seeker_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seeker_4.addFeatures(features_Seeker_4);
var lyr_Seeker_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seeker_4, 
                style: style_Seeker_4,
                popuplayertitle: 'Seeker',
                interactive: true,
                title: '<img src="styles/legend/Seeker_4.png" /> Seeker'
            });

lyr_World_0.setVisible(true);lyr_Supplier_1.setVisible(true);lyr_Seeker_2.setVisible(true);lyr_Supplier_3.setVisible(true);lyr_Seeker_4.setVisible(true);
var layersList = [lyr_World_0,lyr_Supplier_1,lyr_Seeker_2,lyr_Supplier_3,lyr_Seeker_4];
lyr_World_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Supplier_1.set('fieldAliases', {'seeker': 'seeker', 'count': 'count', 'supplier': 'supplier', 'layer': 'layer', 'path': 'path', 'Seeker Country': 'Seeker Country', 'Supplier Country': 'Supplier Country', 'Number of drone transfers': 'Number of drone transfers', });
lyr_Seeker_2.set('fieldAliases', {'seeker': 'seeker', 'count': 'count', 'supplier': 'supplier', 'layer': 'layer', 'path': 'path', 'Seeker Country': 'Seeker Country', 'Number of drone transfers': 'Number of drone transfers', });
lyr_Supplier_3.set('fieldAliases', {'count': 'count', 'supplier': 'supplier', 'Supplier country': 'Supplier country', 'Number of drone transfers': 'Number of drone transfers', });
lyr_Seeker_4.set('fieldAliases', {'seeker': 'seeker', 'count': 'count', 'Seeker country': 'Seeker country', 'Number of drone transfers': 'Number of drone transfers', });
lyr_World_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Supplier_1.set('fieldImages', {'seeker': 'TextEdit', 'count': 'TextEdit', 'supplier': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Seeker Country': 'TextEdit', 'Supplier Country': 'TextEdit', 'Number of drone transfers': 'Range', });
lyr_Seeker_2.set('fieldImages', {'seeker': 'TextEdit', 'count': 'TextEdit', 'supplier': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Seeker Country': '', 'Number of drone transfers': '', });
lyr_Supplier_3.set('fieldImages', {'count': '', 'supplier': '', 'Supplier country': '', 'Number of drone transfers': '', });
lyr_Seeker_4.set('fieldImages', {'seeker': '', 'count': '', 'Seeker country': '', 'Number of drone transfers': '', });
lyr_World_0.set('fieldLabels', {'fid': 'hidden field', 'iso_a2': 'hidden field', 'NAME': 'hidden field', 'FIPS_10_': 'hidden field', 'ISO_A3': 'hidden field', 'WB_A2': 'hidden field', 'WB_A3': 'hidden field', });
lyr_Supplier_1.set('fieldLabels', {'seeker': 'hidden field', 'count': 'hidden field', 'supplier': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Seeker Country': 'hidden field', 'Supplier Country': 'inline label - always visible', 'Number of drone transfers': 'inline label - always visible', });
lyr_Seeker_2.set('fieldLabels', {'seeker': 'hidden field', 'count': 'hidden field', 'supplier': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Seeker Country': 'inline label - always visible', 'Number of drone transfers': 'inline label - always visible', });
lyr_Supplier_3.set('fieldLabels', {'count': 'hidden field', 'supplier': 'hidden field', 'Supplier country': 'inline label - always visible', 'Number of drone transfers': 'inline label - always visible', });
lyr_Seeker_4.set('fieldLabels', {'seeker': 'hidden field', 'count': 'hidden field', 'Seeker country': 'inline label - always visible', 'Number of drone transfers': 'inline label - always visible', });
lyr_Seeker_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});