/**
 * Filter functions for Azure NetApp Files Region Map
 * Provides generic filtering logic to replace duplicated filter functions
 */

var RegionFilters = (function() {
    'use strict';

    /**
     * Filter regions by a boolean property
     * @param {Array} regions - Array of region objects
     * @param {string} property - Property name to filter by
     * @returns {Array} Filtered regions where property === true
     */
    function filterByProperty(regions, property) {
        return regions.filter(function(region) {
            return region[property] === true;
        });
    }

    /**
     * Filter regions by array property having length > 0
     * @param {Array} regions - Array of region objects
     * @param {string} property - Property name (should be an array)
     * @returns {Array} Filtered regions where property.length > 0
     */
    function filterByArrayLength(regions, property) {
        return regions.filter(function(region) {
            return region[property] && region[property].length > 0;
        });
    }

    /**
     * Filter regions by substring match in longname
     * @param {Array} regions - Array of region objects
     * @param {string} substring - Substring to search for in longname
     * @returns {Array} Filtered regions where longname contains substring
     */
    function filterByName(regions, substring) {
        return regions.filter(function(region) {
            return region.longname.indexOf(substring) >= 0;
        });
    }

    /**
     * Apply a filter based on feature configuration
     * @param {Array} regions - Array of region objects
     * @param {Object} featureConfig - Feature configuration from MapConfig.FEATURES
     * @returns {Array} Filtered regions
     */
    function applyFeatureFilter(regions, featureConfig) {
        switch (featureConfig.filterType) {
            case 'boolean':
                return filterByProperty(regions, featureConfig.property);
            case 'array':
                return filterByArrayLength(regions, featureConfig.property);
            case 'substring':
                return filterByName(regions, featureConfig.substring);
            default:
                return regions;
        }
    }

    /**
     * Apply multiple filters based on checkbox states
     * @param {Array} regions - Array of region objects
     * @param {Object} features - Feature configuration object (MapConfig.FEATURES)
     * @param {boolean} isUsGovChecked - Whether US Gov filter is checked (special case)
     * @returns {Array} Filtered regions
     */
    function applyAllFilters(regions, features, isUsGovChecked) {
        var result = regions;

        // Apply US Gov filter first if checked (this is a base filter)
        if (isUsGovChecked) {
            result = filterByName(result, 'US Gov');
        }

        // Apply all other filters
        var filterOrder = MapConfig.getFilterOrder();
        for (var i = 0; i < filterOrder.length; i++) {
            var featureKey = filterOrder[i];
            if (featureKey === 'usgov') continue; // Already handled

            var feature = features[featureKey];
            var checkbox = document.getElementById(feature.checkboxId);

            if (checkbox && checkbox.checked) {
                result = applyFeatureFilter(result, feature);
            }
        }

        return result;
    }

    /**
     * Get count of regions that match a specific feature filter
     * @param {Array} regions - Array of all region objects
     * @param {Object} featureConfig - Feature configuration from MapConfig.FEATURES
     * @returns {number} Count of matching regions
     */
    function getFeatureCount(regions, featureConfig) {
        return applyFeatureFilter(regions, featureConfig).length;
    }

    /**
     * Get regions that are NOT in the displayed list (for desaturated markers)
     * @param {Array} allRegions - All regions
     * @param {Array} displayedRegions - Currently displayed/filtered regions
     * @returns {Array} Regions not in displayed list
     */
    function getExcludedRegions(allRegions, displayedRegions) {
        return allRegions.filter(function(region) {
            return displayedRegions.indexOf(region) === -1;
        });
    }

    // Public API
    return {
        filterByProperty: filterByProperty,
        filterByArrayLength: filterByArrayLength,
        filterByName: filterByName,
        applyFeatureFilter: applyFeatureFilter,
        applyAllFilters: applyAllFilters,
        getFeatureCount: getFeatureCount,
        getExcludedRegions: getExcludedRegions
    };
})();
