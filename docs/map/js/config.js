/**
 * Configuration for Azure NetApp Files Region Map
 * Contains feature definitions, URLs, and map settings
 */

var MapConfig = (function() {
    'use strict';

    // Feature configuration - defines all filterable features
    var FEATURES = {
        arp: {
            property: 'arp',
            label: 'Advanced ransomware protection',
            shortLabel: 'Ransomware protection',
            checkboxId: 'arp',
            countId: 'arpRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/ransomware-configure#supported-regions',
            filterType: 'boolean',
            showInPopup: true
        },
        azplacement: {
            property: 'azplacement',
            label: 'Availability zone placement',
            shortLabel: 'AZ placement',
            checkboxId: 'azplacement',
            countId: 'azplacementRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/reliability/availability-zones-service-support',
            filterType: 'boolean',
            showInPopup: true
        },
        cachevolumes: {
            property: 'cachevolumes',
            label: 'Cache volumes',
            shortLabel: 'Cache volumes',
            checkboxId: 'cachevolumes',
            countId: 'cacheVolumeRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-network-topologies#supported-regions',
            filterType: 'boolean',
            showInPopup: true
        },
        crr: {
            property: 'crrregions',
            label: 'Cross-region replication',
            shortLabel: 'Cross-region replication',
            checkboxId: 'crr',
            countId: 'crrRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/cross-region-replication-introduction#supported-region-pairs',
            filterType: 'array',
            showInPopup: false // CRR shown separately in popup
        },
        czr: {
            property: 'czr',
            label: 'Cross-zone replication',
            shortLabel: 'Cross-zone replication',
            checkboxId: 'czr',
            countId: 'czrRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/cross-zone-replication-introduction#supported-regions',
            filterType: 'boolean',
            showInPopup: true
        },
        cmkhsm: {
            property: 'cmkhsm',
            label: 'CMK w/ managed HSM',
            shortLabel: 'CMK w/ managed HSM',
            checkboxId: 'cmkhsm',
            countId: 'cmkhsmRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/configure-customer-managed-keys-hardware#supported-regions',
            filterType: 'boolean',
            showInPopup: true
        },
        avs: {
            property: 'avsdatastore',
            label: 'Datastore for AVS',
            shortLabel: 'Datastore for AVS',
            checkboxId: 'avs',
            countId: 'avsRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-vmware/attach-azure-netapp-files-to-azure-vmware-solution-hosts?tabs=azure-portal#supported-regions',
            filterType: 'boolean',
            showInPopup: true
        },
        doubleencryption: {
            property: 'doubleencryption',
            label: 'Double encryption at rest',
            shortLabel: 'Double encryption',
            checkboxId: 'doubleencryption',
            countId: 'doubleencryptionRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/double-encryption-at-rest',
            filterType: 'boolean',
            showInPopup: true
        },
        elasticzrs: {
            property: 'elasticzrs',
            label: 'Elastic zone-redundant storage',
            shortLabel: 'Elastic ZRS',
            checkboxId: 'elasticzrs',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/elastic-zone-redundant-concept',
            filterType: 'boolean',
            showInPopup: true
        },
        fileaccesslogs: {
            property: 'fileaccesslogs',
            label: 'File access logs',
            shortLabel: 'File access logs',
            checkboxId: 'fileaccesslogs',
            countId: 'fileaccesslogsRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/manage-file-access-logs',
            filterType: 'boolean',
            showInPopup: true
        },
        largevolumes: {
            property: 'largevolumes',
            label: 'Large volumes',
            shortLabel: 'Large volumes',
            checkboxId: 'largevolumes',
            countId: 'largevolumesRegionCount',
            docUrl: 'https://learn.microsoft.com/azure/azure-netapp-files/large-volumes-requirements-considerations#supported-regions',
            filterType: 'boolean',
            showInPopup: true
        },
        usgov: {
            property: null, // Special case: filters by longname containing 'US Gov'
            label: 'US Gov',
            shortLabel: 'US Gov',
            checkboxId: 'usgov',
            countId: 'USGovRegionCount',
            docUrl: 'https://azure.microsoft.com/explore/global-infrastructure/products-by-region/?products=netapp&regions=usgov-non-regional,us-dod-central,us-dod-east,usgov-arizona,usgov-texas,usgov-virginia&rar=true',
            filterType: 'substring',
            substring: 'US Gov',
            showInPopup: false
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

        // Helper to get feature keys in display order (matches HTML)
        getFilterOrder: function() {
            return ['arp', 'azplacement', 'cachevolumes', 'crr', 'czr', 'cmkhsm', 'avs', 'doubleencryption', 'fileaccesslogs', 'largevolumes', 'usgov'];
        },

        // Helper to get features that should appear in popup
        getPopupFeatures: function() {
            var result = [];
            var order = this.getFilterOrder();
            for (var i = 0; i < order.length; i++) {
                var key = order[i];
                if (FEATURES[key] && FEATURES[key].showInPopup) {
                    result.push(FEATURES[key]);
                }
            }
            return result;
        }
    };
})();
