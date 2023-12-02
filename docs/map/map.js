var map;
var controls;
var displayedList = [];
var regionlocation = {
    australiacentral: [149.1144, -35.3075],
    australiacentral2: [149.1344, -35.3075],
    australiaeast: [151.2094, -33.86],
    australiasoutheast: [144.9631, -37.8136],
    brazilsouth: [-46.633, -23.55],
    brazilsoutheast: [-43.2075, -22.90278],
    canadacentral: [-79.383, 43.653],
    canadaeast: [-71.217, 46.817],
    centralindia: [73.9197, 18.5822],
    centralus: [-93.6208, 41.5908],
    eastasia: [114.188, 22.267],
    eastus: [-79.8164, 37.3719],
    eastus2: [-78.3889, 36.6681],
    francecentral: [2.3730, 46.3772],
    germanynorth: [8.806422, 53.073635],
    germanywestcentral: [8.682127, 50.110924],
    japaneast: [139.77, 35.68],
    japanwest: [135.5022, 34.6939],
    koreacentral: [126.9780, 37.5665],
    koreasouth: [129.0756, 35.1796],
    northcentralus: [-87.6278, 41.8819],
    northeurope: [-6.2597, 53.3478],
    norwayeast: [10.752245, 59.913868],
    norwaywest: [5.733107, 58.969975],
    qatarcentral: [51.439327, 25.551462],
    southafricanorth: [28.21837, -25.73134],
    southcentralus: [-98.5, 29.4167],
    southeastasia: [103.833, 1.283],
    southindia: [80.1636, 12.9822],
    swedencentral: [17.14127, 60.67488],
    switzerlandnorth: [8.564572,47.451542],
    switzerlandwest: [6.143158,46.204391],
    uaecentral: [54.366669, 24.466667],
    uaenorth: [55.316666, 25.266666],
    uksouth: [-0.799, 50.941],
    ukwest: [-3.084, 53.427],
    usgovarizona: [-111.7046, 34.42527],
    usgovvirginia: [-78.39411, 37.623159],
    usgovtexas: [-99.208076, 31.56443],
    westeurope: [4.9, 52.3667],
    westus: [-122.417, 37.783],
    westus2: [-119.852, 47.233],
    westus3: [-112.074036, 33.448376]
};
var regionlist = [
    {
        "shortname": "australiacentral",
        "longname": "Australia Central",
        "location": regionlocation.australiacentral,
        "crrregions": ["australiacentral2"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "australiacentral2",
        "longname": "Australia Central 2",
        "location": regionlocation.australiacentral2,
        "crrregions": ["australiacentral"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "australiaeast",
        "longname": "Australia East",
        "location": regionlocation.australiaeast,
        "crrregions": ["australiasoutheast","southeastasia"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": true
    },
    {
        "shortname": "australiasoutheast",
        "longname": "Australia Southeast",
        "location": regionlocation.australiasoutheast,
        "crrregions": ["australiaeast"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": false
    },
    {
        "shortname": "brazilsouth",
        "longname": "Brazil South",
        "location": regionlocation.brazilsouth,
        "crrregions": ["southcentralus", "brazilsoutheast"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": true
    },
    {
        "shortname": "brazilsoutheast",
        "longname": "Brazil Southeast",
        "location": regionlocation.brazilsoutheast, 
        "crrregions": ["brazilsouth"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false, 
        "backup": false,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "canadacentral",
        "longname": "Canada Central",
        "location": regionlocation.canadacentral,
        "crrregions": ["canadaeast"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": true
    },
    {
        "shortname": "canadaeast",
        "longname": "Canada East",
        "location": regionlocation.canadaeast,
        "crrregions": ["canadacentral"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": false
    },
    {
        "shortname": "centralindia",
        "longname": "Central India",
        "location": regionlocation.centralindia,
        "crrregions": ["southindia"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": true,
        "azplacement": true
    },
    {
        "shortname": "centralus",
        "longname": "Central US",
        "location": regionlocation.centralus,
        "crrregions": ["southcentralus","eastus2"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "eastasia",
        "longname": "East Asia",
        "location": regionlocation.eastasia,
        "crrregions": ["southeastasia"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": true
    },
    {
        "shortname": "eastus",
        "longname": "East US",
        "location": regionlocation.eastus,
        "crrregions": ["westus","westus2","southcentralus","eastus2","westus3"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "eastus2",
        "longname": "East US 2",
        "location": regionlocation.eastus2,
        "crrregions": ["southcentralus","centralus","eastus","northcentralus","westus2"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": true
    },
    {
        "shortname": "francecentral",
        "longname": "France Central",
        "location": regionlocation.francecentral,
        "crrregions": ["germanywestcentral","westeurope"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": true
    },
    {
        "shortname": "germanywestcentral",
        "longname": "Germany West Central",
        "location": regionlocation.germanywestcentral,
        "crrregions": ["uksouth","germanynorth","westeurope","francecentral"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "germanynorth",
        "longname": "Germany North",
        "location": regionlocation.germanynorth,
        "crrregions": ["germanywestcentral"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "japaneast",
        "longname": "Japan East",
        "location": regionlocation.japaneast,
        "crrregions": ["japanwest"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "japanwest",
        "longname": "Japan West",
        "location": regionlocation.japanwest,
        "crrregions": ["japaneast"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "koreacentral",
        "longname": "Korea Central",
        "location": regionlocation.koreacentral,
        "crrregions": ["koreasouth"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "koreasouth",
        "longname": "Korea South",
        "location": regionlocation.koreasouth,
        "crrregions": ["koreacentral"],
        "czr": false,
        "snf": false,
        "snfedit": false,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false,
        "cmk": false,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "northcentralus",
        "longname": "North Central US",
        "location": regionlocation.northcentralus,
        "crrregions": ["eastus2","southcentralus"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": false
    },
    {
        "shortname": "northeurope",
        "longname": "North Europe",
        "location": regionlocation.northeurope,
        "crrregions": ["westeurope"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": true,
        "azplacement": true
    },
    {
        "shortname": "norwayeast",
        "longname": "Norway East",
        "location": regionlocation.norwayeast,
        "crrregions": ["norwaywest"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "norwaywest",
        "longname": "Norway West",
        "location": regionlocation.norwaywest,
        "crrregions": ["norwayeast"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "qatarcentral",
        "longname": "Qatar Central",
        "location": regionlocation.qatarcentral,
        "crrregions": ["westeurope"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "southafricanorth",
        "longname": "South Africa North",
        "location": regionlocation.southafricanorth,
        "crrregions": [],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "southcentralus",
        "longname": "South Central US",
        "location": regionlocation.southcentralus,
        "crrregions": ["centralus","eastus","eastus2","northcentralus","brazilsouth"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "southindia",
        "longname": "South India",
        "location": regionlocation.southindia,
        "crrregions": ["centralindia"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "southeastasia",
        "longname": "Southeast Asia",
        "location": regionlocation.southeastasia,
        "crrregions": ["australiaeast","eastasia"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "swedencentral",
        "longname": "Sweden Central",
        "location": regionlocation.swedencentral,
        "crrregions": [],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "switzerlandnorth",
        "longname": "Switzerland North",
        "location": regionlocation.switzerlandnorth,
        "crrregions": ["switzerlandwest"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "switzerlandwest",
        "longname": "Switzerland West",
        "location": regionlocation.switzerlandwest,
        "crrregions": ["switzerlandnorth"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "uaecentral",
        "longname": "UAE Central",
        "location": regionlocation.uaecentral,
        "crrregions": ["uaenorth"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": true,
        "largevolumes": false,
        "cmk": true,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "uaenorth",
        "longname": "UAE North",
        "location": regionlocation.uaenorth,
        "crrregions": ["uaecentral"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": false,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "uksouth",
        "longname": "UK South",
        "location": regionlocation.uksouth,
        "crrregions": ["ukwest","germanywestcentral"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "ukwest",
        "longname": "UK West",
        "location": regionlocation.ukwest,
        "crrregions": ["uksouth"],
        "czr": false,
        "snf": true,
        "snfedit": false,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "usgovarizona",
        "longname": "US Gov Arizona",
        "location": regionlocation.usgovarizona,
        "crrregions": ["usgovtexas","usgovvirginia"],
        "czr": false,
        "snf": false,
        "snfedit": false,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": false,
        "cmk": false,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "usgovvirginia",
        "longname": "US Gov Virginia",
        "location": regionlocation.usgovvirginia,
        "crrregions": ["usgovtexas","usgovarizona"],
        "czr": true,
        "snf": true,
        "snfedit": false,
        "avsdatastore": true,
        "backup": false,
        "largevolumes": false,
        "cmk": false,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "usgovtexas",
        "longname": "US Gov Texas",
        "location": regionlocation.usgovtexas,
        "crrregions": ["usgovvirginia","usgovarizona"],
        "czr": false,
        "snf": true,
        "snfedit": false,
        "avsdatastore": false,
        "backup": false,
        "largevolumes": false,
        "cmk": false,
        "doubleencryption": false,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "westeurope",
        "longname": "West Europe",
        "location": regionlocation.westeurope,
        "crrregions": ["northeurope","germanywestcentral","francecentral","qatarcentral"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "westus",
        "longname": "West US",
        "location": regionlocation.westus,
        "crrregions": ["eastus"],
        "czr": false,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": false
    },
    {
        "shortname": "westus2",
        "longname": "West US 2",
        "location": regionlocation.westus2,
        "crrregions": ["eastus","eastus2", "westus3"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    },
    {
        "shortname": "westus3",
        "longname": "West US 3",
        "location": regionlocation.westus3,
        "crrregions": ["eastus", "westus2"],
        "czr": true,
        "snf": true,
        "snfedit": true,
        "avsdatastore": true,
        "backup": true,
        "largevolumes": true,
        "cmk": true,
        "doubleencryption": true,
        "standardcool": false,
        "azplacement": true
    }
];

function minimizePanel() {
    document.getElementById("eventPanel").classList.add('hidden');
    document.getElementById("minimizedPanel").classList.remove('hidden');
}

function restorePanel() {
    document.getElementById("minimizedPanel").classList.add('hidden');
    document.getElementById("eventPanel").classList.remove('hidden');
}

var SNFregions = [];
regionlist.forEach(filterSNFregions);
//this function build an array based on which regions have 'snf' set to true
function filterSNFregions(item, index) {
    if (item.snf == true) {
        SNFregions.push(item)
    }
};

var SNFEditregions = [];
regionlist.forEach(filterSNFEditregions);
//this function build an array based on which regions have 'snfedit' set to true
function filterSNFEditregions(item, index) {
    if (item.snfedit == true) {
        SNFEditregions.push(item)
    }
};

var CRRregions = [];
regionlist.forEach(filterCRRregions);
//this function build an array based on which regions have 'crr' set to true
function filterCRRregions(item, index) {
    if (item.crrregions.length > 0) {
        CRRregions.push(item)
    }
};

var CZRregions = [];
regionlist.forEach(filterCZRregions);
//this function build an array based on which regions have 'czr' set to true
function filterCZRregions(item, index) {
    if (item.czr == true) {
        CZRregions.push(item)
    }
};

var AVSregions = [];
regionlist.forEach(filterAVSregions);
//this function build an array based on which regions have 'avs' set to true
function filterAVSregions(item, index) {
    if (item.avsdatastore == true) {
        AVSregions.push(item)
    }
};

var Backupregions = [];
regionlist.forEach(filterBackupregions);
//this function build an array based on which regions have 'backup' set to true
function filterBackupregions(item, index) {
    if (item.backup == true) {
        Backupregions.push(item)
    }
};

var Largevolumesregions = [];
regionlist.forEach(filterLargevolumesregions);
//this function build an array based on which regions have 'US Gov' set to true
function filterLargevolumesregions(item, index) {
    if (item.largevolumes == true) {
        Largevolumesregions.push(item)
    }
};

var CMKregions = [];
regionlist.forEach(filterCMKregions);
//this function build an array based on which regions have 'US Gov' set to true
function filterCMKregions(item, index) {
    if (item.cmk == true) {
        CMKregions.push(item)
    }
};

var DoubleEncryptionregions = [];
regionlist.forEach(filterDoubleEncryptionregions);
//this function build an array based on which regions have 'doubleencryption' set to true
function filterDoubleEncryptionregions(item, index) {
    if (item.doubleencryption == true) {
        DoubleEncryptionregions.push(item)
    }
};

var AZPlacementregions = [];
regionlist.forEach(filterAZPlacementregions);
//this function build an array based on which regions have 'azplacement' set to true
function filterAZPlacementregions(item, index) {
    if (item.azplacement == true) {
        AZPlacementregions.push(item)
    }
};

var Standardcoolregions = [];
regionlist.forEach(filterStandardcoolregions);
//this function build an array based on which regions have 'standardcool' set to true
function filterStandardcoolregions(item, index) {
    if (item.standardcool == true) {
        Standardcoolregions.push(item)
    }
};

var USGovregions = [];
regionlist.forEach(filterUSGovregions);
//this function build an array based on which regions have 'US Gov' set to true
function filterUSGovregions(item, index) {
    const govLabel = 'US Gov';
    if (item.longname.indexOf(govLabel) >= 0) {
        USGovregions.push(item)
    }
};



function initMap() {
    //Initialize a map instance.
    map = new atlas.Map('myMap', {
        language: 'en-US',
        center: [0, 0],
        zoom: 2,
        renderWorldCopies: false, 
        view: "Auto",
        style: "grayscale_light",
        authOptions: {
                    authType: 'subscriptionKey',
                    subscriptionKey: '7JKG0vOTSryydJexb9CnVwireDc4oGsbfC7XW8eTnrU'
                }
    });
    controls = [];
    //Create a zoom control.
    controls.push(new atlas.control.ZoomControl());
    //Create a pitch control and add it to the map.
    controls.push(new atlas.control.PitchControl());
    //Create a compass control and add it to the map.
    controls.push(new atlas.control.CompassControl());
    //Create a style control and add it to the map.
    controls.push(new atlas.control.StyleControl());
    //Add controls to the map.
    map.controls.add(controls, {
        position: "top-right"
    });
        
    displayedList = regionlist;

    document.getElementById("totalRegionCount").innerHTML = '<a target="_blank" href="https://azure.microsoft.com/explore/global-infrastructure/products-by-region/?products=netapp&regions=all&rar=true">' + regionlist.length + '</a>'
    document.getElementById("snfRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-network-topologies#supported-regions">' + SNFregions.length + '</a>'
    document.getElementById("snfEditRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/azure-netapp-files-network-topologies#supported-regions">' + SNFEditregions.length + '</a>'

    document.getElementById("crrRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/cross-region-replication-introduction#supported-region-pairs">' + CRRregions.length + '</a>'
    document.getElementById("czrRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/cross-zone-replication-introduction#supported-regions">' + CZRregions.length + '</a>'
    document.getElementById("azplacementRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/reliability/availability-zones-service-support">' + AZPlacementregions.length + '</a>'

    document.getElementById("avsRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-vmware/attach-azure-netapp-files-to-azure-vmware-solution-hosts?tabs=azure-portal#supported-regions">' + AVSregions.length + '</a>'
    document.getElementById("backupRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/backup-introduction#supported-regions">' + Backupregions.length + '</a>'
    document.getElementById("largevolumesRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/large-volumes-requirements-considerations#supported-regions">' + Largevolumesregions.length + '</a>'
    document.getElementById("cmkRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/configure-customer-managed-keys#supported-regions">' + CMKregions.length + '</a>'
    document.getElementById("doubleencryptionRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/double-encryption-at-rest">' + DoubleEncryptionregions.length + '</a>'
    document.getElementById("standardcoolRegionCount").innerHTML = '<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/cool-access-introduction">' + Standardcoolregions.length + '</a>'

    document.getElementById("USGovRegionCount").innerHTML = '<a target="_blank" href="https://azure.microsoft.com/explore/global-infrastructure/products-by-region/?products=netapp&regions=usgov-non-regional,us-dod-central,us-dod-east,usgov-arizona,usgov-texas,usgov-virginia&rar=true">' + USGovregions.length + '</a>'
    document.getElementById("totalFilteredCount").innerText = displayedList.length

    //Wait until the map resources are ready.
    map.events.add('ready', function () {
        //anfregions = new atlas.source.DataSource();
        //map.sources.add(anfregions);
        
        displayedList.forEach(createhtmlmarker);

        function createhtmlmarker(item, index) {
            var targetregions = item.crrregions;
            window[item.shortname] = new atlas.HtmlMarker({
                color: 'DodgerBlue',
                text: '10',
                position: item.location,
                htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://azure.github.io/azure-netapp-files/map/anficon.png'></div>",
                popup: new atlas.Popup({
                    content: '<div style="padding:10px;color:white"><strong>ANF Region: ' + item.longname + '</strong> (' + item.shortname + ')<br>CRR Targets: ' + targetregions + '<br>cross-zone replication: ' + item.czr + '<br>standard networking: ' + item.snf + '<br>edit standard networking: ' + item.snfedit + '<br>backup: ' + item.backup + '<br>datastore for AVS: ' + item.avsdatastore + '<br>large volumes: ' + item.largevolumes +  '<br>customer-managed keys: ' + item.cmk +  '<br>double encryption: ' + item.doubleencryption +  '<br>standard storage w/ cool access: ' + item.standardcool + '<br>az placement: ' + item.azplacement + '<br>Latitude: ' + item.location[1] + '<br>Longitude: ' + item.location[0] + '</div>',
                    pixelOffset: [0, -50],
                    fillColor: 'rgba(0,0,0,0.6)'
                })
            });
            map.markers.add(window[item.shortname]);
            //Add a click event to toggle the popup.
            map.events.add('click',window[item.shortname], () => {
                window[item.shortname].togglePopup();
                if (targetregions) {
                    targetregions.forEach(targetregion => {
                        console.log(targetregion);
                        linename = item.shortname + '_' + targetregion;
                        layername = linename + '_layer';
                        if (typeof window[layername] != "undefined") {
                            existingoptions = window[layername].getOptions();
                            console.log(existingoptions);
                            if (existingoptions.visible == true) {
                                window[layername].setOptions({visible: false});
                            } else {
                                window[layername].setOptions({visible: true});
                            }
                        } else {
                        window[linename] = new atlas.source.DataSource(null, {lineMetrics: true});
                        map.sources.add(window[linename]);
                        console.log(linename);
                        targetlatlong = regionlocation[targetregion];
                        window[linename].add(new atlas.data.LineString([item.location, targetlatlong]));
                        //Create a line layer to render the line to the map.
                        window[layername] = new atlas.layer.LineLayer(window[linename], null, {
                            visible: true,
                            strokeWidth: 4,
                            strokeGradient: [
                                'interpolate',
                                ['linear'],
                                ['line-progress'],
                                0, "blue",
                                0.1, "royalblue",
                                0.4, "cyan",
                                0.6, "cyan",
                                0.9, "royalblue",
                                1, "blue"
                            ]
                        });
                        map.layers.add(window[layername]);
                    }
                    });
                
                }
            });
            map.events.add('mouseenter',window[item.shortname], () => {  
                window[item.shortname].togglePopup();
            });
            map.events.add('mouseleave',window[item.shortname], () => {
                window[item.shortname].togglePopup();
            });
        }
    });
}

function updateMap() {
    //remove all markers
    displayedList.forEach(element => {
        map.markers.remove(window[element.shortname])
    });
    displayedList = [];
    if (document.getElementById("snf").checked) {
        displayedList = SNFregions;
    } else {
        displayedList = regionlist;
    }
    if (document.getElementById("crr").checked) {
        CRRregions = [];
        displayedList.forEach(filterCRRregions);
        displayedList = CRRregions;
    }
    if (document.getElementById("czr").checked) {
        CZRregions = [];
        displayedList.forEach(filterCZRregions);
        displayedList = CZRregions;
    }
    if (document.getElementById("snfedit").checked) {
        SNFEditregions = [];
        displayedList.forEach(filterSNFEditregions);
        displayedList = SNFEditregions;
    }
    if (document.getElementById("avs").checked) {
        AVSregions = [];
        displayedList.forEach(filterAVSregions);
        displayedList = AVSregions;
    }
    if (document.getElementById("backup").checked) {
        Backupregions = [];
        displayedList.forEach(filterBackupregions);
        displayedList = Backupregions;
    }
    if (document.getElementById("largevolumes").checked) {
        Largevolumesregions = [];
        displayedList.forEach(filterLargevolumesregions);
        displayedList = Largevolumesregions;
    }
    if (document.getElementById("cmk").checked) {
        CMKregions = [];
        displayedList.forEach(filterCMKregions);
        displayedList = CMKregions;
    }
    if (document.getElementById("doubleencryption").checked) {
        DoubleEncryptionregions = [];
        displayedList.forEach(filterDoubleEncryptionregions);
        displayedList = DoubleEncryptionregions;
    }
    if (document.getElementById("standardcool").checked) {
        Standardcoolregions = [];
        displayedList.forEach(filterStandardcoolregions);
        displayedList = Standardcoolregions;
    }
    if (document.getElementById("azplacement").checked) {
        AZPlacementregions = [];
        displayedList.forEach(filterAZPlacementregions);
        displayedList = AZPlacementregions;
    }
    if (document.getElementById("usgov").checked) {
        USGovregions = [];
        displayedList.forEach(filterUSGovregions);
        displayedList = USGovregions;
    }

    document.getElementById("totalFilteredCount").innerText = displayedList.length

    desaturatedList = [];

    regionlist.forEach(element => {
        if (!displayedList.includes(element)) {
            desaturatedList.push(element)
        }
    });

    desaturatedList.forEach(createDesaturatedhtmlmarker);
    displayedList.forEach(createhtmlmarker);
    

    function createhtmlmarker(item, index) {
        var targetregions = item.crrregions;
        window[item.shortname] = new atlas.HtmlMarker({
            color: 'DodgerBlue',
            text: '10',
            position: item.location,
            htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://azure.github.io/azure-netapp-files/map/anficon.png'></div>",
            popup: new atlas.Popup({
                content: '<div style="padding:10px;color:white"><strong>ANF Region: ' + item.longname + '</strong> (' + item.shortname + ')<br>CRR Targets: ' + targetregions + '<br>cross-zone replication: ' + item.czr + '<br>standard networking: ' + item.snf + '<br>edit standard networking: ' + item.snfedit + '<br>backup: ' + item.backup + '<br>datastore for AVS: ' + item.avsdatastore + '<br>large volumes: ' + item.largevolumes +  '<br>customer-managed keys: ' + item.cmk +  '<br>double encryption: ' + item.doubleencryption +  '<br>standard storage w/ cool access: ' + item.standardcool + '<br>az placement: ' + item.azplacement + '<br>Latitude: ' + item.location[1] + '<br>Longitude: ' + item.location[0] + '</div>',
                pixelOffset: [0, -50],
                fillColor: 'rgba(0,0,0,0.6)'
            })
        });
        map.markers.add(window[item.shortname]);
        //Add a click event to toggle the popup.
        map.events.add('click',window[item.shortname], () => {
            //window[item.shortname].togglePopup();
            if (targetregions) {
                targetregions.forEach(targetregion => {
                    linename = item.shortname + '_' + targetregion;
                    layername = linename + '_layer';
                    if (typeof window[layername] != "undefined") {
                        console.log("exists!");
                        existingoptions = window[layername].getOptions();
                        console.log(existingoptions);
                        if (existingoptions.visible == true) {
                            window[layername].setOptions({visible: false});
                        } else {
                            window[layername].setOptions({visible: true});
                        }
                    } else {
                    window[linename] = new atlas.source.DataSource(null, {lineMetrics: true});
                    map.sources.add(window[linename]);
                    console.log(linename);
                    var targetlatlong = regionlocation[targetregion];
                    window[linename].add(new atlas.data.LineString([item.location, targetlatlong]));
                    //Create a line layer to render the line to the map.
                    window[layername] = new atlas.layer.LineLayer(window[linename], null, {
                        visible: true,
                        strokeWidth: 4,
                        strokeGradient: [
                            'interpolate',
                            ['linear'],
                            ['line-progress'],
                            0, "blue",
                            0.1, "royalblue",
                            0.4, "cyan",
                            0.6, "cyan",
                            0.9, "royalblue",
                            1, "blue"
                        ]
                    });
                    map.layers.add(window[layername]);
                }
                });
            
            }
        });
        map.events.add('mouseenter',window[item.shortname], () => {  
            window[item.shortname].togglePopup();
        });
        map.events.add('mouseleave',window[item.shortname], () => {
            window[item.shortname].togglePopup();
        });
    }

    function createDesaturatedhtmlmarker(item, index) {
        var targetregions = item.crrregions;
        window[item.shortname] = new atlas.HtmlMarker({
            color: 'DodgerBlue',
            text: '10',
            position: item.location,
            htmlContent: "<div style='width:3em;'><img style='width:3em;' src='https://azure.github.io/azure-netapp-files/map/anficon_gray.png'></div>",
            popup: new atlas.Popup({
                content: '<div style="padding:10px;color:white"><strong>ANF Region: ' + item.longname + '</strong> (' + item.shortname + ')<br>CRR Targets: ' + targetregions + '<br>cross-zone replication: ' + item.czr + '<br>standard networking: ' + item.snf + '<br>edit standard networking: ' + item.snfedit + '<br>backup: ' + item.backup + '<br>datastore for AVS: ' + item.avsdatastore + '<br>large volumes: ' + item.largevolumes +  '<br>customer-managed keys: ' + item.cmk +  '<br>double encryption: ' + item.doubleencryption +  '<br>standard storage w/ cool access: ' + item.standardcool + '<br>az placement: ' + item.azplacement + '<br>Latitude: ' + item.location[1] + '<br>Longitude: ' + item.location[0] + '</div>',
                pixelOffset: [0, -50],
                fillColor: 'rgba(0,0,0,0.6)'
            })
        });
        map.markers.add(window[item.shortname]);
        //Add a click event to toggle the popup.
        map.events.add('click',window[item.shortname], () => {
            //window[item.shortname].togglePopup();
            if (targetregions) {
                targetregions.forEach(targetregion => {
                    linename = item.shortname + '_' + targetregion;
                    layername = linename + '_layer';
                    if (typeof window[layername] != "undefined") {
                        console.log("exists!");
                        existingoptions = window[layername].getOptions();
                        console.log(existingoptions);
                        if (existingoptions.visible == true) {
                            window[layername].setOptions({visible: false});
                        } else {
                            window[layername].setOptions({visible: true});
                        }
                    } else {
                    window[linename] = new atlas.source.DataSource(null, {lineMetrics: true});
                    map.sources.add(window[linename]);
                    console.log(linename);
                    var targetlatlong = regionlocation[targetregion];
                    window[linename].add(new atlas.data.LineString([item.location, targetlatlong]));
                    //Create a line layer to render the line to the map.
                    window[layername] = new atlas.layer.LineLayer(window[linename], null, {
                        visible: true,
                        strokeWidth: 4,
                        strokeGradient: [
                            'interpolate',
                            ['linear'],
                            ['line-progress'],
                            0, "blue",
                            0.1, "royalblue",
                            0.4, "cyan",
                            0.6, "cyan",
                            0.9, "royalblue",
                            1, "blue"
                        ]
                    });
                    map.layers.add(window[layername]);
                }
                });
            
            }
        });
        map.events.add('mouseenter',window[item.shortname], () => {  
            window[item.shortname].togglePopup();
        });
        map.events.add('mouseleave',window[item.shortname], () => {
            window[item.shortname].togglePopup();
        });
    }
};
