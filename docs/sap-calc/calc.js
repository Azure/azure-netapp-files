!function(T,l,y){var S=T.location,u="script",k="instrumentationKey",D="ingestionendpoint",C="disableExceptionTracking",E="ai.device.",I="toLowerCase",b="crossOrigin",w="POST",e="appInsightsSDK",t=y.name||"appInsights";(y.name||T[e])&&(T[e]=t);var n=T[t]||function(d){var g=!1,f=!1,m={initialize:!0,queue:[],sv:"4",version:2,config:d};function v(e,t){var n={},a="Browser";return n[E+"id"]=a[I](),n[E+"type"]=a,n["ai.operation.name"]=S&&S.pathname||"_unknown_",n["ai.internal.sdkVersion"]="javascript:snippet_"+(m.sv||m.version),{time:function(){var e=new Date;function t(e){var t=""+e;return 1===t.length&&(t="0"+t),t}return e.getUTCFullYear()+"-"+t(1+e.getUTCMonth())+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+":"+t(e.getUTCMinutes())+":"+t(e.getUTCSeconds())+"."+((e.getUTCMilliseconds()/1e3).toFixed(3)+"").slice(2,5)+"Z"}(),iKey:e,name:"Microsoft.ApplicationInsights."+e.replace(/-/g,"")+"."+t,sampleRate:100,tags:n,data:{baseData:{ver:2}}}}var h=d.url||y.src;if(h){function a(e){var t,n,a,i,r,o,s,c,p,l,u;g=!0,m.queue=[],f||(f=!0,t=h,s=function(){var e={},t=d.connectionString;if(t)for(var n=t.split(";"),a=0;a<n.length;a++){var i=n[a].split("=");2===i.length&&(e[i[0][I]()]=i[1])}if(!e[D]){var r=e.endpointsuffix,o=r?e.location:null;e[D]="https://"+(o?o+".":"")+"dc."+(r||"services.visualstudio.com")}return e}(),c=s[k]||d[k]||"",p=s[D],l=p?p+"/v2/track":config.endpointUrl,(u=[]).push((n="SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details)",a=t,i=l,(o=(r=v(c,"Exception")).data).baseType="ExceptionData",o.baseData.exceptions=[{typeName:"SDKLoadFailed",message:n.replace(/\./g,"-"),hasFullStack:!1,stack:n+"\nSnippet failed to load ["+a+"] -- Telemetry is disabled\nHelp Link: https://go.microsoft.com/fwlink/?linkid=2128109\nHost: "+(S&&S.pathname||"_unknown_")+"\nEndpoint: "+i,parsedStack:[]}],r)),u.push(function(e,t,n,a){var i=v(c,"Message"),r=i.data;r.baseType="MessageData";var o=r.baseData;return o.message='AI (Internal): 99 message:"'+("SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details) ("+n+")").replace(/\"/g,"")+'"',o.properties={endpoint:a},i}(0,0,t,l)),function(e,t){if(JSON){var n=T.fetch;if(n&&!y.useXhr)n(t,{method:w,body:JSON.stringify(e),mode:"cors"});else if(XMLHttpRequest){var a=new XMLHttpRequest;a.open(w,t),a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify(e))}}}(u,l))}function i(e,t){f||setTimeout(function(){!t&&m.core||a()},500)}var e=function(){var n=l.createElement(u);n.src=h;var e=y[b];return!e&&""!==e||"undefined"==n[b]||(n[b]=e),n.onload=i,n.onerror=a,n.onreadystatechange=function(e,t){"loaded"!==n.readyState&&"complete"!==n.readyState||i(0,t)},n}();y.ld<0?l.getElementsByTagName("head")[0].appendChild(e):setTimeout(function(){l.getElementsByTagName(u)[0].parentNode.appendChild(e)},y.ld||0)}try{m.cookie=l.cookie}catch(p){}function t(e){for(;e.length;)!function(t){m[t]=function(){var e=arguments;g||m.queue.push(function(){m[t].apply(m,e)})}}(e.pop())}var n="track",r="TrackPage",o="TrackEvent";t([n+"Event",n+"PageView",n+"Exception",n+"Trace",n+"DependencyData",n+"Metric",n+"PageViewPerformance","start"+r,"stop"+r,"start"+o,"stop"+o,"addTelemetryInitializer","setAuthenticatedUserContext","clearAuthenticatedUserContext","flush"]),m.SeverityLevel={Verbose:0,Information:1,Warning:2,Error:3,Critical:4};var s=(d.extensionConfig||{}).ApplicationInsightsAnalytics||{};if(!0!==d[C]&&!0!==s[C]){method="onerror",t(["_"+method]);var c=T[method];T[method]=function(e,t,n,a,i){var r=c&&c(e,t,n,a,i);return!0!==r&&m["_"+method]({message:e,url:t,lineNumber:n,columnNumber:a,error:i}),r},d.autoExceptionInstrumented=!0}return m}(y.cfg);(T[t]=n).queue&&0===n.queue.length&&n.trackPageView({})}(window,document,{
src: "https://az416426.vo.msecnd.net/scripts/b/ai.2.min.js", // The SDK URL Source
//name: "appInsights", // Global SDK Instance name defaults to "appInsights" when not supplied
//ld: 0, // Defines the load delay (in ms) before attempting to load the sdk. -1 = block page load and add to head. (default) = 0ms load after timeout,
//useXhr: 1, // Use XHR instead of fetch to report failures (if available),
//crossOrigin: "anonymous", // When supplied this will add the provided value as the cross origin attribute on the script tag 
cfg: { // Application Insights Configuration
    instrumentationKey: "8f84391c-82e5-4ef1-bf89-3e15ae7d10fc"
    /* ...Other Configuration Options... */
}});


let standard_region_rates = {
    "centralus": 0.14746,
    "eastus": 0.14746,
    "eastus2": 0.14746,
    "northcentralus": 0.17666,
    "southcentralus": 0.14746,
    "westus": 0.14746,
    "westus2": 0.14746,
    "westus3": 0.14746,
    "usgovarizona": 0.17739,
    "usgovvirginia": 0.18396,
    "usgovtexas": 0.18396,
    "uksouth": 0.16206,
    "ukwest": 0.16206,
    "uaecentral": 0.23068,
    "uaenorth": 0.21024,
    "switzerlandnorth": 0.16206,
    "switzerlandwest": 0.21097,
    "swedencentral": 0.14746,
    "swedensouth": 0.19199,
    "qatarcentral": 0.21097,
    "norwayeast": 0.16206,
    "norwaywest": 0.16206,
    "koreacentral": 0.19856,
    "koreasouth": 0.18396,
    "japaneast": 0.17666,
    "japanwest": 0.22922,
    "centralindia": 0.16279,
    "southindia": 0.20805,
    "germanynorth": 0.23652,
    "germanywestcentral": 0.17739,
    "francecentral": 0.18396,
    "northeurope": 0.14746,
    "westeurope": 0.14746,
    "canadacentral": 0.16279,
    "canadaeast": 0.17739,
    "brazilsouth": 0.29419, 
    "australiacentral": 0.21316,
    "australiacentral2": 0.17666,
    "australiaeast": 0.16279,
    "australiasoutheast": 0.19199,
    "eastasia": 0.22776,
    "southeastasia": 0.14746,
    "southafricanorth": 0.21535
};

let premium_region_rates = {
    "centralus": 0.29419,
    "eastus": 0.29419,
    "eastus2": 0.29419,
    "northcentralus": 0.35332,
    "southcentralus": 0.29419,
    "westus": 0.29419,
    "westus2": 0.29419,
    "westus3": 0.29419,
    "usgovarizona": 0.35332,
    "usgovvirginia": 0.36792,
    "usgovtexas": 0.36792,
    "uksouth": 0.32339,
    "ukwest": 0.32339,
    "uaecentral": 0.45917,
    "uaenorth": 0.42121,
    "switzerlandnorth": 0.32339,
    "switzerlandwest": 0.42048,
    "swedencentral": 0.29419,
    "swedensouth": 0.38252,
    "qatarcentral": 0.42048,
    "norwayeast": 0.32339,
    "norwaywest": 0.32339,
    "koreacentral": 0.39712,
    "koreasouth": 0.36792,
    "japaneast": 0.35259,
    "japanwest": 0.45625,
    "centralindia": 0.32412,
    "southindia": 0.41537,
    "germanynorth": 0.47085,
    "germanywestcentral": 0.35332,
    "francecentral": 0.36792,
    "northeurope": 0.29419,
    "westeurope": 0.29419,
    "canadacentral": 0.32412,
    "canadaeast": 0.35332,
    "brazilsouth": 0.58838,
    "australiacentral": 0.42705,
    "australiacentral2": 0.35332,
    "australiaeast": 0.32412,
    "australiasoutheast": 0.38252,
    "eastasia": 0.45625,
    "southeastasia": 0.29419,
    "southafricanorth": 0.42924
};

let ultra_region_rates = {
    "centralus": 0.39274,
    "eastus": 0.39274,
    "eastus2": 0.39274,
    "northcentralus": 0.47158,
    "southcentralus": 0.39274,
    "westus": 0.39274,
    "westus2": 0.39274,
    "westus3": 0.39274,
    "usgovarizona": 0.47158,
    "usgovvirginia": 0.49056,
    "usgovtexas": 0.49129,
    "uksouth": 0.43143,
    "ukwest": 0.43143,
    "uaecentral": 0.6132,
    "uaenorth": 0.56137,
    "switzerlandnorth": 0.43216,
    "switzerlandwest": 0.5621,
    "swedencentral": 0.39274,
    "swedensouth": 0.51027,
    "qatarcentral": 0.56137,
    "norwayeast": 0.43216,
    "norwaywest": 0.43216,
    "koreacentral": 0.52998,
    "koreasouth": 0.49129,
    "japaneast": 0.47085,
    "japanwest": 0.60882,
    "centralindia": 0.43216,
    "southindia": 0.55407,
    "germanynorth": 0.62853,
    "germanywestcentral": 0.47158,
    "francecentral": 0.49129,
    "northeurope": 0.39274,
    "westeurope": 0.39274,
    "canadacentral": 0.43216,
    "canadaeast": 0.47158,
    "brazilsouth": 0.7884,
    "australiacentral": 0.5694,
    "australiacentral2": 0.47158,
    "australiaeast": 0.43143,
    "australiasoutheast": 0.511,
    "eastasia": 0.60882,
    "southeastasia": 0.39274,
    "southafricanorth": 0.57305
};

let backup_region_rates = {
    "centralus": 0.062,
    "eastus": 0.05,
    "eastus2": 0.05,
    "northcentralus": 0.06,
    "southcentralus": 0.06,
    "westus": 0.065,
    "westus2": 0.05,
    "westus3": 0.05,
    "usgovarizona": 0.063,
    "usgovvirginia": 0.063,
    "usgovtexas": 0.063,
    "uksouth": 0.063,
    "ukwest": 0.066,
    "uaecentral": 0.086,
    "uaenorth": 0.066,
    "switzerlandnorth": 0.075,
    "switzerlandwest": 0.083,
    "swedencentral": 0.05,
    "swedensouth": 0.05,
    "qatarcentral": 0.072,
    "norwayeast": 0.072,
    "norwaywest": 0.078,
    "koreacentral": 0.068,
    "koreasouth": 0.063,
    "japaneast": 0.073,
    "japanwest": 0.078,
    "centralindia": 0.07,
    "southindia": 0.076,
    "germanynorth": 0.07,
    "germanywestcentral": 0.065,
    "francecentral": 0.063,
    "northeurope": 0.06,
    "westeurope": 0.065,
    "canadacentral": 0.06,
    "canadaeast": 0.06,
    "brazilsouth": 0.1,
    "australiacentral": 0.073,
    "australiacentral2": 0.06,
    "australiaeast": 0.073,
    "australiasoutheast": 0.07,
    "eastasia": 0.05,
    "southeastasia": 0.065,
    "southafricanorth": 0.05
};

let kpiTargets = {
    "data": 400,
    "log": 250,
    "shared": 50
}

let kpiMultipliers = {
    "PROD": 1,
    "PRE-PROD": 0.8,
    "QAS": 0.5,
    "DEV": 0.25,
    "TST": 0.25,
    "SBX": 0.10,
    "DR": 0.01,
    "OTHER": 2
}

let dataProtectionSettings = {
    "PROD": {"dataDailyChange": 50, "sharedDailyChange": 2, "snapRetention": 5, "backupRetention": 30},
    "PRE-PROD": {"dataDailyChange": 30, "sharedDailyChange": 2, "snapRetention": 5, "backupRetention": 30},
    "QAS": {"dataDailyChange": 20, "sharedDailyChange": 2, "snapRetention": 5, "backupRetention": 30},
    "DEV": {"dataDailyChange": 10, "sharedDailyChange": 1, "snapRetention": 5, "backupRetention": 0},
    "TST": {"dataDailyChange": 10, "sharedDailyChange": 1, "snapRetention": 5, "backupRetention": 0},
    "SBX": {"dataDailyChange": 10, "sharedDailyChange": 1, "snapRetention": 0, "backupRetention": 0},
    "DR": {"dataDailyChange": 30, "sharedDailyChange": 2, "snapRetention": 5, "backupRetention": 0},
    "OTHER": {"dataDailyChange": 10, "sharedDailyChange": 2, "snapRetention": 5, "backupRetention": 0}
}

let runningLogicalTotal = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningAddSnapshotTotal = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningTotalCapacity = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningPerformance = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningSnapshotSpace = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningAnfCosts = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningAnfBackupBaselineCapacity = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningAnfBackupDeltaCapacity = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningAnfBackupTotalCapacity = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let runningAnfBackupCosts = {
    "P1": 0.0,
    "P2": 0.0,
    "P3": 0.0,
    "P4": 0.0,
    "P5": 0.0,
    "P6": 0.0,
    "P7": 0.0,
    "P8": 0.0,
    "P9": 0.0
}

let poolGroupRegions = {
    "P1": "eastus",
    "P2": "eastus",
    "P3": "eastus",
    "P4": "eastus",
    "P5": "eastus",
    "P6": "eastus",
    "P7": "eastus",
    "P8": "eastus",
    "P9": "eastus"
}

let masterInput = [];
let inputId = 0;

function resetTables() {
    document.getElementById("warningMessageStorageCosts").classList = ["d-none"];
    let tbodyRef = document.getElementById('anfVolumeTCO').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = "";
    tbodyRef = document.getElementById('poolGroup-requirements').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = "";
    tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = "";
    tbodyRef = document.getElementById('anfBackupTable').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = "";
    runningLogicalTotal = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningAddSnapshotTotal = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningTotalCapacity = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningPerformance = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningSnapshotSpace = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
    
    runningAnfCosts = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }

    runningAnfBackupCosts = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }

    runningAnfBackupBaselineCapacity = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }

    runningAnfBackupDeltaCapacity = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }

    runningAnfBackupTotalCapacity = {
        "P1": 0.0,
        "P2": 0.0,
        "P3": 0.0,
        "P4": 0.0,
        "P5": 0.0,
        "P6": 0.0,
        "P7": 0.0,
        "P8": 0.0,
        "P9": 0.0
    }
}

function validateInput(element) {
    // get the values from the form
    switch(element) {
        case "sys-sid":
            var sysSid = document.getElementById("sys-sid").value;
            if(sysSid.length === 3){
                document.getElementById("sys-sid").style.borderColor = "";
                return true;
            }else{
                document.getElementById("sys-sid").style.borderColor = "red";
                return false;
            }
            break;
        case "sys-description":
            var sysDescription = document.getElementById("sys-description").value;
            if(sysDescription.length > 0){
                document.getElementById("sys-description").style.borderColor = "";
                return true;
            }else{
                document.getElementById("sys-description").style.borderColor = "red";
                return false;
            }
            break;
        case "sys-ram":
            var sysRamSize = document.getElementById("sys-ram").value;
            if(Number.isInteger(Number(sysRamSize)) && Number(sysRamSize) > 0){
                if(Number.isInteger(Number(sysRamSize)) && Number(sysRamSize) > 102400){
                    obj = document.getElementById("warningMessage");
                    obj.classList.remove("invisible");
                    document.getElementById("warningMessage").innerHTML = '&nbsp;<small class="fs-small text-secondary"><i class="bi text-danger bi-info-circle-fill"></i>&nbsp;RAM size exceeds maximum size of 100 TiB (102,400 GiB)</small>';
                    document.getElementById("sys-ram").style.borderColor = "red";
                    return false;
                }else if(Number.isInteger(Number(sysRamSize)) && Number(sysRamSize) > 12288){
                    obj = document.getElementById("warningMessage");
                    obj.classList.remove("invisible");
                    document.getElementById("warningMessage").innerHTML = '&nbsp;<small class="fs-small text-secondary"><i class="bi text-warning bi-info-circle-fill"></i>&nbsp;Consider using <a href="https://techcommunity.microsoft.com/t5/running-sap-applications-on-the/using-azure-netapp-files-avg-for-sap-hana-to-deploy-hana-with/ba-p/3742747" target="_blank">SAP HANA multiple partitions / multiple volumes</a> for very large systems.</small>';
                    obj = document.getElementById("sys-ram");
                    obj.classList.add("bg-warning");
                    document.getElementById("sys-ram").style.borderColor = "";
                    return true;
                }else{
                    obj = document.getElementById("warningMessage");
                    obj.classList = ["invisible"];
                    document.getElementById("warningMessage").innerHTML = '.';
                    obj = document.getElementById("sys-ram");
                    obj.classList.remove("bg-warning");
                    document.getElementById("sys-ram").style.borderColor = "";
                    return true;
                }

            }else{
                document.getElementById("sys-ram").style.borderColor = "red";
                return false;
            }
            break;
            case "sys-secondary-perf":
            var sysSecondaryPerf = document.getElementById("sys-secondary-perf").value;
            if(Number.isInteger(Number(sysSecondaryPerf)) && Number(sysSecondaryPerf) > -1 && Number(sysSecondaryPerf) <= 100){
                document.getElementById("sys-secondary-perf").style.borderColor = "";
                return true;
            }else{
                document.getElementById("sys-secondary-perf").style.borderColor = "red";
                return false;
            }
            break;
        case "vol-sid":
            var volSid = document.getElementById("vol-sid").value;
            if(volSid.length === 3){
                document.getElementById("vol-sid").style.borderColor = "";
                return true;
            }else{
                document.getElementById("vol-sid").style.borderColor = "red";
                return false;
            }
            break;
        case "vol-description":
            var volDescription = document.getElementById("vol-description").value;
            if(volDescription.length > 0){
                document.getElementById("vol-description").style.borderColor = "";
                return true;
            }else{
                document.getElementById("vol-description").style.borderColor = "red";
                return false;
            }
            break;
        case "vol-size":
            var volSize = document.getElementById("vol-size").value;
            if(Number.isInteger(Number(volSize)) && Number(volSize) > 0){
                if(Number.isInteger(Number(volSize)) && Number(volSize) > 102400){
                    obj = document.getElementById("warningMessageVolume");
                    obj.classList.remove("invisible");
                    document.getElementById("warningMessageVolume").innerHTML = '&nbsp;<small class="fs-small text-secondary"><i class="bi text-danger bi-info-circle-fill"></i>&nbsp;Volume size exceeds maximum size of 100 TiB (102,400 GiB)</small>';
                    document.getElementById("vol-size").style.borderColor = "red";
                    return false;
                }else{
                    obj = document.getElementById("warningMessageVolume");
                    obj.classList = ["invisible"];
                    document.getElementById("warningMessage").innerHTML = '.';
                    document.getElementById("vol-size").style.borderColor = "";
                return true;
                }
            }else{
                document.getElementById("vol-size").style.borderColor = "red";
                return false;
            }
            break;
        case "vol-tPut":
            var volTput = document.getElementById("vol-tPut").value;
            if(Number.isInteger(Number(volTput)) && Number(volTput) > 0){
                document.getElementById("vol-tPut").style.borderColor = "";
                return true;
            }else{
                document.getElementById("vol-tPut").style.borderColor = "red";
                return false;
            }
            break;
        case "vol-changeRate":
            var volChangeRate = document.getElementById("vol-changeRate").value;
            if(Number.isInteger(Number(volChangeRate)) && Number(volChangeRate) > -1 && Number(volChangeRate) <= 100){
                document.getElementById("vol-changeRate").style.borderColor = "";
                return true;
            }else{
                document.getElementById("vol-changeRate").style.borderColor = "red";
                return false;
            }
            break;
        case "vol-snapshotRet":
            var volSnapshotRet = document.getElementById("vol-snapshotRet").value;
            if(Number.isInteger(Number(volSnapshotRet)) && Number(volSnapshotRet) > -1){
                document.getElementById("vol-snapshotRet").style.borderColor = "";
                return true;
            }else{
                document.getElementById("vol-snapshotRet").style.borderColor = "red";
                return false;
            }
            break;
        case "vol-backupRet":
            var volSnapshotRet = document.getElementById("vol-backupRet").value;
            if(Number.isInteger(Number(volSnapshotRet)) && Number(volSnapshotRet) > -1){
                document.getElementById("vol-backupRet").style.borderColor = "";
                return true;
            }else{
                document.getElementById("vol-backupRet").style.borderColor = "red";
                return false;
            }
            break;
    }
}

function addSystem(inputJson){
    let invalidInputs = 0;
    if(arguments.length == 0){
        // get the values from the form
        if(validateInput("sys-sid")){
            var sysSid = document.getElementById("sys-sid").value;
        }else{
            invalidInputs++;
        }
        if(validateInput("sys-description")){
            var sysDescription = document.getElementById("sys-description").value;
        }else{
            invalidInputs++;
        }
        if(validateInput("sys-secondary-perf")){
            var sysSecondaryPerf = document.getElementById("sys-secondary-perf").value;
        }else{
            invalidInputs++;
        }
        if(validateInput("sys-ram")){
            var sysRamSize = document.getElementById("sys-ram").value;

        }else{
            invalidInputs++;
        }
        var sysEnv = document.getElementById("sys-env").value;
        var sysHA = document.getElementById("sys-ha").value;
        var sysSecondaryPerf = document.getElementById("sys-secondary-perf").value;
        var sysHostCount = document.getElementById("host-count").value;
        var sysPool = document.getElementById("sys-pool").value;
        var sysIncludeLog = document.getElementById("sys-includelog").value;
        if(invalidInputs > 0){
            return;
        }else{
            var form = document.getElementById("addSystemForm");
            form.reset();
            let obj = document.getElementById("warningMessage");
            obj.classList = ["invisible"];
            document.getElementById("warningMessage").innerHTML = '.';
            obj = document.getElementById("sys-ram");
            obj.classList.remove("bg-warning");
            document.getElementById("sys-ram").style.borderColor = "";
        }
    }else{
        // get the values from the json
        var sysSid = inputJson.inputSid;
        var sysDescription = inputJson.inputDescription;
        var sysRamSize = inputJson.inputRamSize;
        var sysEnv = inputJson.inputEnv;
        var sysHA = inputJson.inputHA;
        var sysSecondaryPerf = inputJson.inputSecondaryPerf;
        var sysHostCount = inputJson.inputHostCount;
        var sysPool = inputJson.inputPool;
        if(inputJson.inputIncludeLog) {
            var sysIncludeLog = inputJson.inputIncludeLog
        }else{
            var sysIncludeLog = 1
        }
    };

    // add to input json for export
    inputObject = {
        "inputId": inputId,
        "inputType": "system",
        "inputSid": sysSid,
        "inputDescription": sysDescription,
        "inputRamSize": sysRamSize,
        "inputEnv": sysEnv,
        "inputHA": sysHA,
        "inputSecondaryPerf": sysSecondaryPerf,
        "inputHostCount": sysHostCount,
        "inputPool": sysPool,
        "inputIncludeLog": sysIncludeLog
    };

    
    masterInput.push(inputObject);
    

    // if they select ha, we process the entire list twice, one for primary zone and one for secondary zone
    for (let ha = 1; ha <= sysHA; ha++) {

        if(ha == 2) {
            sidDisplayed = sysSid + "-HA";
            var dataPerf = kpiTargets["data"] * kpiMultipliers[sysEnv] * (sysSecondaryPerf/100);
            var logPerf = kpiTargets["log"] * kpiMultipliers[sysEnv] * (sysSecondaryPerf/100);
            var sharedPerf = kpiTargets["shared"] * kpiMultipliers[sysEnv] * (sysSecondaryPerf/100);
        }else{
            sidDisplayed = sysSid;
            var dataPerf = kpiTargets["data"] * kpiMultipliers[sysEnv];
            var logPerf = kpiTargets["log"] * kpiMultipliers[sysEnv];
            var sharedPerf = kpiTargets["shared"] * kpiMultipliers[sysEnv];
        }

        for (let host = 1; host <= sysHostCount; host++) {
        
            // calculate
            let dataGiB = sysRamSize * 1.0;
            if(dataGiB < 100){
                dataGiB=100;
            }
            let dataFreeSpace = dataGiB / 2;
            let dataDailyChangeRate = Number(eval('dataProtectionSettings["' + sysEnv + '"].dataDailyChange'));
            let dataSnapshotRetentionDays = Number(eval('dataProtectionSettings["' + sysEnv + '"].snapRetention'));
            let dataBackupRetentionDays = Number(eval('dataProtectionSettings["' + sysEnv + '"].backupRetention'));
            let dataSnapshotSize = (dataGiB / 2) * (dataDailyChangeRate / 100) * dataSnapshotRetentionDays;
            let dataAddSnapshotSpace = Math.max(dataSnapshotSize - dataFreeSpace, 0);
            let dataTotalSpace = dataGiB + dataAddSnapshotSpace;
            let dataBackupBaselineCapacity = 0;
            if(dataBackupRetentionDays > 0){
                dataBackupBaselineCapacity = parseFloat(dataGiB)/2;
            }
            let dataBackupDeltaCapacity = dataBackupBaselineCapacity * parseFloat(dataDailyChangeRate / 100) * dataBackupRetentionDays;
            let dataBackupTotalCapacity = dataBackupBaselineCapacity + dataBackupDeltaCapacity;

            // add to running totals
            runningLogicalTotal[sysPool] += dataGiB;
            runningAddSnapshotTotal[sysPool] += dataAddSnapshotSpace;
            runningTotalCapacity[sysPool] += dataTotalSpace;
            runningPerformance[sysPool] += dataPerf;
            runningSnapshotSpace[sysPool] += dataSnapshotSize;
            runningAnfBackupBaselineCapacity[sysPool] += dataBackupBaselineCapacity;
            runningAnfBackupDeltaCapacity[sysPool] += dataBackupDeltaCapacity;
            runningAnfBackupTotalCapacity[sysPool] += dataBackupTotalCapacity;

            // create new row in the volume table, data
            var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
            var dataRow = tbodyRef.insertRow();

            // create new cells in the new row
            var dataRowSID = dataRow.insertCell(0);
            var dataRowDescription = dataRow.insertCell(1);
            var dataRowEnv = dataRow.insertCell(2);
            var dataRowPool = dataRow.insertCell(3);
            var dataRowType = dataRow.insertCell(4);
            var dataRowHost = dataRow.insertCell(5);
            var dataRowLogical = dataRow.insertCell(6);
            var dataRowSnapshotSize = dataRow.insertCell(7);
            var dataRowFreeSpace = dataRow.insertCell(8);
            var dataRowAddSnapshot = dataRow.insertCell(9);
            var dataRowRequiredCapacity = dataRow.insertCell(10);
            var dataRowRequiredPerformance = dataRow.insertCell(11);
            var dataRowDailyChangeRate = dataRow.insertCell(12);
            var dataRowSnapshotRetentionDays = dataRow.insertCell(13);
            var dataRowBackupRetentionDays = dataRow.insertCell(14);
            var dataRowDelete = dataRow.insertCell(15);

            dataRowDescription.innerHTML = sysDescription;
            dataRowSID.innerHTML = sidDisplayed;
            dataRowEnv.innerHTML = sysEnv;
            dataRowPool.innerHTML = sysPool;
            dataRowType.innerHTML = "data";
            dataRowHost.innerHTML = host;
            dataRowLogical.innerHTML = dataGiB.toFixed(0);
            dataRowAddSnapshot.innerHTML = dataAddSnapshotSpace.toFixed(0);
            dataRowRequiredCapacity.innerHTML = dataTotalSpace.toFixed(0);
            dataRowRequiredPerformance.innerHTML = dataPerf;
            dataRowDailyChangeRate.innerHTML = dataDailyChangeRate;
            dataRowSnapshotRetentionDays.innerHTML = dataSnapshotRetentionDays;
            dataRowBackupRetentionDays.innerHTML = dataBackupRetentionDays;
            dataRowSnapshotSize.innerHTML = dataSnapshotSize.toFixed(0);
            dataRowFreeSpace.innerHTML = dataFreeSpace;
            dataRowDelete.innerHTML = '<div class="dropdown"><a type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-x"></i></a><div class="bg-danger dropdown-menu"><div class="container" style="width: 100%"><span class="text-nowrap text-white">Delete entire system?&nbsp;&nbsp;<button onclick="deleteRecord(' + inputId + ')" type="button" class="btn btn-light btn-sm">Confirm</button></span></div></div></div>';
            
        }

        if(sysIncludeLog == 1){
            for (let host = 1; host <= sysHostCount; host++) {

            // calculate
            if(sysRamSize <= 1024){
                var logGiB = sysRamSize / 2;
            }else{
                var logGiB = Math.min(sysRamSize * 1.0, 512);
            }
            if(logGiB < 100){
                logGiB=100;
            }
            
            let logFreeSpace = 0;
            let logDailyChangeRate = 0;
            let logSnapshotRetentionDays = 0;
            let logSnapshotSize = 0;
            let logAddSnapshotSpace = 0;
            let logTotalSpace = logGiB + logAddSnapshotSpace;

            // add to running totals
            runningLogicalTotal[sysPool] += logGiB;
            runningAddSnapshotTotal[sysPool] += logAddSnapshotSpace;
            runningTotalCapacity[sysPool] += logTotalSpace;
            runningPerformance[sysPool] += logPerf;
            runningSnapshotSpace[sysPool] += logSnapshotSize;

            // create new row in the volume table, data
            var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
            var logRow = tbodyRef.insertRow();

            // create new cells in the new row
            var logRowSID = logRow.insertCell(0);
            var logRowDescription = logRow.insertCell(1);
            var logRowEnv = logRow.insertCell(2);
            var logRowPool = logRow.insertCell(3);
            var logRowType = logRow.insertCell(4);
            var logRowHost = logRow.insertCell(5);
            var logRowLogical = logRow.insertCell(6);
            var logRowSnapshotSize = logRow.insertCell(7);
            var logRowFreeSpace = logRow.insertCell(8);
            var logRowAddSnapshot = logRow.insertCell(9);
            var logRowRequiredCapacity = logRow.insertCell(10);
            var logRowRequiredPerformance = logRow.insertCell(11);
            var logRowDailyChangeRate = logRow.insertCell(12);
            var logRowSnapshotRetentionDays = logRow.insertCell(13);
            var logRowBackupRetentionDays = logRow.insertCell(14);
            
            
            var logRowDelete = logRow.insertCell(15);

            logRowDescription.innerHTML = sysDescription;
            logRowSID.innerHTML = sidDisplayed;
            logRowEnv.innerHTML = sysEnv;
            logRowPool.innerHTML = sysPool;
            logRowType.innerHTML = "log";
            logRowHost.innerHTML = host;
            logRowLogical.innerHTML = logGiB.toFixed(0);
            logRowAddSnapshot.innerHTML = logAddSnapshotSpace.toFixed(0);
            logRowRequiredCapacity.innerHTML = logTotalSpace.toFixed(0);
            logRowRequiredPerformance.innerHTML = logPerf;
            logRowDailyChangeRate.innerHTML = logDailyChangeRate;
            logRowSnapshotRetentionDays.innerHTML = logSnapshotRetentionDays;
            logRowBackupRetentionDays.innerHTML = "n/a"
            logRowSnapshotSize.innerHTML = logSnapshotSize.toFixed(0);
            logRowFreeSpace.innerHTML = logFreeSpace.toFixed(0);
            logRowDelete.innerHTML = '<div class="dropdown"><a type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-x"></i></a><div class="bg-danger dropdown-menu"><div class="container" style="width: 100%"><span class="text-nowrap text-white">Delete entire system?&nbsp;&nbsp;<button onclick="deleteRecord(' + inputId + ')" type="button" class="btn btn-light btn-sm">Confirm</button></span></div></div></div>';
            }
        }

        // calculate
        let sharedGiB = Math.min(sysRamSize * 1.0, 1024);
        if(sharedGiB < 100){
            sharedGiB=100;
        }
        let sharedFreeSpace = 0;
        let sharedDailyChangeRate = Number(eval('dataProtectionSettings["' + sysEnv + '"].sharedDailyChange'));
        let sharedSnapshotRetentionDays = Number(eval('dataProtectionSettings["' + sysEnv + '"].snapRetention'));
        let sharedBackupRetentionDays = Number(eval('dataProtectionSettings["' + sysEnv + '"].backupRetention'));
        let sharedSnapshotSize = (sharedGiB) * (sharedDailyChangeRate / 100) * sharedSnapshotRetentionDays;
        let sharedAddSnapshotSpace = Math.max(sharedSnapshotSize - sharedFreeSpace, 0);
        let sharedTotalSpace = sharedGiB + sharedAddSnapshotSpace;
        let sharedBackupBaselineCapacity = 0;
            if(sharedBackupRetentionDays > 0){
                sharedBackupBaselineCapacity = parseFloat(sharedGiB);
            }
        let sharedBackupDeltaCapacity = parseFloat(sharedGiB) * parseFloat(sharedDailyChangeRate / 100) * sharedBackupRetentionDays;
        let sharedBackupTotalCapacity = sharedBackupBaselineCapacity + sharedBackupDeltaCapacity;

        // add to running totals
        runningLogicalTotal[sysPool] += sharedGiB;
        runningAddSnapshotTotal[sysPool] += sharedAddSnapshotSpace;
        runningTotalCapacity[sysPool] += sharedTotalSpace;
        runningPerformance[sysPool] += sharedPerf;
        runningSnapshotSpace[sysPool] += sharedSnapshotSize;
        runningAnfBackupBaselineCapacity[sysPool] += sharedBackupBaselineCapacity;
        runningAnfBackupDeltaCapacity[sysPool] += sharedBackupDeltaCapacity;
        runningAnfBackupTotalCapacity[sysPool] += sharedBackupTotalCapacity;

        // create new row in the volume table, data
        var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
        var sharedRow = tbodyRef.insertRow();

        // create new cells in the new row
        var sharedRowSID = sharedRow.insertCell(0);
        var sharedRowDescription = sharedRow.insertCell(1);
        var sharedRowEnv = sharedRow.insertCell(2);
        var sharedRowPool = sharedRow.insertCell(3);
        var sharedRowType = sharedRow.insertCell(4);
        var sharedRowHost = sharedRow.insertCell(5);
        var sharedRowLogical = sharedRow.insertCell(6);
        var sharedRowSnapshotSize = sharedRow.insertCell(7);
        var sharedRowFreeSpace = sharedRow.insertCell(8);
        var sharedRowAddSnapshot = sharedRow.insertCell(9);
        var sharedRowRequiredCapacity = sharedRow.insertCell(10);
        var sharedRowRequiredPerformance = sharedRow.insertCell(11);
        var sharedRowDailyChangeRate = sharedRow.insertCell(12);
        var sharedRowSnapshotRetentionDays = sharedRow.insertCell(13);
        var sharedRowBackupRetentionDays = sharedRow.insertCell(14);
        
        
        var sharedRowDelete = sharedRow.insertCell(15);

        sharedRowDescription.innerHTML = sysDescription;
        sharedRowSID.innerHTML = sidDisplayed;
        sharedRowEnv.innerHTML = sysEnv;
        sharedRowPool.innerHTML = sysPool;
        sharedRowType.innerHTML = "shared";
        sharedRowHost.innerHTML = "n/a";
        sharedRowLogical.innerHTML = sharedGiB.toFixed(0);
        sharedRowAddSnapshot.innerHTML = sharedAddSnapshotSpace.toFixed(0);
        sharedRowRequiredCapacity.innerHTML = sharedTotalSpace.toFixed(0);
        sharedRowRequiredPerformance.innerHTML = sharedPerf;
        sharedRowDailyChangeRate.innerHTML = sharedDailyChangeRate;
        sharedRowSnapshotRetentionDays.innerHTML = sharedSnapshotRetentionDays;
        sharedRowBackupRetentionDays.innerHTML = sharedBackupRetentionDays;
        sharedRowSnapshotSize.innerHTML = sharedSnapshotSize.toFixed(0);
        sharedRowFreeSpace.innerHTML = sharedFreeSpace.toFixed(0);
        sharedRowDelete.innerHTML = '<div class="dropdown"><a type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-x"></i></a><div class="bg-danger dropdown-menu"><div class="container" style="width: 100%"><span class="text-nowrap text-white">Delete entire system?&nbsp;&nbsp;<button onclick="deleteRecord(' + inputId + ')" type="button" class="btn btn-light btn-sm">Confirm</button></span></div></div></div>';

    }
    // update the pool requirements table
    inputId++;
    updatePoolRequirementsTable();
}

function addVolume(inputJson) {
    let invalidInputs = 0;
    if(arguments.length == 0){
    // get the values from the form
    
        if(validateInput("vol-sid")){
            var volSid = document.getElementById("vol-sid").value;
        }else{
            invalidInputs++;
        }
        if(validateInput("vol-description")){
            var volDescription = document.getElementById("vol-description").value;
        }else{
            invalidInputs++;
        }
        if(validateInput("vol-size")){
            var volSize = document.getElementById("vol-size").value;
        }else{
            invalidInputs++;
        }
        if(validateInput("vol-tPut")){
            var volThroughput = document.getElementById("vol-tPut").value;
        }else{
            invalidInputs++;
        }
        if(validateInput("vol-changeRate")){
            var volDailyChangeRate = Number(document.getElementById("vol-changeRate").value);
        }else{
            invalidInputs++;
        }
        if(validateInput("vol-snapshotRet")){
            var volSnapshotRetention = Number(document.getElementById("vol-snapshotRet").value);
        }else{
            invalidInputs++;
        }
        if(validateInput("vol-backupRet")){
            var volBackupRetention = Number(document.getElementById("vol-backupRet").value);
        }else{
            invalidInputs++;
        }

        var volType = document.getElementById("vol-type").value;
        var volPool = document.getElementById("vol-pool").value;
        
        if(invalidInputs > 0){
            return;
        }else{
            var form = document.getElementById("addVolumeForm");
            form.reset();
        }
    }else{
        var volSid = inputJson["inputSid"];
        var volDescription = inputJson["inputDescription"];
        var volSize = inputJson["inputVolSize"];
        var volThroughput = inputJson["inputThroughput"];
        var volType = inputJson["inputVolType"];
        var volPool = inputJson["inputPool"];
        var volDailyChangeRate = inputJson["inputDailyChangeRate"];
        var volSnapshotRetention = inputJson["inputSnapshotRetention"];
        var volBackupRetention = inputJson["inputBackupRetention"];
    }
    // add to input json for export
    inputObject = {
        "inputId": inputId,
        "inputType": "volume",
        "inputSid": volSid,
        "inputDescription": volDescription,
        "inputVolSize": volSize,
        "inputThroughput": volThroughput,
        "inputVolType": volType,
        "inputPool": volPool,
        "inputDailyChangeRate": volDailyChangeRate,
        "inputSnapshotRetention": volSnapshotRetention,
        "inputBackupRetention": volBackupRetention
    };

    masterInput.push(inputObject);
    
    // calculate
    let volGiB = parseFloat(volSize);
    if(volGiB < 100){
        volGiB=100;
    }
    let volPerf = parseFloat(volThroughput);
    let volSnapshotRetentionDays = parseFloat(volSnapshotRetention);
    let volSnapshotSize = (volGiB) * (volDailyChangeRate / 100) * volSnapshotRetentionDays;
    let volAddSnapshotSpace = Math.max(volSnapshotSize, 0);
    let volTotalSpace = parseFloat(volGiB) + parseFloat(volAddSnapshotSpace);
    let volBackupBaselineCapacity = 0;
            if(volBackupRetention > 0){
                volBackupBaselineCapacity = parseFloat(volGiB);
            }
    let volBackupDeltaCapacity = parseFloat(volGiB) * parseFloat(volDailyChangeRate / 100) * volBackupRetention;
    let volBackupTotalCapacity = volBackupBaselineCapacity + volBackupDeltaCapacity;

    // add to running totals
    runningLogicalTotal[volPool] += volGiB;
    runningAddSnapshotTotal[volPool] += volAddSnapshotSpace;
    runningTotalCapacity[volPool] += volTotalSpace;
    runningPerformance[volPool] += volPerf;
    runningSnapshotSpace[volPool] += volSnapshotSize;
    runningAnfBackupBaselineCapacity[volPool] += volBackupBaselineCapacity;
    runningAnfBackupDeltaCapacity[volPool] += volBackupDeltaCapacity;
    runningAnfBackupTotalCapacity[volPool] += volBackupTotalCapacity;

    // create new row in the volume table, data
    var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
    var volRow = tbodyRef.insertRow();

    // create new cells in the new row
    var volRowSID = volRow.insertCell(0);
    var volRowDescription = volRow.insertCell(1);
    var volRowEnv = volRow.insertCell(2);
    var volRowPool = volRow.insertCell(3);
    var volRowType = volRow.insertCell(4);
    var volRowHost = volRow.insertCell(5);
    var volRowLogical = volRow.insertCell(6);
    var volRowSnapshotSize = volRow.insertCell(7);
    var volRowFreeSpace = volRow.insertCell(8);
    var volRowAddSnapshot = volRow.insertCell(9);
    var volRowRequiredCapacity = volRow.insertCell(10);
    var volRowRequiredPerformance = volRow.insertCell(11);
    var volRowDailyChangeRate = volRow.insertCell(12);
    var volRowSnapshotRetentionDays = volRow.insertCell(13);
    var volRowBackupRetentionDays = volRow.insertCell(14);
    var volRowDelete = volRow.insertCell(15);

    volRowDescription.innerHTML = volDescription;
    volRowSID.innerHTML = volSid;
    volRowEnv.innerHTML = volType;
    volRowPool.innerHTML = volPool;
    volRowType.innerHTML = "";
    volRowHost.innerHTML = "";
    volRowLogical.innerHTML = volGiB.toFixed(0);
    volRowAddSnapshot.innerHTML = volAddSnapshotSpace.toFixed(0);
    volRowRequiredCapacity.innerHTML = volTotalSpace.toFixed(0);
    volRowRequiredPerformance.innerHTML = volPerf;
    volRowDailyChangeRate.innerHTML = volDailyChangeRate;
    volRowSnapshotRetentionDays.innerHTML = volSnapshotRetentionDays;
    volRowBackupRetentionDays.innerHTML = volBackupRetention;
    volRowSnapshotSize.innerHTML = volSnapshotSize.toFixed(0);
    volRowFreeSpace.innerHTML = "0";
    volRowDelete.innerHTML = '<div class="dropdown"><a type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-x"></i></a><div class="bg-danger dropdown-menu"><div class="container" style="width: 100%"><span class="text-nowrap text-white">Delete single volume?&nbsp;&nbsp;<button onclick="deleteRecord(' + inputId + ')" type="button" class="btn btn-light btn-sm">Confirm</button></span></div></div></div>';
    
    inputId++;
    // update the pool requirements table
    updatePoolRequirementsTable();
}

function updatePoolRequirementsTable() {
    var tbodyRef = document.getElementById('poolGroup-requirements').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = '';
    for (const [key, value] of Object.entries(runningLogicalTotal)) {
        if (runningTotalCapacity[key] > 0) {
            var poolGroupRow = tbodyRef.insertRow();
            var poolGroupRowPool = poolGroupRow.insertCell(0);
            var poolGroupRowLogical = poolGroupRow.insertCell(1);
            var poolGroupRowAddSnapshot = poolGroupRow.insertCell(2);
            var poolGroupRowRequiredCapacity = poolGroupRow.insertCell(3);
            var poolGroupRowRequiredPerformance = poolGroupRow.insertCell(4);
            var poolGroupRowSnapshotSize = poolGroupRow.insertCell(5);
            poolGroupRowPool.innerHTML = key;
            poolGroupRowLogical.innerHTML = (runningLogicalTotal[key]/1024).toFixed(2);
            poolGroupRowAddSnapshot.innerHTML = (runningAddSnapshotTotal[key]/1024).toFixed(2);
            poolGroupRowRequiredCapacity.innerHTML = (runningTotalCapacity[key]/1024).toFixed(2);
            poolGroupRowRequiredPerformance.innerHTML = runningPerformance[key].toFixed(2);
            poolGroupRowSnapshotSize.innerHTML = (runningSnapshotSpace[key]/1024).toFixed(2); 
        }
    }
    updatePoolAnfTcoTable();
    updatePoolAnfBackupTable();
}

function updatePoolAnfTcoTable() {
    totalAnfCost = 0;
    totalAnfCapacity = 0;
    var tbodyRef = document.getElementById('anfVolumeTCO').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = '';
    for (const [key, value] of Object.entries(runningLogicalTotal)) {
        if (runningTotalCapacity[key] > 0) {
            ceilTiBCapacity = Math.ceil(runningTotalCapacity[key] / 1024);
            standardTiBNeededForPerformance = Math.ceil(runningPerformance[key] / 16);
            premiumTiBNeededForPerformance = Math.ceil(runningPerformance[key] / 64);
            ultraTiBNeededForPerformance = Math.ceil(runningPerformance[key] / 128);
            if(standardTiBNeededForPerformance > ceilTiBCapacity){
                standardCost = standardTiBNeededForPerformance * 1024 * standard_region_rates[poolGroupRegions[key]];
                standardSizedForPerformance = true;
                standardDisplayedCapacity = standardTiBNeededForPerformance;
            }else{
                standardCost = ceilTiBCapacity * 1024 * standard_region_rates[poolGroupRegions[key]];
                standardSizedForPerformance = false;
                standardDisplayedCapacity = ceilTiBCapacity;
            }
            if(premiumTiBNeededForPerformance > ceilTiBCapacity){
                premiumCost = premiumTiBNeededForPerformance * 1024 * premium_region_rates[poolGroupRegions[key]];
                premiumSizedForPerformance = true;
                premiumDisplayedCapacity = premiumTiBNeededForPerformance;
            }else{
                premiumCost = ceilTiBCapacity * 1024 * premium_region_rates[poolGroupRegions[key]];
                premiumSizedForPerformance = false;
                premiumDisplayedCapacity = ceilTiBCapacity;
            }
            if(ultraTiBNeededForPerformance > ceilTiBCapacity){
                ultraCost = ultraTiBNeededForPerformance * 1024 * ultra_region_rates[poolGroupRegions[key]];
                ultraSizedForPerformance = true;
                ultraDisplayedCapacity = ultraTiBNeededForPerformance;
            }else{
                ultraCost = ceilTiBCapacity * 1024 * ultra_region_rates[poolGroupRegions[key]];
                ultraSizedForPerformance = false;
                ultraDisplayedCapacity = ceilTiBCapacity;
            }

            //build Standard row
            var anfTcoRow = tbodyRef.insertRow();
            var anfTcoRowPool = anfTcoRow.insertCell(0);
            var anfTcoRowServiceLevel = anfTcoRow.insertCell(1);
            var anfTcoRowRegion = anfTcoRow.insertCell(2);
            var anfTcoRowCapacity = anfTcoRow.insertCell(3);
            var anfTcoRowCost = anfTcoRow.insertCell(4);
            var anfTcoRowSizing = anfTcoRow.insertCell(5);
            var anfTcoRowExcessCapacity = anfTcoRow.insertCell(6);
            var anfTcoRowExcessPerformance = anfTcoRow.insertCell(7);
            anfTcoRow.id = key + "-standard";
            anfTcoRowPool.innerHTML = key;
            anfTcoRowServiceLevel.innerHTML = "Standard";
            anfTcoRowRegion.innerHTML = poolGroupRegions[key];
            anfTcoRowCapacity.innerHTML = standardDisplayedCapacity;
            anfTcoRowCost.innerHTML = standardCost.toFixed(2);
            if(standardSizedForPerformance == true){
                anfTcoRowSizing.innerHTML = "Performance";
            }else{
                anfTcoRowSizing.innerHTML = "Capacity";
            }
            anfTcoRowExcessCapacity.innerHTML = (standardDisplayedCapacity - (runningTotalCapacity[key] / 1024)).toFixed(2);
            anfTcoRowExcessPerformance.innerHTML = (standardDisplayedCapacity * 16) - runningPerformance[key];
            //build Premium row
            var anfTcoRow = tbodyRef.insertRow();
            var anfTcoRowPool = anfTcoRow.insertCell(0);
            var anfTcoRowServiceLevel = anfTcoRow.insertCell(1);
            var anfTcoRowRegion = anfTcoRow.insertCell(2);
            var anfTcoRowCapacity = anfTcoRow.insertCell(3);
            var anfTcoRowCost = anfTcoRow.insertCell(4);
            var anfTcoRowSizing = anfTcoRow.insertCell(5);
            var anfTcoRowExcessCapacity = anfTcoRow.insertCell(6);
            var anfTcoRowExcessPerformance = anfTcoRow.insertCell(7);
            anfTcoRow.id = key + "-premium";
            anfTcoRowPool.innerHTML = key;
            anfTcoRowServiceLevel.innerHTML = "Premium";
            anfTcoRowRegion.innerHTML = poolGroupRegions[key];
            anfTcoRowCapacity.innerHTML = premiumDisplayedCapacity;
            anfTcoRowCost.innerHTML = premiumCost.toFixed(2);
            if(premiumSizedForPerformance == true){
                anfTcoRowSizing.innerHTML = "Performance";
            }else{
                anfTcoRowSizing.innerHTML = "Capacity";
            }
            anfTcoRowExcessCapacity.innerHTML = (premiumDisplayedCapacity - (runningTotalCapacity[key] / 1024)).toFixed(2);
            anfTcoRowExcessPerformance.innerHTML = (premiumDisplayedCapacity * 64) - runningPerformance[key];
            //build Ultra row
            var anfTcoRow = tbodyRef.insertRow();
            var anfTcoRowPool = anfTcoRow.insertCell(0);
            var anfTcoRowServiceLevel = anfTcoRow.insertCell(1);
            var anfTcoRowRegion = anfTcoRow.insertCell(2);
            var anfTcoRowCapacity = anfTcoRow.insertCell(3);
            var anfTcoRowCost = anfTcoRow.insertCell(4);
            var anfTcoRowSizing = anfTcoRow.insertCell(5);
            var anfTcoRowExcessCapacity = anfTcoRow.insertCell(6);
            var anfTcoRowExcessPerformance = anfTcoRow.insertCell(7);
            anfTcoRow.id = key + "-ultra";
            anfTcoRowPool.innerHTML = key;
            anfTcoRowServiceLevel.innerHTML = "Ultra";
            anfTcoRowRegion.innerHTML = poolGroupRegions[key];
            anfTcoRowCapacity.innerHTML = ultraDisplayedCapacity;
            anfTcoRowCost.innerHTML = ultraCost.toFixed(2);
            if(ultraSizedForPerformance == true){
                anfTcoRowSizing.innerHTML = "Performance";
            }else{
                anfTcoRowSizing.innerHTML = "Capacity";
            }
            anfTcoRowExcessCapacity.innerHTML = (ultraDisplayedCapacity - (runningTotalCapacity[key] / 1024)).toFixed(2);
            anfTcoRowExcessPerformance.innerHTML = (ultraDisplayedCapacity * 128) - runningPerformance[key];

            if(Math.min(standardCost, premiumCost, ultraCost) == standardCost){
                var anfTcoRowHightlight = document.getElementById(key + "-standard");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                if(standardDisplayedCapacity > 500){
                    tds[3].innerHTML += '&nbsp;<i class="bi text-warning bi-info-circle-fill"></i>'
                    document.getElementById("warningMessageStorageCosts").innerHTML = '<small class="fs-small text-secondary"><i class="bi text-warning bi-info-circle-fill"></i>&nbsp;Pools larger than 500 TiB will need to be split into multiple capacity pools.</small>'
                    document.getElementById("warningMessageStorageCosts").classList = [];
                }else{
                    document.getElementById("warningMessageStorageCosts").classList = ["d-none"];
                }
                totalAnfCost += standardCost;
                totalAnfCapacity += standardDisplayedCapacity;
                for(var i = 0, j = tds.length; i < j; ++i) { 
                    tds[i].classList.add("text-primary");
                    tds[i].classList.add("fw-semibold");
                }
                var anfTcoRowHightlight = document.getElementById(key + "-premium");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                for(var i = 0, j = tds.length; i < j; ++i) { 
                    tds[i].classList.add("text-secondary");
                    tds[i].classList.add("fw-light");
                }
                var anfTcoRowHightlight = document.getElementById(key + "-ultra");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                for(var i = 0, j = tds.length; i < j; ++i) { 
                    tds[i].classList.add("text-secondary");
                    tds[i].classList.add("fw-light");
                }
            }else if(Math.min(standardCost, premiumCost, ultraCost) == premiumCost){
                var anfTcoRowHightlight = document.getElementById(key + "-premium");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                if(premiumDisplayedCapacity > 500){
                    tds[3].innerHTML += '&nbsp;<i class="bi text-warning bi-info-circle-fill"></i>'
                    document.getElementById("warningMessageStorageCosts").innerHTML = '<small class="fs-small text-secondary"><i class="bi text-warning bi-info-circle-fill"></i>&nbsp;Pools larger than 500 TiB will need to be split into multiple Capacity Pools.</small>'
                    document.getElementById("warningMessageStorageCosts").classList = [];
                }else{
                    document.getElementById("warningMessageStorageCosts").classList = ["d-none"];
                }
                totalAnfCost += premiumCost;
                totalAnfCapacity += premiumDisplayedCapacity;
                for(var i = 0, j = tds.length; i < j; ++i) { 
                    tds[i].classList.add("text-primary");
                    tds[i].classList.add("fw-semibold");
                }
                var anfTcoRowHightlight = document.getElementById(key + "-standard");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                for(var i = 0, j = tds.length; i < j; ++i) { 
                    tds[i].classList.add("text-secondary");
                    tds[i].classList.add("fw-light");
                }
                var anfTcoRowHightlight = document.getElementById(key + "-ultra");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                for(var i = 0, j = tds.length; i < j; ++i) { 
                    tds[i].classList.add("text-secondary");
                    tds[i].classList.add("fw-light");
                }
            }else if(Math.min(standardCost, premiumCost, ultraCost) == ultraCost){
                var anfTcoRowHightlight = document.getElementById(key + "-ultra");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                if(ultraDisplayedCapacity > 500){
                    tds[3].innerHTML += '&nbsp;<i class="bi text-warning bi-info-circle-fill"></i>'
                    document.getElementById("warningMessageStorageCosts").innerHTML = '<small class="fs-small text-secondary"><i class="bi text-warning bi-info-circle-fill"></i>&nbsp;Pools larger than 500 TiB will need to be split into multiple Capacity Pools.</small>'
                    document.getElementById("warningMessageStorageCosts").classList = [];
                }else{
                    document.getElementById("warningMessageStorageCosts").classList = ["d-none"];
                }
                totalAnfCost += ultraCost;
                totalAnfCapacity += ultraDisplayedCapacity;
                var anfTcoRowHightlight = document.getElementById(key + "-ultra");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                for(var i = 0, j = tds.length; i < j; ++i) { 
                    tds[i].classList.add("text-primary");
                    tds[i].classList.add("fw-semibold");
                }
                var anfTcoRowHightlight = document.getElementById(key + "-standard");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                for(var i = 0, j = tds.length; i < j; ++i) { 
                    tds[i].classList.add("text-secondary");
                    tds[i].classList.add("fw-light");
                }
                var anfTcoRowHightlight = document.getElementById(key + "-premium");
                var tds = anfTcoRowHightlight.getElementsByTagName("td");
                for(var i = 0, j = tds.length; i < j; ++i) { 
                    tds[i].classList.add("text-secondary");
                    tds[i].classList.add("fw-light");
                } 
            }
        }
    }
    var anfTcoRow = tbodyRef.insertRow();
    var anfTcoRowPool = anfTcoRow.insertCell(0);
    anfTcoRowPool.classList.add("fw-bold");
    var anfTcoRowServiceLevel = anfTcoRow.insertCell(1);
    var anfTcoRowRegion = anfTcoRow.insertCell(2);
    var anfTcoRowCapacity = anfTcoRow.insertCell(3);
    anfTcoRowCapacity.classList.add("fw-bold");
    var anfTcoRowCost = anfTcoRow.insertCell(4);
    anfTcoRowCost.classList.add("fw-bold");
    var anfTcoRowSizing = anfTcoRow.insertCell(5);
    var anfTcoRowExcessCapacity = anfTcoRow.insertCell(6);
    var anfTcoRowExcessPerformance = anfTcoRow.insertCell(7);
    anfTcoRowPool.innerHTML = "Total";
    anfTcoRowCapacity.innerHTML = totalAnfCapacity;
    anfTcoRowCost.innerHTML = totalAnfCost.toFixed(2);
}

function updatePoolAnfBackupTable() {
    let totalAnfBackupCost = 0;
    let totalAnfBackupCapacity = 0;
    var tbodyRef = document.getElementById('anfBackupTable').getElementsByTagName('tbody')[0];
    tbodyRef.innerHTML = '';
    for (const [key, value] of Object.entries(runningAnfBackupTotalCapacity)) {
        if (runningAnfBackupTotalCapacity[key] > 0) {
            let anfBackupCost = runningAnfBackupTotalCapacity[key] * backup_region_rates[poolGroupRegions[key]];
            runningAnfBackupCosts[key] = anfBackupCost;
            var anfBackupTcoRow = tbodyRef.insertRow();
            var anfBackupTcoRowPool = anfBackupTcoRow.insertCell(0);
            var anfBackupTcoRowBaselineCapacity = anfBackupTcoRow.insertCell(1);
            var anfBackupTcoRowDeltaCapacity = anfBackupTcoRow.insertCell(2);
            var anfBackupTcoRowTotalCapacity = anfBackupTcoRow.insertCell(3);
            var anfBackupTcoRowCost = anfBackupTcoRow.insertCell(4);
            anfBackupTcoRowPool.innerHTML = key;
            anfBackupTcoRowBaselineCapacity.innerHTML = (runningAnfBackupBaselineCapacity[key] / 1024).toFixed(2);
            anfBackupTcoRowDeltaCapacity.innerHTML = (runningAnfBackupDeltaCapacity[key] /1024).toFixed(2);
            anfBackupTcoRowTotalCapacity.innerHTML = (runningAnfBackupTotalCapacity[key] / 1024).toFixed(2);
            totalAnfBackupCapacity += runningAnfBackupTotalCapacity[key];
            anfBackupTcoRowCost.innerHTML = anfBackupCost.toFixed(2);
            totalAnfBackupCost += anfBackupCost;
        }
    }
    var anfBackupTcoRow = tbodyRef.insertRow();
    var anfBackupTcoRowPool = anfBackupTcoRow.insertCell(0);
    var anfBackupTcoRowBaselineCapacity = anfBackupTcoRow.insertCell(1);
    var anfBackupTcoRowDeltaCapacity = anfBackupTcoRow.insertCell(2);
    var anfBackupTcoRowTotalCapacity = anfBackupTcoRow.insertCell(3);
    var anfBackupTcoRowCost = anfBackupTcoRow.insertCell(4);
    anfBackupTcoRowPool.innerHTML = "Total";
    anfBackupTcoRowPool.classList.add("fw-bold");
    
    anfBackupTcoRowBaselineCapacity.innerHTML = "";
    anfBackupTcoRowDeltaCapacity.innerHTML = "";
    anfBackupTcoRowTotalCapacity.innerHTML = (totalAnfBackupCapacity / 1024).toFixed(2);
    anfBackupTcoRowTotalCapacity.classList.add("fw-bold");
    anfBackupTcoRowCost.innerHTML = totalAnfBackupCost.toFixed(2);
    anfBackupTcoRowCost.classList.add("fw-bold");
}

function saveToLocal(){
let exportJson = {
    "settings": {
        "kpiBaseline": {
            "data": kpiTargets.data,
            "log": kpiTargets.log,
            "shared": kpiTargets.shared
        },
        "kpiMultipliers": {
            "prodPerf": kpiMultipliers.PROD,
            "preProdPerf": kpiMultipliers["PRE-PROD"],
            "qasPerf": kpiMultipliers.QAS,
            "devPerf": kpiMultipliers.DEV,
            "tstPerf": kpiMultipliers.TST,
            "sbxPerf": kpiMultipliers.SBX,
            "drPerf": kpiMultipliers.DR,
            "otherPerf": kpiMultipliers.OTHER
        },
        dataProtectionSettings,
        poolGroupRegions
    },
    "input": masterInput
}

let exportName = document.getElementById("fileName").value;
var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportJson));
var downloadAnchorNode = document.createElement('a');
downloadAnchorNode.setAttribute("href",     dataStr);
downloadAnchorNode.setAttribute("download", exportName + ".json");
document.body.appendChild(downloadAnchorNode); // required for firefox
downloadAnchorNode.click();
downloadAnchorNode.remove();
}

function saveToBlob(){
    let exportJson = {
        "settings": {
            "kpiBaseline": {
                "data": kpiTargets.data,
                "log": kpiTargets.log,
                "shared": kpiTargets.shared
            },
            "kpiMultipliers": {
                "prodPerf": kpiMultipliers.PROD,
                "preProdPerf": kpiMultipliers["PRE-PROD"],
                "qasPerf": kpiMultipliers.QAS,
                "devPerf": kpiMultipliers.DEV,
                "tstPerf": kpiMultipliers.TST,
                "sbxPerf": kpiMultipliers.SBX,
                "drPerf": kpiMultipliers.DR,
                "otherPerf": kpiMultipliers.OTHER
            },
            dataProtectionSettings,
            poolGroupRegions
        },
        "input": masterInput
    }

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            //console.log(req.responseText);
            blobRecordId = req.responseText;
            document.getElementById("savedUrl").innerHTML = '<i type="button" onclick="copyToClipboard(\'https://azure.github.io/azure-netapp-files/sap-calc?configid=' + blobRecordId + '\')" class="bi bi-clipboard-check"></i>&nbsp;<a href="https://azure.github.io/azure-netapp-files/sap-calc?configid=' + blobRecordId + '" target="_blank">https://azure.github.io/azure-netapp-files/sap-calc?configid=' + blobRecordId + '</a>';
        }else{
            document.getElementById("savedUrl").innerHTML = '<div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';
        }
   
    };
    
    req.open("POST", "https://prod-51.eastus.logic.azure.com:443/workflows/0a5b80778f324e46bc02d3d83c8d6c29/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=nmdrNsLWZWuW6RWypZk_sKqbgTw_U91_NohfWYJfKkY", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(exportJson));
}

function copyToClipboard(text){
    navigator.clipboard.writeText(text);
}

function updatePoolGroupRegions(settings){
    inputId = 0;
    resetTables();
    if(arguments.length == 0){
        poolGroupRegions.P1 = document.getElementById("P1region").value;
        poolGroupRegions.P2 = document.getElementById("P2region").value;
        poolGroupRegions.P3 = document.getElementById("P3region").value;
        poolGroupRegions.P4 = document.getElementById("P4region").value;
        poolGroupRegions.P5 = document.getElementById("P5region").value;
        poolGroupRegions.P6 = document.getElementById("P6region").value;
        poolGroupRegions.P7 = document.getElementById("P7region").value;
        poolGroupRegions.P8 = document.getElementById("P8region").value;
        poolGroupRegions.P9 = document.getElementById("P9region").value;
        updateTables(masterInput);
    }else{
        poolGroupRegions.P1 = settings.poolGroupRegions.P1;
        poolGroupRegions.P2 = settings.poolGroupRegions.P2;
        poolGroupRegions.P3 = settings.poolGroupRegions.P3;
        poolGroupRegions.P4 = settings.poolGroupRegions.P4;
        poolGroupRegions.P5 = settings.poolGroupRegions.P5;
        poolGroupRegions.P6 = settings.poolGroupRegions.P6;
        poolGroupRegions.P7 = settings.poolGroupRegions.P7;
        poolGroupRegions.P8 = settings.poolGroupRegions.P8;
        poolGroupRegions.P9 = settings.poolGroupRegions.P9;

        document.getElementById("P1region").value = poolGroupRegions.P1;
        document.getElementById("P2region").value = poolGroupRegions.P2;
        document.getElementById("P3region").value = poolGroupRegions.P3;
        document.getElementById("P4region").value = poolGroupRegions.P4;
        document.getElementById("P5region").value = poolGroupRegions.P5;
        document.getElementById("P6region").value = poolGroupRegions.P6;
        document.getElementById("P7region").value = poolGroupRegions.P7;
        document.getElementById("P8region").value = poolGroupRegions.P8;
        document.getElementById("P9region").value = poolGroupRegions.P9;
    }
}

function updateKpiMultipliers(settings){
    inputId = 0;
    resetTables();
    if(arguments.length == 0){
        newDataBaseline = Number(document.getElementById("dataBaseline").value);
        newLogBaseline = Number(document.getElementById("logBaseline").value);
        newSharedBaseline = Number(document.getElementById("sharedBaseline").value);
        newProdPerfMultiplier = document.getElementById("prodPerf").value/100;
        newPreProdPerfMultiplier = document.getElementById("preProdPerf").value/100;
        newQasPerfMultiplier = document.getElementById("qasPerf").value/100;
        newDevPerfMultiplier = document.getElementById("devPerf").value/100;
        newTstPerfMultiplier = document.getElementById("tstPerf").value/100;
        newSbxPerfMultiplier = document.getElementById("sbxPerf").value/100;
        newDrPerfMultiplier = document.getElementById("drPerf").value/100;
        newOtherPerfMultiplier = document.getElementById("otherPerf").value/100;
        
        kpiTargets = {
            "data": newDataBaseline,
            "log": newLogBaseline,
            "shared": newSharedBaseline
        }

        kpiMultipliers = {
            "PROD": newProdPerfMultiplier,
            "PRE-PROD": newPreProdPerfMultiplier,
            "QAS": newQasPerfMultiplier,
            "DEV": newDevPerfMultiplier,
            "TST": newTstPerfMultiplier,
            "SBX": newSbxPerfMultiplier,
            "DR": newDrPerfMultiplier,
            "OTHER": newOtherPerfMultiplier
        }
        updateTables(masterInput);
    }else{
        newDataBaseline = settings.kpiBaseline.data;
        newLogBaseline = settings.kpiBaseline.log;
        newSharedBaseline = settings.kpiBaseline.shared;

        newProdPerfMultiplier = settings.kpiMultipliers.prodPerf;
        newPreProdPerfMultiplier = settings.kpiMultipliers.preProdPerf;
        newQasPerfMultiplier = settings.kpiMultipliers.qasPerf;
        newDevPerfMultiplier = settings.kpiMultipliers.devPerf;
        newTstPerfMultiplier = settings.kpiMultipliers.tstPerf;
        newSbxPerfMultiplier = settings.kpiMultipliers.sbxPerf;
        newDrPerfMultiplier = settings.kpiMultipliers.drPerf;
        newOtherPerfMultiplier = settings.kpiMultipliers.otherPerf;

        kpiTargets = {
            "data": newDataBaseline,
            "log": newLogBaseline,
            "shared": newSharedBaseline
        }

        kpiMultipliers = {
            "PROD": newProdPerfMultiplier,
            "PRE-PROD": newPreProdPerfMultiplier,
            "QAS": newQasPerfMultiplier,
            "DEV": newDevPerfMultiplier,
            "TST": newTstPerfMultiplier,
            "SBX": newSbxPerfMultiplier,
            "DR": newDrPerfMultiplier,
            "OTHER": newOtherPerfMultiplier
        }

        document.getElementById("dataBaseline").value = newDataBaseline;
        document.getElementById("logBaseline").value = newLogBaseline;
        document.getElementById("sharedBaseline").value = newSharedBaseline;

        document.getElementById("prodPerf").value = newProdPerfMultiplier*100;
        document.getElementById("preProdPerf").value = newPreProdPerfMultiplier*100;
        document.getElementById("qasPerf").value = newQasPerfMultiplier*100;
        document.getElementById("devPerf").value = newDevPerfMultiplier*100;
        document.getElementById("tstPerf").value = newTstPerfMultiplier*100;
        document.getElementById("sbxPerf").value = newSbxPerfMultiplier*100;
        document.getElementById("drPerf").value = newDrPerfMultiplier*100;
        document.getElementById("otherPerf").value = newOtherPerfMultiplier*100;

    }
}

function updateSnapshotBackup(settings) {
    inputId = 0;
    resetTables();
    if(arguments.length == 0){
        dataProtectionSettings = {
            "PROD": {"dataDailyChange": document.getElementById("prodDataChange").value, "sharedDailyChange": document.getElementById("prodSharedChange").value, "snapRetention": document.getElementById("prodSnapRet").value, "backupRetention": document.getElementById("prodBackupRet").value},
            "PRE-PROD": {"dataDailyChange": document.getElementById("preProdDataChange").value, "sharedDailyChange": document.getElementById("preProdSharedChange").value, "snapRetention": document.getElementById("preProdSnapRet").value, "backupRetention": document.getElementById("preProdBackupRet").value},
            "QAS": {"dataDailyChange": document.getElementById("qasDataChange").value, "sharedDailyChange": document.getElementById("qasSharedChange").value, "snapRetention": document.getElementById("qasSnapRet").value, "backupRetention": document.getElementById("qasBackupRet").value},
            "DEV": {"dataDailyChange": document.getElementById("devDataChange").value, "sharedDailyChange": document.getElementById("devSharedChange").value, "snapRetention": document.getElementById("devSnapRet").value, "backupRetention": document.getElementById("devBackupRet").value},
            "TST": {"dataDailyChange": document.getElementById("tstDataChange").value, "sharedDailyChange": document.getElementById("tstSharedChange").value, "snapRetention": document.getElementById("tstSnapRet").value, "backupRetention": document.getElementById("tstBackupRet").value},
            "SBX": {"dataDailyChange": document.getElementById("sbxDataChange").value, "sharedDailyChange": document.getElementById("sbxSharedChange").value, "snapRetention": document.getElementById("sbxSnapRet").value, "backupRetention": document.getElementById("sbxBackupRet").value},
            "DR": {"dataDailyChange": document.getElementById("drDataChange").value, "sharedDailyChange": document.getElementById("drSharedChange").value, "snapRetention": document.getElementById("drSnapRet").value, "backupRetention": document.getElementById("drBackupRet").value},
            "OTHER": {"dataDailyChange": document.getElementById("otherDataChange").value, "sharedDailyChange": document.getElementById("otherSharedChange").value, "snapRetention": document.getElementById("otherSnapRet").value, "backupRetention": document.getElementById("otherBackupRet").value}
        }
        updateTables(masterInput);
    }else{
        dataProtectionSettings = {
            "PROD": {"dataDailyChange": settings.dataProtectionSettings.PROD.dataDailyChange, "sharedDailyChange": settings.dataProtectionSettings.PROD.sharedDailyChange, "snapRetention": settings.dataProtectionSettings.PROD.snapRetention, "backupRetention": settings.dataProtectionSettings.PROD.backupRetention},
            "PRE-PROD": {"dataDailyChange": settings.dataProtectionSettings["PRE-PROD"].dataDailyChange, "sharedDailyChange": settings.dataProtectionSettings["PRE-PROD"].sharedDailyChange, "snapRetention": settings.dataProtectionSettings["PRE-PROD"].snapRetention, "backupRetention": settings.dataProtectionSettings["PRE-PROD"].backupRetention},
            "QAS": {"dataDailyChange": settings.dataProtectionSettings.QAS.dataDailyChange, "sharedDailyChange": settings.dataProtectionSettings.QAS.sharedDailyChange, "snapRetention": settings.dataProtectionSettings.QAS.snapRetention, "backupRetention": settings.dataProtectionSettings.QAS.backupRetention},
            "DEV": {"dataDailyChange": settings.dataProtectionSettings.DEV.dataDailyChange, "sharedDailyChange": settings.dataProtectionSettings.DEV.sharedDailyChange, "snapRetention": settings.dataProtectionSettings.DEV.snapRetention, "backupRetention": settings.dataProtectionSettings.DEV.backupRetention},
            "TST": {"dataDailyChange": settings.dataProtectionSettings.TST.dataDailyChange, "sharedDailyChange": settings.dataProtectionSettings.TST.sharedDailyChange, "snapRetention": settings.dataProtectionSettings.TST.snapRetention, "backupRetention": settings.dataProtectionSettings.TST.backupRetention},
            "SBX": {"dataDailyChange": settings.dataProtectionSettings.SBX.dataDailyChange, "sharedDailyChange": settings.dataProtectionSettings.SBX.sharedDailyChange, "snapRetention": settings.dataProtectionSettings.SBX.snapRetention, "backupRetention": settings.dataProtectionSettings.SBX.backupRetention},
            "DR": {"dataDailyChange": settings.dataProtectionSettings.DR.dataDailyChange, "sharedDailyChange": settings.dataProtectionSettings.DR.sharedDailyChange, "snapRetention": settings.dataProtectionSettings.DR.snapRetention, "backupRetention": settings.dataProtectionSettings.DR.backupRetention},
            "OTHER": {"dataDailyChange": settings.dataProtectionSettings.OTHER.dataDailyChange, "sharedDailyChange": settings.dataProtectionSettings.OTHER.sharedDailyChange, "snapRetention": settings.dataProtectionSettings.OTHER.snapRetention, "backupRetention": settings.dataProtectionSettings.OTHER.backupRetention}
        }
        document.getElementById("prodDataChange").value = dataProtectionSettings.PROD.dataDailyChange;
        document.getElementById("prodSharedChange").value = dataProtectionSettings.PROD.sharedDailyChange;
        document.getElementById("prodSnapRet").value = dataProtectionSettings.PROD.snapRetention;
        document.getElementById("prodBackupRet").value = dataProtectionSettings.PROD.backupRetention;
        document.getElementById("preProdDataChange").value = dataProtectionSettings["PRE-PROD"].dataDailyChange;
        document.getElementById("preProdSharedChange").value = dataProtectionSettings["PRE-PROD"].sharedDailyChange;
        document.getElementById("preProdSnapRet").value = dataProtectionSettings["PRE-PROD"].snapRetention;
        document.getElementById("preProdBackupRet").value = dataProtectionSettings["PRE-PROD"].backupRetention;
        document.getElementById("qasDataChange").value = dataProtectionSettings.QAS.dataDailyChange;
        document.getElementById("qasSharedChange").value = dataProtectionSettings.QAS.sharedDailyChange;
        document.getElementById("qasSnapRet").value = dataProtectionSettings.QAS.snapRetention;
        document.getElementById("qasBackupRet").value = dataProtectionSettings.QAS.backupRetention;
        document.getElementById("devDataChange").value = dataProtectionSettings.DEV.dataDailyChange;
        document.getElementById("devSharedChange").value = dataProtectionSettings.DEV.sharedDailyChange;
        document.getElementById("devSnapRet").value = dataProtectionSettings.DEV.snapRetention;
        document.getElementById("devBackupRet").value = dataProtectionSettings.DEV.backupRetention;
        document.getElementById("tstDataChange").value = dataProtectionSettings.TST.dataDailyChange;
        document.getElementById("tstSharedChange").value = dataProtectionSettings.TST.sharedDailyChange;
        document.getElementById("tstSnapRet").value = dataProtectionSettings.TST.snapRetention;
        document.getElementById("tstBackupRet").value = dataProtectionSettings.TST.backupRetention;
        document.getElementById("sbxDataChange").value = dataProtectionSettings.SBX.dataDailyChange;
        document.getElementById("sbxSharedChange").value = dataProtectionSettings.SBX.sharedDailyChange;
        document.getElementById("sbxSnapRet").value = dataProtectionSettings.SBX.snapRetention;
        document.getElementById("sbxBackupRet").value = dataProtectionSettings.SBX.backupRetention;
        document.getElementById("drDataChange").value = dataProtectionSettings.DR.dataDailyChange;
        document.getElementById("drSharedChange").value = dataProtectionSettings.DR.sharedDailyChange;
        document.getElementById("drSnapRet").value = dataProtectionSettings.DR.snapRetention;
        document.getElementById("drBackupRet").value = dataProtectionSettings.DR.backupRetention;
        document.getElementById("otherDataChange").value = dataProtectionSettings.OTHER.dataDailyChange;
        document.getElementById("otherSharedChange").value = dataProtectionSettings.OTHER.sharedDailyChange;
        document.getElementById("otherSnapRet").value = dataProtectionSettings.OTHER.snapRetention;
        document.getElementById("otherBackupRet").value = dataProtectionSettings.OTHER.backupRetention;
    }  
}

function updateTables(jsonInput){
    masterInput = [];
    jsonInput.forEach(element => {
        if(element.inputType == "system"){
            addSystem(element);
        }else if(element.inputType == "volume"){
            addVolume(element);
        }
    });
}

function loadConfig() {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function(e) { 
        console.log(e);
        var result = JSON.parse(e.target.result);
        var formatted = JSON.stringify(result, null, 2);
        document.getElementById('result').value = formatted; 
    }
    fr.readAsText(files.item(0));
};

function getConfigId(){
    let params = new URLSearchParams(location.search);
    let configId = params.get('configid');
    let jsonurl = params.get('jsonurl');
    console.log(configId);
    if(configId != null){
        collapse = document.getElementById('flush-collapseOne');
        collapse.classList.remove('show');
        collapse = document.getElementById('mainAccordianButtonOne');
        collapse.classList.add('collapsed');
        collapse = document.getElementById('flush-collapseTwo');
        collapse.classList.add('show');
        collapse = document.getElementById('mainAccordianButtonTwo');
        collapse.classList.remove('collapsed');
        collapse = document.getElementById('flush-collapseThree');
        collapse.classList.add('show');
        collapse = document.getElementById('mainAccordianButtonThree');
        collapse.classList.remove('collapsed');
        collapse = document.getElementById('flush-collapseFour');
        collapse.classList.add('show');
        collapse = document.getElementById('mainAccordianButtonFour');
        collapse.classList.remove('collapsed');
        collapse = document.getElementById('flush-collapseFive');
        collapse.classList.remove('show');
        collapse = document.getElementById('mainAccordianButtonFive');
        collapse.classList.add('collapsed');
        importConfig(configId);
    }else{
        console.log("No config ID");
    }
    if(jsonurl != null){
        collapse = document.getElementById('flush-collapseOne');
        collapse.classList.remove('show');
        collapse = document.getElementById('mainAccordianButtonOne');
        collapse.classList.add('collapsed');
        collapse = document.getElementById('flush-collapseTwo');
        collapse.classList.add('show');
        collapse = document.getElementById('mainAccordianButtonTwo');
        collapse.classList.remove('collapsed');
        collapse = document.getElementById('flush-collapseThree');
        collapse.classList.add('show');
        collapse = document.getElementById('mainAccordianButtonThree');
        collapse.classList.remove('collapsed');
        collapse = document.getElementById('flush-collapseFour');
        collapse.classList.add('show');
        collapse = document.getElementById('mainAccordianButtonFour');
        collapse.classList.remove('collapsed');
        collapse = document.getElementById('flush-collapseFive');
        collapse.classList.remove('show');
        collapse = document.getElementById('mainAccordianButtonFive');
        collapse.classList.add('collapsed');
        importConfigUrl(jsonurl);
    }
}

function importConfigUrl(jsonurl){
    fetch(jsonurl)
    .then((res) => res.text())
    .then((text) => {
        json = JSON.parse(text);
        //result = json.record;
        result = json;
        console.log(result.record);
        updateKpiMultipliers(result.settings);
        updateSnapshotBackup(result.settings);
        updatePoolGroupRegions(result.settings);
        updateTables(result.input);
    })
    .catch((e) => console.error(e));
}

function importConfig(configId){
    var result = '';
    if(arguments.length == 0){
        result = JSON.parse(document.getElementById('result').value);
        console.log(result);
        console.log(result);
        updateKpiMultipliers(result.settings);
        updateSnapshotBackup(result.settings);
        updatePoolGroupRegions(result.settings);
        updateTables(result.input);
    }else{
        let reqJson = new XMLHttpRequest();

        reqJson.onreadystatechange = () => {
        if (reqJson.readyState == XMLHttpRequest.DONE) {
            //console.log(req.responseText);
            resultJson = JSON.parse(reqJson.responseText);
            result = resultJson.record;
            console.log(result);
            updateKpiMultipliers(result.settings);
            updateSnapshotBackup(result.settings);
            updatePoolGroupRegions(result.settings);
            updateTables(result.input);
        }
        };
        
        sendData = { "configId": configId };
        reqJson.open("POST", "https://prod-15.eastus.logic.azure.com:443/workflows/47938b68af764a79b8f61ee9c65e5fea/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6rNA2OpXTFgPfsrjlEeG3Q8SXfxadGHoTPiWc2ZUVGo", true);
        reqJson.setRequestHeader("Content-Type", "application/json");
        reqJson.send(JSON.stringify(sendData));
  
    }
    
    
}

function deleteRecord(recordId){
    const arr = masterInput;
     
     const removeById = (arr, id) => {
        const requiredIndex = arr.findIndex(el => {
           return el.inputId === id;
        });
        if(requiredIndex === -1){
           return false;
        };
        return !!arr.splice(requiredIndex, 1);
     };
     removeById(arr, recordId);
     console.log(arr);
     resetTables();
     updateTables(arr);
}

function loadTooltips(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}



