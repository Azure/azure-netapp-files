/**
 * Region data for Azure NetApp Files Region Map
 * Loads region data from regions.json
 */

var RegionData = (function() {
    'use strict';

    var regionLocations = null;
    var regions = null;
    var dataLoaded = false;
    var loadPromise = null;

    /**
     * Load region data from JSON file
     */
    function loadData() {
        if (loadPromise) {
            return loadPromise;
        }

        loadPromise = fetch('data/regions.json')
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Failed to load regions.json');
                }
                return response.json();
            })
            .then(function(data) {
                regionLocations = data.regionLocations;
                regions = data.regions;

                // Add location to each region
                regions.forEach(function(region) {
                    region.location = regionLocations[region.shortname];
                });

                dataLoaded = true;
                return data;
            });

        return loadPromise;
    }

    // Public API
    return {
        /**
         * Load region data - must be called before getRegions/getRegionLocations
         * @returns {Promise} Resolves when data is loaded
         */
        load: function() {
            return loadData();
        },

        /**
         * Check if data has been loaded
         * @returns {boolean}
         */
        isLoaded: function() {
            return dataLoaded;
        },

        /**
         * Get all regions (call load() first or use async version)
         * @returns {Array|null}
         */
        getRegions: function() {
            return regions;
        },

        /**
         * Get region locations map (call load() first or use async version)
         * @returns {Object|null}
         */
        getRegionLocations: function() {
            return regionLocations;
        }
    };
})();
