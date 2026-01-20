/**
 * Azure NetApp Files Region Map - Main Orchestration
 * Uses modular components: config.js, filters.js, markers.js, regions.js
 */

var ANFMap = (function() {
    'use strict';

    // Private state
    var map = null;
    var controls = [];
    var regionList = [];
    var regionLocations = {};
    var displayedList = [];

    /**
     * Load region data from RegionData module
     */
    function loadRegionData() {
        regionLocations = RegionData.getRegionLocations();
        regionList = RegionData.getRegions();
    }

    /**
     * Update region count displays in the UI
     */
    function updateRegionCounts() {
        var features = MapConfig.FEATURES;

        // Total regions
        var totalEl = document.getElementById('totalRegionCount');
        if (totalEl) {
            totalEl.innerHTML = '<a target="_blank" href="' + MapConfig.URLS.totalRegions + '">' + regionList.length + '</a>';
        }

        // Feature counts
        Object.keys(features).forEach(function(key) {
            var feature = features[key];
            var countEl = document.getElementById(feature.countId);
            if (countEl) {
                var count = RegionFilters.getFeatureCount(regionList, feature);
                countEl.innerHTML = '<a target="_blank" href="' + feature.docUrl + '">' + count + '</a>';
            }
        });
    }

    /**
     * Update the filtered count display
     */
    function updateFilteredCount() {
        var filteredEl = document.getElementById('totalFilteredCount');
        if (filteredEl) {
            filteredEl.innerText = displayedList.length;
        }
    }

    /**
     * Initialize the Azure Map
     */
    function initializeMap() {
        var settings = MapConfig.MAP_SETTINGS;

        map = new atlas.Map('myMap', {
            language: settings.language,
            center: settings.center,
            zoom: settings.zoom,
            renderWorldCopies: settings.renderWorldCopies,
            view: settings.view,
            style: settings.style,
            authOptions: {
                authType: 'subscriptionKey',
                subscriptionKey: settings.subscriptionKey
            }
        });

        // Add map controls
        controls = [
            new atlas.control.ZoomControl(),
            new atlas.control.PitchControl(),
            new atlas.control.CompassControl(),
            new atlas.control.StyleControl()
        ];

        map.controls.add(controls, { position: 'top-right' });
    }

    /**
     * Create initial markers when map is loaded
     */
    function createInitialMarkers() {
        displayedList = regionList.slice(); // Copy all regions
        MarkerManager.createMarkersForRegions(map, displayedList, false, regionLocations);
    }

    /**
     * Update the map based on current filter selections
     */
    function updateMap() {
        // Remove existing markers
        MarkerManager.removeAllMarkers(map, regionList);

        // Check if US Gov filter is active (special base filter)
        var isUsGovChecked = document.getElementById('usgov').checked;

        // Apply all filters
        displayedList = RegionFilters.applyAllFilters(
            regionList,
            MapConfig.FEATURES,
            isUsGovChecked
        );

        // Get desaturated regions (those not in filtered list)
        var desaturatedList = RegionFilters.getExcludedRegions(regionList, displayedList);

        // Create markers (desaturated first so active markers appear on top)
        MarkerManager.createMarkersForRegions(map, desaturatedList, true, regionLocations);
        MarkerManager.createMarkersForRegions(map, displayedList, false, regionLocations);

        // Update filtered count display
        updateFilteredCount();
    }

    /**
     * Initialize the map application
     */
    function init() {
        // Load region data synchronously from module
        loadRegionData();

        // Initialize displayed list to all regions
        displayedList = regionList.slice();

        // Initialize the map
        initializeMap();
        updateRegionCounts();
        updateFilteredCount();

        // Wait for map to be ready before adding markers
        map.events.add('load', function() {
            createInitialMarkers();
        });
    }

    // Public API
    return {
        init: init,
        updateMap: updateMap
    };
})();

/**
 * Panel minimize/restore functions
 */
function minimizePanel() {
    document.getElementById('eventPanel').classList.add('hidden');
    document.getElementById('minimizedPanel').classList.remove('hidden');
}

function restorePanel() {
    document.getElementById('minimizedPanel').classList.add('hidden');
    document.getElementById('eventPanel').classList.remove('hidden');
}

/**
 * Initialize map on page load
 */
function initMap() {
    ANFMap.init();
}

/**
 * Update map when filters change
 */
function updateMap() {
    ANFMap.updateMap();
}
