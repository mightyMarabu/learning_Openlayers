var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');
closer.onclick = function() {
    container.style.display = 'none';
    closer.blur();
    return false;
};
var overlayPopup = new ol.Overlay({
    element: container
});

var expandedAttribution = new ol.control.Attribution({
    collapsible: false
});

var map = new ol.Map({
    controls: ol.control.defaults({attribution:false}).extend([
        expandedAttribution
    ]),
    target: document.getElementById('map'),
    renderer: 'canvas',
    overlays: [overlayPopup],
    layers: layersList,
    view: new ol.View({
         maxZoom: 28, minZoom: 1
    })
});

var layerSwitcher = new ol.control.LayerSwitcher({tipLabel: "Layers"});
map.addControl(layerSwitcher);
layerSwitcher.hidePanel = function() {};
layerSwitcher.showPanel();


map.getView().fit([16243604.800710, -4766212.786019, 16387214.048496, -4630060.211377], map.getSize());

var NO_POPUP = 0
var ALL_FIELDS = 1
