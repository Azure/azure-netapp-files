/**
 * Configuration for Azure NetApp Files Region Map
 * Contains feature definitions, URLs, and map settings
 */

var MapConfig = (function() {
    'use strict';

    // Feature configuration - defines all filterable features
    var FEATURES = {
        crr: {
            property: 'crrregions',
            checkboxId: 'crr',
            countId: 'crrRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/cross-region-replication-introduction#supported-region-pairs',
            filterType: 'array' // filters by array length > 0
        },
        czr: {
            property: 'czr',
            checkboxId: 'czr',
            countId: 'czrRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/cross-zone-replication-introduction#supported-regions',
            filterType: 'boolean'
        },
        arp: {
            property: 'arp',
            checkboxId: 'arp',
            countId: 'arpRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/ransomware-configure#supported-regions',
            filterType: 'boolean'
        },
        avs: {
            property: 'avsdatastore',
            checkboxId: 'avs',
            countId: 'avsRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-vmware/attach-azure-netapp-files-to-azure-vmware-solution-hosts?tabs=azure-portal#supported-regions',
            filterType: 'boolean'
        },
        largevolumes: {
            property: 'largevolumes',
            checkboxId: 'largevolumes',
            countId: 'largevolumesRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/large-volumes-requirements-considerations#supported-regions',
            filterType: 'boolean'
        },
        cmkhsm: {
            property: 'cmkhsm',
            checkboxId: 'cmkhsm',
            countId: 'cmkhsmRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/configure-customer-managed-keys-hardware#supported-regions',
            filterType: 'boolean'
        },
        doubleencryption: {
            property: 'doubleencryption',
            checkboxId: 'doubleencryption',
            countId: 'doubleencryptionRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/double-encryption-at-rest',
            filterType: 'boolean'
        },
        azplacement: {
            property: 'azplacement',
            checkboxId: 'azplacement',
            countId: 'azplacementRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/reliability/availability-zones-service-support',
            filterType: 'boolean'
        },
        fileaccesslogs: {
            property: 'fileaccesslogs',
            checkboxId: 'fileaccesslogs',
            countId: 'fileaccesslogsRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/manage-file-access-logs',
            filterType: 'boolean'
        },
        cachevolumes: {
            property: 'cachevolumes',
            checkboxId: 'cachevolumes',
            countId: 'cacheVolumeRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-network-topologies#supported-regions',
            filterType: 'boolean'
        },
        usgov: {
            property: null, // Special case: filters by longname containing 'US Gov'
            checkboxId: 'usgov',
            countId: 'USGovRegionCount',
            docUrl: 'https://azure.microsoft.com/explore/global-infrastructure/products-by-region/?products=netapp&regions=usgov-non-regional,us-dod-central,us-dod-east,usgov-arizona,usgov-texas,usgov-virginia&rar=true',
            filterType: 'substring',
            substring: 'US Gov'
        }
    };

    // Map settings
    var MAP_SETTINGS = {
        language: 'en-US',
        center: [0, 0],
        zoom: 2,
        renderWorldCopies: false,
        view: 'Auto',
        style: 'grayscale_light',
        subscriptionKey: '7JKG0vOTSryydJexb9CnVwireDc4oGsbfC7XW8eTnrU'
    };

    // Icon URLs
    var ICONS = {
        normal: 'https://azure.github.io/azure-netapp-files/map/anficon.png',
        desaturated: 'https://azure.github.io/azure-netapp-files/map/anficon_gray.png'
    };

    // Documentation URLs
    var URLS = {
        totalRegions: 'https://azure.microsoft.com/explore/global-infrastructure/products-by-region/?products=netapp&regions=all&rar=true'
    };

    // CRR Line styling
    var CRR_LINE_STYLE = {
        strokeWidth: 4,
        strokeGradient: [
            'interpolate',
            ['linear'],
            ['line-progress'],
            0, 'blue',
            0.1, 'royalblue',
            0.4, 'cyan',
            0.6, 'cyan',
            0.9, 'royalblue',
            1, 'blue'
        ]
    };

    // Popup styling
    var POPUP_STYLE = {
        pixelOffset: [0, -50],
        fillColor: '#ffffff'
    };

    // Public API
    return {
        FEATURES: FEATURES,
        MAP_SETTINGS: MAP_SETTINGS,
        ICONS: ICONS,
        URLS: URLS,
        CRR_LINE_STYLE: CRR_LINE_STYLE,
        POPUP_STYLE: POPUP_STYLE,

        // Helper to get feature keys in checkbox order
        getFilterOrder: function() {
            return ['arp', 'crr', 'czr', 'avs', 'largevolumes', 'cmkhsm', 'doubleencryption', 'azplacement', 'fileaccesslogs', 'cachevolumes'];
        }
    };
})();
