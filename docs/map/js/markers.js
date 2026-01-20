/**
 * Marker creation and management for Azure NetApp Files Region Map
 * Provides unified marker creation to replace duplicated code
 */

var MarkerManager = (function() {
    'use strict';

    // Store for created markers and line layers
    var markers = {};
    var lineLayers = {};
    var dataSources = {};

    /**
     * Generate popup content HTML for a region
     * @param {Object} region - Region object with all properties
     * @returns {string} HTML content for popup
     */
    function generatePopupContent(region) {
        var targetregions = region.crrregions || [];
        var check = '<span style="color:#0078d4;font-weight:600">&#10003;</span>';
        var cross = '<span style="color:#ccc">&#10005;</span>';

        function icon(val) { return val ? check : cross; }

        var features = [
            ['Ransomware protection', region.arp],
            ['AZ placement', region.azplacement],
            ['Cache volumes', region.cachevolumes],
            ['Cross-zone replication', region.czr],
            ['CMK w/ managed HSM', region.cmkhsm],
            ['Datastore for AVS', region.avsdatastore],
            ['Double encryption', region.doubleencryption],
            ['File access logs', region.fileaccesslogs],
            ['Large volumes', region.largevolumes]
        ];

        var featureRows = features.map(function(f) {
            var rowBg = f[1] ? '#e8f4fd' : '#f8f9fa';
            return '<tr style="background:' + rowBg + '"><td style="padding:2px 5px;color:#333;border-radius:3px 0 0 3px">' + f[0] + '</td><td style="text-align:center;padding:2px 5px;border-radius:0 3px 3px 0">' + icon(f[1]) + '</td></tr>';
        }).join('');

        var crrRows = targetregions.length > 0
            ? targetregions.map(function(r) {
                return '<div style="background:#f8f9fa;border-radius:3px;padding:2px 5px;margin-bottom:1px;color:#333">' + r + '</div>';
            }).join('')
            : '<div style="color:#888;font-style:italic">None</div>';

        return '<div style="font-family:Segoe UI,-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;color:#333;padding:8px;box-sizing:border-box">' +
            '<div style="font-size:14px;font-weight:600;margin-bottom:1px;color:#0078d4">' + region.longname + '</div>' +
            '<div style="font-size:11px;color:#666;margin-bottom:6px">' + region.shortname + '</div>' +
            '<div style="display:flex;gap:10px">' +
                '<div style="flex:1">' +
                    '<div style="font-size:10px;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;font-weight:600">Features</div>' +
                    '<table style="font-size:10px;border-collapse:separate;border-spacing:0 1px;width:100%"><colgroup><col style="width:auto"><col style="width:20px"></colgroup>' + featureRows + '</table>' +
                '</div>' +
                '<div style="width:100px">' +
                    '<div style="font-size:10px;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;font-weight:600">CRR Targets</div>' +
                    '<div style="font-size:10px">' + crrRows + '</div>' +
                '</div>' +
            '</div>' +
            '</div>';
    }

    /**
     * Generate HTML content for marker icon
     * @param {boolean} isDesaturated - Whether to use desaturated icon
     * @returns {string} HTML content for marker
     */
    function generateMarkerHtml(isDesaturated) {
        var iconUrl = isDesaturated ? MapConfig.ICONS.desaturated : MapConfig.ICONS.normal;
        return "<div style='width:3em;'><img style='width:3em;' src='" + iconUrl + "'></div>";
    }

    /**
     * Toggle or create CRR line to a target region
     * @param {Object} map - Azure Maps map instance
     * @param {Object} sourceRegion - Source region object
     * @param {string} targetShortname - Target region shortname
     * @param {Object} regionLocations - Object mapping shortnames to coordinates
     */
    function toggleCrrLine(map, sourceRegion, targetShortname, regionLocations) {
        var lineName = sourceRegion.shortname + '_' + targetShortname;
        var layerName = lineName + '_layer';

        if (lineLayers[layerName]) {
            // Toggle existing layer visibility
            var existingOptions = lineLayers[layerName].getOptions();
            lineLayers[layerName].setOptions({
                visible: !existingOptions.visible
            });
        } else {
            // Create new line and layer
            var targetLocation = regionLocations[targetShortname];
            if (!targetLocation) {
                console.warn('Target region not found:', targetShortname);
                return;
            }

            dataSources[lineName] = new atlas.source.DataSource(null, { lineMetrics: true });
            map.sources.add(dataSources[lineName]);

            dataSources[lineName].add(new atlas.data.LineString([
                sourceRegion.location,
                targetLocation
            ]));

            lineLayers[layerName] = new atlas.layer.LineLayer(dataSources[lineName], null, {
                visible: true,
                strokeWidth: MapConfig.CRR_LINE_STYLE.strokeWidth,
                strokeGradient: MapConfig.CRR_LINE_STYLE.strokeGradient
            });

            map.layers.add(lineLayers[layerName]);
        }
    }

    /**
     * Create a marker for a region
     * @param {Object} map - Azure Maps map instance
     * @param {Object} region - Region object
     * @param {boolean} isDesaturated - Whether to use desaturated icon
     * @param {Object} regionLocations - Object mapping shortnames to coordinates
     * @returns {Object} Created HtmlMarker
     */
    function createMarker(map, region, isDesaturated, regionLocations) {
        var marker = new atlas.HtmlMarker({
            color: 'DodgerBlue',
            text: '10',
            position: region.location,
            htmlContent: generateMarkerHtml(isDesaturated),
            popup: new atlas.Popup({
                content: generatePopupContent(region),
                pixelOffset: MapConfig.POPUP_STYLE.pixelOffset,
                fillColor: MapConfig.POPUP_STYLE.fillColor
            })
        });

        map.markers.add(marker);
        markers[region.shortname] = marker;

        // Add click event for CRR lines
        map.events.add('click', marker, function() {
            var targetRegions = region.crrregions || [];
            targetRegions.forEach(function(targetShortname) {
                toggleCrrLine(map, region, targetShortname, regionLocations);
            });
        });

        // Add hover events for popup
        map.events.add('mouseenter', marker, function() {
            marker.togglePopup();
        });

        map.events.add('mouseleave', marker, function() {
            marker.togglePopup();
        });

        return marker;
    }

    /**
     * Remove a marker from the map
     * @param {Object} map - Azure Maps map instance
     * @param {string} shortname - Region shortname
     */
    function removeMarker(map, shortname) {
        if (markers[shortname]) {
            map.markers.remove(markers[shortname]);
            delete markers[shortname];
        }
    }

    /**
     * Remove all markers from the map
     * @param {Object} map - Azure Maps map instance
     * @param {Array} regions - Array of regions to remove markers for
     */
    function removeAllMarkers(map, regions) {
        regions.forEach(function(region) {
            removeMarker(map, region.shortname);
        });
    }

    /**
     * Create markers for multiple regions
     * @param {Object} map - Azure Maps map instance
     * @param {Array} regions - Array of region objects
     * @param {boolean} isDesaturated - Whether to use desaturated icon
     * @param {Object} regionLocations - Object mapping shortnames to coordinates
     */
    function createMarkersForRegions(map, regions, isDesaturated, regionLocations) {
        regions.forEach(function(region) {
            createMarker(map, region, isDesaturated, regionLocations);
        });
    }

    /**
     * Get a marker by shortname
     * @param {string} shortname - Region shortname
     * @returns {Object|null} Marker or null if not found
     */
    function getMarker(shortname) {
        return markers[shortname] || null;
    }

    /**
     * Clear all stored references (for cleanup)
     */
    function clearAll() {
        markers = {};
        lineLayers = {};
        dataSources = {};
    }

    // Public API
    return {
        createMarker: createMarker,
        removeMarker: removeMarker,
        removeAllMarkers: removeAllMarkers,
        createMarkersForRegions: createMarkersForRegions,
        getMarker: getMarker,
        clearAll: clearAll,
        generatePopupContent: generatePopupContent
    };
})();
