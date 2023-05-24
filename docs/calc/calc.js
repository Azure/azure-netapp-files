
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

overrideLanguage = '';

function english() {
    overrideLanguage = 'en';
    getResults();
}

function japanese() {
    overrideLanguage = 'ja';
    getResults();
}

function getBrowserLocales(options = {}) {
    const defaultOptions = {
      languageCodeOnly: false,
    };
    const opt = {
      ...defaultOptions,
      ...options,
    };
    const browserLocales =
      navigator.languages === undefined
        ? [navigator.language]
        : navigator.languages;
    if (!browserLocales) {
      return undefined;
    }
    return browserLocales.map(locale => {
      const trimmedLocale = locale.trim();
      return opt.languageCodeOnly
        ? trimmedLocale.split(/-|_/)[0]
        : trimmedLocale;
    });
}

function getResults(convert) {
    if (convert == 1) {
        document.getElementById("capinput").value = cap_target * 1024
        //getResults()
    }

    if (convert == 2) {
        document.getElementById("capinput").value = cap_target / 1024
        //getResults()
    }
    
    month_hours = 730;
    standard_rate = 0.14746;
    premium_rate = 0.29419;
    ultra_rate = 0.39274;
    standard_tputpertib = 16;
    premium_tputpertib = 64;
    ultra_tputpertib = 128;
    min_vol_capacity = 100;
    max_vol_capacity = 102400;
    max_largevol_capacity = 102400 * 5;
    min_pool_capacity = 2;
    max_pool_capacity = 500;
    min_tput = 1.56;
    max_tput = 10240 * 1;
    max_standard_tput = 1600 * 1;
    max_premium_tput = 6400 * 1;
    max_ultra_tput = 10240 * 1;
    
    var standard_region_rates = {
        "Central US": 0.14746,
        "East US": 0.14746,
        "East US 2": 0.14746,
        "North Central US": 0.17666,
        "South Central US": 0.14746,
        "West US": 0.14746,
        "West US 2": 0.14746,
        "West US 3": 0.14746,
        "US Gov Arizona": 0.17739,
        "US Gov Virginia": 0.18396,
        "US Gov Texas": 0.18396,
        "UK South": 0.16206,
        "UK West": 0.16206,
        "UAE Central": 0.23068,
        "UAE North": 0.21024,
        "Switzerland North": 0.16206,
        "Switzerland West": 0.21097,
        "Sweden Central": 0.14746,
        "Sweden South": 0.19199,
        "Qatar Central": 0.21097,
        "Norway East": 0.16206,
        "Norway West": 0.16206,
        "Korea Central": 0.19856,
        "Korea South": 0.18396,
        "Japan East": 0.17666,
        "Japan West": 0.22922,
        "Central India": 0.16279,
        "South India": 0.20805,
        "Germany North": 0.23652,
        "Germany West Central": 0.17739,
        "France Central": 0.18396,
        "North Europe": 0.14746,
        "West Europe": 0.14746,
        "Canada Central": 0.16279,
        "Canada East": 0.17739,
        "Brazil South": 0.29419, 
        "Australia Central": 0.21316,
        "Australia Central 2": 0.17666,
        "Australia East": 0.16279,
        "Australia Southeast": 0.19199,
        "East Asia": 0.22776,
        "Southeast Asia": 0.14746,
        "South Africa North": 0.21535
    };
    var premium_region_rates = {
        "Central US": 0.29419,
        "East US": 0.29419,
        "East US 2": 0.29419,
        "North Central US": 0.35332,
        "South Central US": 0.29419,
        "West US": 0.29419,
        "West US 2": 0.29419,
        "West US 3": 0.29419,
        "US Gov Arizona": 0.35332,
        "US Gov Virginia": 0.36792,
        "US Gov Texas": 0.36792,
        "UK South": 0.32339,
        "UK West": 0.32339,
        "UAE Central": 0.45917,
        "UAE North": 0.42121,
        "Switzerland North": 0.32339,
        "Switzerland West": 0.42048,
        "Sweden Central": 0.29419,
        "Sweden South": 0.38252,
        "Qatar Central": 0.42048,
        "Norway East": 0.32339,
        "Norway West": 0.32339,
        "Korea Central": 0.39712,
        "Korea South": 0.36792,
        "Japan East": 0.35259,
        "Japan West": 0.45625,
        "Central India": 0.32412,
        "South India": 0.41537,
        "Germany North": 0.47085,
        "Germany West Central": 0.35332,
        "France Central": 0.36792,
        "North Europe": 0.29419,
        "West Europe": 0.29419,
        "Canada Central": 0.32412,
        "Canada East": 0.35332,
        "Brazil South": 0.58838,
        "Australia Central": 0.42705,
        "Australia Central 2": 0.35332,
        "Australia East": 0.32412,
        "Australia Southeast": 0.38252,
        "East Asia": 0.45625,
        "Southeast Asia": 0.29419,
        "South Africa North": 0.42924
    };
    var ultra_region_rates = {
        "Central US": 0.39274,
        "East US": 0.39274,
        "East US 2": 0.39274,
        "North Central US": 0.47158,
        "South Central US": 0.39274,
        "West US": 0.39274,
        "West US 2": 0.39274,
        "West US 3": 0.39274,
        "US Gov Arizona": 0.47158,
        "US Gov Virginia": 0.49056,
        "US Gov Texas": 0.49129,
        "UK South": 0.43143,
        "UK West": 0.43143,
        "UAE Central": 0.6132,
        "UAE North": 0.56137,
        "Switzerland North": 0.43216,
        "Switzerland West": 0.5621,
        "Sweden Central": 0.39274,
        "Sweden South": 0.51027,
        "Qatar Central": 0.56137,
        "Norway East": 0.43216,
        "Norway West": 0.43216,
        "Korea Central": 0.52998,
        "Korea South": 0.49129,
        "Japan East": 0.47085,
        "Japan West": 0.60882,
        "Central India": 0.43216,
        "South India": 0.55407,
        "Germany North": 0.62853,
        "Germany West Central": 0.47158,
        "France Central": 0.49129,
        "North Europe": 0.39274,
        "West Europe": 0.39274,
        "Canada Central": 0.43216,
        "Canada East": 0.47158,
        "Brazil South": 0.7884,
        "Australia Central": 0.5694,
        "Australia Central 2": 0.47158,
        "Australia East": 0.43143,
        "Australia Southeast": 0.511,
        "East Asia": 0.60882,
        "Southeast Asia": 0.39274,
        "South Africa North": 0.57305
    };
    var tenmin_region_rates = {
        "Central US": 0.172,
        "East US": 0.14,
        "East US 2": 0.14,
        "North Central US": 0.168,
        "South Central US": 0.168,
        "West US": 0.182,
        "West US 2": 0.14,
        "West US 3": 0.14,
        "UK South": 0.175,
        "UK West": 0.183,
        "UAE Central": 0.182,
        "UAE North": 0.14,
        "Switzerland West": 0.28392,
        "Sweden Central": 0.14,
        "Sweden South": 0.14,
        "Norway East": 0.2,
        "Norway West": 0.26,
        "Korea South": 0.175,
        "Japan East": 0.203,
        "Japan West": 0.217,
        "Central India": 0.196,
        "Germany North": 0.195,
        "Germany West Central": 0.182,
        "France Central": 0.14,
        "North Europe": 0.168,
        "West Europe:": 0.182,
        "Canada Central": 0.168,
        "Canada East": 0.168,
        "Brazil South": 0.28,
        "US Gov Arizona": 0.14,
        "US Gov Texas": 0.175,
        "US Gov Virginia": 0.14,
        "Australia Central": 0.203,
        "Australia Central 2": 0.168,
        "Australia East": 0.203,
        "Australia Southeast": 0.196,
        "East Asia": 0.217,
    }
    var hourly_region_rates = {
        "Central US": 0.148,
        "East US": 0.12,
        "East US 2": 0.12,
        "North Central US": 0.144,
        "South Central US": 0.168,
        "West US": 0.156,
        "West US 2": 0.12,
        "West US 3": 0.12,
        "UK South": 0.15,
        "UK West": 0.157,
        "UAE Central": 0.156,
        "UAE North": 0.12,
        "Switzerland West": 0.24336,
        "Sweden Central": 0.12,
        "Sweden South": 0.12,
        "Norway East": 0.172,
        "Norway West": 0.223,
        "Korea South": 0.15,
        "Japan East": 0.174,
        "Japan West": 0.186,
        "Central India": 0.168,
        "Germany North": 0.167,
        "Germany West Central": 0.156,
        "France Central": 0.12,
        "North Europe": 0.144,
        "West Europe:": 0.156,
        "Canada Central": 0.144,
        "Canada East": 0.144,
        "Brazil South": 0.24,
        "US Gov Arizona": 0.12,
        "US Gov Texas": 0.15,
        "US Gov Virginia": 0.12,
        "Australia Central": 0.174,
        "Australia Central 2": 0.144,
        "Australia East": 0.174,
        "Australia Southeast": 0.168,
        "East Asia": 0.186,
    }
    var daily_region_rates = {
        "Central US": 0.135,
        "East US": 0.11,
        "East US 2": 0.11,
        "North Central US": 0.132,
        "South Central US": 0.168,
        "West US": 0.143,
        "West US 2": 0.11,
        "West US 3": 0.11,
        "UK South": 0.138,
        "UK West": 0.144,
        "UAE Central": 0.143,
        "UAE North": 0.11,
        "Switzerland West": 0.22308,
        "Sweden Central": 0.11,
        "Sweden South": 0.11,
        "Norway East": 0.157,
        "Norway West": 0.205,
        "Korea South": 0.138,
        "Japan East": 0.16,
        "Japan West": 0.171,
        "Central India": 0.154,
        "Germany North": 0.153,
        "Germany West Central": 0.143,
        "France Central": 0.11,
        "North Europe": 0.132,
        "West Europe:": 0.143,
        "Canada Central": 0.132,
        "Canada East": 0.132,
        "Brazil South": 0.22,
        "US Gov Arizona": 0.11,
        "US Gov Texas": 0.138,
        "US Gov Virginia": 0.11,
        "Australia Central": 0.16,
        "Australia Central 2": 0.132,
        "Australia East": 0.16,
        "Australia Southeast": 0.154,
        "East Asia": 0.171,
    }
    var backup_region_backup = {
        "Central US": 0.062,
        "East US": 0.05,
        "East US 2": 0.05,
        "North Central US": 0.06,
        "South Central US": 0.06,
        "West Central US": 0.06,
        "West US": 0.065,
        "West US 2": 0.05,
        "West US 3": 0.05,
        "UK South": 0.063,
        "UK West": 0.066,
        "UAE Central": .086,
        "UAE North": 0.066,
        "Switzerland North": 0.075,
        "Switzerland West": 0.083,
        "Sweden Central": 0.05,
        "Sweden South": 0.05,
        "Qatar Central": 0.072,
        "Norway East": 0.072,
        "Norway West": 0.078,
        "Korea Central": 0.068,
        "Korea South": 0.063,
        "Japan East": 0.073,
        "Japan West": 0.078,
        "Central India": 0.07,
        "South India": 0.076,
        "Germany North": 0.070,
        "Germany West Central": 0.065,
        "France Central": 0.063,
        "North Europe": 0.06,
        "West Europe:": 0.065,
        "Canada Central": 0.06,
        "Canada East": 0.06,
        "Brazil South": 0.10,
        "Brazil Southeast": 0.115,
        "US Gov Arizona": 0.063,
        "US Gov Texas": 0.063,
        "US Gov Virginia": 0.063,
        "Australia Central": 0.073,
        "Australia Central 2": 0.06,
        "Australia East": 0.073,
        "Australia Southeast": 0.07,
        "East Asia": 0.05,
        "Southeast Asia": 0.065,
        "South Africa North": 0.05
    }
    var backup_region_restore = {
        "Central US": 0.025,
        "East US": 0.02,
        "East US 2": 0.02,
        "North Central US": 0.024,
        "South Central US": 0.024,
        "West Central US": 0.024,
        "West US": 0.026,
        "West US 2": 0.02,
        "West US 3": 0.02,
        "UK South": 0.025,
        "UK West": 0.027,
        "UAE North": 0.027,
        "Switzerland North": 0.03,
        "Switzerland West": 0.033,
        "Norway East": 0.029,
        "Norway West": 0.032,
        "Korea Central": 0.027,
        "Korea South": 0.025,
        "Japan East": 0.029,
        "Japan West": 0.031,
        "South India": 0.031,
        "Germany North": 0.028,
        "Germany West Central": 0.026,
        "France Central": 0.025,
        "North Europe": 0.024,
        "West Europe:": 0.026,
        "Canada Central": 0.024,
        "Canada East": 0.024,
        "Brazil South": 0.04,
        "Brazil Southeast": 0.046,
        "US Gov Arizona": 0.025,
        "US Gov Texas": 0.025,
        "US Gov Virginia": 0.025,
        "Australia Central": 0.029,
        "Australia Central 2": 0.024,
        "Australia East": 0.029,
        "Australia Southeast": 0.028,
        "Southeast Asia": 0.026,
    }

    cap_target = document.getElementById("capinput").value;
    tput_target = document.getElementById("tputinput").value;
    change_rate = document.getElementById("changerate").value;
    active_region = document.getElementById("regionselector").value
    discount_percent = (100 - document.getElementById("discountinput").value) / 100;
    
    standard_rate = standard_region_rates[active_region] * discount_percent;
    premium_rate = premium_region_rates[active_region] * discount_percent;
    ultra_rate = ultra_region_rates[active_region] * discount_percent;

    if (tput_target > 4500 && document.getElementById('TiB').checked && cap_target < 102400 / 1024) {
        cap_target = 102401 / 1024
    }

    if (tput_target > 4500 && document.getElementById('GiB').checked && cap_target < 102400) {
        cap_target = 102401
    }

    if (document.getElementById('TiB').checked) {
        volume_in_gb = cap_target * 1024; 
    }

    if (document.getElementById('GiB').checked) {
        volume_in_gb = cap_target * 1;
    }
    
    if (tput_target <= 4500) {
        max_premium_tput = 4500 * 1;
        max_ultra_tput = 4500 * 1;
    }

    if (tput_target > 4500 || volume_in_gb > 102400) {
        document.getElementById("size_standard_cell").classList.add('text-success');
        document.getElementById("dest_size_standard_cell").classList.add('text-success');
        document.getElementById("size_premium_cell").classList.add('text-success');
        document.getElementById("dest_size_premium_cell").classList.add('text-success');
        document.getElementById("capinput").classList.add('text-success');
        document.getElementById("size_ultra_cell").classList.add('text-success');
        document.getElementById("dest_size_ultra_cell").classList.add('text-success');
    } else {
        document.getElementById("size_standard_cell").classList.remove('text-success');
        document.getElementById("dest_size_standard_cell").classList.remove('text-success');
        document.getElementById("size_premium_cell").classList.remove('text-success');
        document.getElementById("dest_size_premium_cell").classList.remove('text-success');
        document.getElementById("capinput").classList.remove('text-success');
        document.getElementById("size_ultra_cell").classList.remove('text-success');
        document.getElementById("dest_size_ultra_cell").classList.remove('text-success');
    }

    if (volume_in_gb > 102400) {
        max_premium_tput = 6400 * 1;
        max_ultra_tput = 10240 * 1;
    }

    //CRR calculations
    tenmin_rate = tenmin_region_rates[active_region] * discount_percent;
    hourly_rate = hourly_region_rates[active_region] * discount_percent;
    dailyplus_rate = daily_region_rates[active_region] * discount_percent;

    //backup calculations
    backup_rate = backup_region_backup[active_region] * discount_percent;
    restore_rate = backup_region_restore[active_region] * discount_percent;
    monthly_delta = (volume_in_gb * (change_rate / 100)) * 30

    if (overrideLanguage != '') {
        language = overrideLanguage;
    } else {
        language = getBrowserLocales()[0];
    }

    if (language == 'ja') {
        currencyPerMonth = '(USD/month)'
        document.title = "ANF パフォーマンス計算ツール";
        document.getElementById("headerTitle").innerHTML = '&nbsp;&nbsp;Azure NetApp Files パフォーマンス計算ツール <small>(<a href="https://azure.github.io/azure-netapp-files/calc/advanced/">advanced</a>)</small></span>';
        document.getElementById("volumewarning").innerHTML = '最小サイズは 100 GiB、最大サイズは 500TiB.';
        document.getElementById("tputwarning").innerHTML = '特定サイズボリュームの性能を確認するには「0」を、スループットからボリュームサイズを逆算するにはループットを入力してください。最大スループットは'+ max_tput + ' MiB/sとなります。';
        document.getElementById("crrwarning").innerHTML = 'レプリケーションやバックアップのコストを計算するために、日次データの変化率（.1～100）を指定します';
        document.getElementById("volumeSizeLabel").innerHTML = 'ボリューム サイズ';
        document.getElementById("throughputLabel").innerHTML = 'スループット';
        document.getElementById("changeRateLabel").innerHTML = '変化率';
        document.getElementById("sourceVolumeLabel").innerHTML = 'サービス レベル';
        document.getElementById("destinationVolumeLabel").innerHTML = '宛先ボリューム';
        document.getElementById("discountLabel").innerHTML = '割引';
        document.getElementById("blueTextExplain").innerHTML = 'ボリュームサイズが青いテキストで表示されている場合は、そのサイズが指定されたスループット、IOPSに基づいて計算されているものを示します。';
        document.getElementById("largeVolumeNote").innerHTML = 'スループットが4500 MiB/sを超えるか、サイズが100 TiBを超えるボリュームは、<a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/large-volumes-requirements-considerations">大容量のボリューム</a>が必要です。';
        document.getElementById("costWarningNote").innerHTML = '「容量プールコスト」は請求される金額です。「ボリュームショーバック」の金額は、ショーバックの目的のみです。';
        document.getElementById("replicateWarningNote").innerHTML = '異なるサービスレベルのボリューム間でレプリケーションできます。';
        document.getElementById("replicationCostsWarningNote").innerHTML = 'レプリケーション転送コストは、ストレージ効率エンジンによって35％の転送データ量を抑えた前提で計算しています。';
        document.getElementById("billingMonthWarningNote").innerHTML = '「容量プール コスト」で表示されている月額料金は、730時間に基づいて計算されています。';
        document.getElementById("sourceLabel").innerHTML = 'ソース: <a target="_blank" href="https://docs.microsoft.com/azure/azure-netapp-files/azure-netapp-files-service-levels">Service Levels</a>, <a target="_blank" href="https://azure.microsoft.com/pricing/details/netapp/">Pricing</a>, <a target="_blank" href="https://docs.microsoft.com/azure/azure-netapp-files/azure-netapp-files-resource-limits">Resource Limits</a>';
        document.getElementById("estimateOnlyWarningNote").innerHTML = 'ご注意事項: 本ツールは概算目的のみであり、性能、課金の詳細情報は公式ドキュメントを参照ください。';
        Array.from(document.getElementsByClassName("throughputCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = 'スループット <small>(MiB/s)</small>';
            }
        );
        Array.from(document.getElementsByClassName("volumeSizeCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = 'ボリューム サイズ <small class="table_unit"></small>';
            }
        );
        Array.from(document.getElementsByClassName("volumeShowBackCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = 'ボリュームショーバック <small>' + currencyPerMonth + '</small>';
            }
        );
        Array.from(document.getElementsByClassName("capacityPoolSizeCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = '容量プール サイズ <small>(TiB)</small>';
            }
        );
        Array.from(document.getElementsByClassName("capacityPoolCostCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = '容量プール コスト <small>' + currencyPerMonth + '</small>';
            }
        );
    } else {
        currencyPerMonth = '(USD/month)'
        document.title = "Azure NetApp Files Performance Calculator";
        document.getElementById("headerTitle").innerHTML = '&nbsp;&nbsp;Azure NetApp Files Performance Calculator <small>(<a href="https://azure.github.io/azure-netapp-files/calc/advanced/">advanced</a>)</small></span>';
        document.getElementById("volumewarning").innerHTML = 'Minimum volume size is 100 GiB. Maximum volume size is 500 TiB.';
        document.getElementById("tputwarning").innerHTML = 'Enter 0 to size for capacity only. Maximum throughput is '+ max_tput + ' MiB/s.';
        document.getElementById("crrwarning").innerHTML = 'Specify percent daily change rate (.1 - 100) to calculate replication and/or backup costs.';
        document.getElementById("volumeSizeLabel").innerHTML = 'Volume Size';
        document.getElementById("throughputLabel").innerHTML = 'Throughput';
        document.getElementById("changeRateLabel").innerHTML = 'Change Rate';
        document.getElementById("sourceVolumeLabel").innerHTML = 'Source Volume';
        document.getElementById("destinationVolumeLabel").innerHTML = 'Destination Volume';
        document.getElementById("discountLabel").innerHTML = 'Discount';
        document.getElementById("blueTextExplain").innerHTML = 'Blue text indicates volume is sized for throughput.';
        document.getElementById("largeVolumeNote").innerHTML = 'Volumes with a throughput greater than 4500 MiB/s or a size greater than 100 TiB require <a target="_blank" href="https://learn.microsoft.com/azure/azure-netapp-files/large-volumes-requirements-considerations">large volumes</a>.';
        document.getElementById("costWarningNote").innerHTML = "The 'Capacity Pool Cost' is the amount you will be charged. The 'Volume Show Back' amount is for show back purposes only.";
        document.getElementById("replicateWarningNote").innerHTML = 'You can replicate between volumes of different service levels.';
        document.getElementById("replicationCostsWarningNote").innerHTML = 'Replication transfer costs are based on a 35% storage efficiency rating.';
        document.getElementById("billingMonthWarningNote").innerHTML = 'Monthly costs are based on a 730 hour billing month.';
        document.getElementById("sourceLabel").innerHTML = 'source: <a target="_blank" href="https://docs.microsoft.com/azure/azure-netapp-files/azure-netapp-files-service-levels">Service Levels</a>, <a target="_blank" href="https://azure.microsoft.com/pricing/details/netapp/">Pricing</a>, <a target="_blank" href="https://docs.microsoft.com/azure/azure-netapp-files/azure-netapp-files-resource-limits">Resource Limits</a>';
        document.getElementById("estimateOnlyWarningNote").innerHTML = 'notes: calculator is for estimation purposes only';
        Array.from(document.getElementsByClassName("throughputCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = 'Throughput <small>(MiB/s)</small>';
            }
        );
        Array.from(document.getElementsByClassName("volumeSizeCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = 'Volume Size <small class="table_unit"></small>';
            }
        );
        Array.from(document.getElementsByClassName("volumeShowBackCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = 'Volume Show Back <small>' + currencyPerMonth + '</small>';
            }
        );
        Array.from(document.getElementsByClassName("capacityPoolSizeCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = 'Capacity Pool Size <small>(TiB)</small>';
            }
        );
        Array.from(document.getElementsByClassName("capacityPoolCostCellLabel")).forEach(
            function(element, index, array) {
                element.innerHTML = 'Capacity Pool Cost <small>' + currencyPerMonth + '</small>';
            }
        );
    }

    if (isNaN(change_rate) || change_rate <= 0 || change_rate > 100) {
        document.getElementById("destinationvolume").classList.add("d-none");
        document.getElementById("replicationcost").classList.add("d-none");
        document.getElementById("backupcost").classList.add("d-none");
        document.getElementById("crrwarning").classList.remove('text-muted');
        document.getElementById("crrwarning").classList.add('text-danger');
        if (change_rate == 0) {
        document.getElementById("crrwarning").classList.remove('text-danger');
        document.getElementById("crrwarning").classList.add('text-muted');
        }
    } else {
        document.getElementById("destinationvolume").classList.remove("d-none");
        document.getElementById("replicationcost").classList.remove("d-none");
        document.getElementById("backupcost").classList.remove("d-none");
        document.getElementById("crrwarning").classList.remove('text-danger');
        document.getElementById("crrwarning").classList.add('text-muted');
        document.getElementById("init_10min_cell").innerText = (volume_in_gb * tenmin_rate * .65).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("init_hourly_cell").innerText = (volume_in_gb * hourly_rate * .65).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("init_daily_cell").innerText = (volume_in_gb * dailyplus_rate * .65).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("inc_10min_cell").innerText = ((((volume_in_gb * (change_rate/100)) * tenmin_rate * .65))*31).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("inc_hourly_cell").innerText = ((((volume_in_gb * (change_rate/100)) * hourly_rate * .65))*31).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("inc_daily_cell").innerText = ((((volume_in_gb * (change_rate/100)) * dailyplus_rate * .65))*31).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("month1_10min_cell").innerText = ((volume_in_gb * tenmin_rate * .65) + ((((volume_in_gb * (change_rate/100)) * tenmin_rate * .65))*31)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("month1_hourly_cell").innerText = ((volume_in_gb * hourly_rate * .65) + ((((volume_in_gb * (change_rate/100)) * hourly_rate * .65))*31)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("month1_daily_cell").innerText = ((volume_in_gb * dailyplus_rate * .65) +  ((((volume_in_gb * (change_rate/100)) * dailyplus_rate * .65))*31)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("init_bkup_daily_cell").innerText = (volume_in_gb * backup_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');;
        document.getElementById("init_bkup_weekly_cell").innerText = (volume_in_gb * backup_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');;
        document.getElementById("inc_bkup_daily_cell").innerText = (((monthly_delta / 30) * 30) * backup_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');;
        document.getElementById("inc_bkup_weekly_cell").innerText = (((monthly_delta / 30) * 4) * backup_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');;
        document.getElementById("month1_bkup_daily_cell").innerText = ((((monthly_delta / 30) * 30) * backup_rate) + (volume_in_gb * backup_rate)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');;
        document.getElementById("month1_bkup_weekly_cell").innerText = ((((monthly_delta / 30) * 4) * backup_rate) + (volume_in_gb * backup_rate)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');;
    }

    document.getElementById("size_standard_cell").classList.remove('text-primary');
    document.getElementById("size_premium_cell").classList.remove('text-primary');
    document.getElementById("size_ultra_cell").classList.remove('text-primary');
    document.getElementById("capinput").classList.remove('text-danger');
    document.getElementById("capinput").classList.remove('text-primary');

    if (isNaN(cap_target) || volume_in_gb < min_vol_capacity || volume_in_gb > max_largevol_capacity) {
        document.getElementById("capinput").style.borderColor = "red";
        document.getElementById("volumewarning").classList.remove('text-muted');
        document.getElementById("volumewarning").classList.add('text-danger');

        document.getElementById("size_standard_cell").innerText = "";
                document.getElementById("size_premium_cell").innerText = "";
                document.getElementById("size_ultra_cell").innerText = "";

                document.getElementById("dest_size_standard_cell").innerText = "";
                document.getElementById("dest_size_premium_cell").innerText = "";
                document.getElementById("dest_size_ultra_cell").innerText = "";

                document.getElementById("poolsize_standard_cell").innerText = "";
                document.getElementById("poolsize_premium_cell").innerText = "";
                document.getElementById("poolsize_ultra_cell").innerText = "";

                document.getElementById("dest_poolsize_standard_cell").innerText = "";
                document.getElementById("dest_poolsize_premium_cell").innerText = "";
                document.getElementById("dest_poolsize_ultra_cell").innerText = "";

                document.getElementById("tput_standard_cell").innerText = "";
                document.getElementById("tput_premium_cell").innerText = "";
                document.getElementById("tput_ultra_cell").innerText = "";

                document.getElementById("dest_tput_standard_cell").innerText = "";
                document.getElementById("dest_tput_premium_cell").innerText = "";
                document.getElementById("dest_tput_ultra_cell").innerText = "";

                document.getElementById("poolcost_standard_cell").innerText = "";
                document.getElementById("poolcost_premium_cell").innerText = "";
                document.getElementById("poolcost_ultra_cell").innerText = "";
                
                document.getElementById("dest_poolcost_standard_cell").innerText = "";
                document.getElementById("dest_poolcost_premium_cell").innerText = "";
                document.getElementById("dest_poolcost_ultra_cell").innerText = "";

                document.getElementById("cost_standard_cell").innerText = "";
                document.getElementById("cost_premium_cell").innerText = "";
                document.getElementById("cost_ultra_cell").innerText = "";

                document.getElementById("dest_cost_standard_cell").innerText = "";
                document.getElementById("dest_cost_premium_cell").innerText = "";
                document.getElementById("dest_cost_ultra_cell").innerText = "";
        } else {
            document.getElementById("capinput").style.borderColor = "lightgray";
            document.getElementById("volumewarning").classList.add('text-muted');
            document.getElementById("volumewarning").classList.remove('text-danger');
            if (isNaN(tput_target) || tput_target < 0 || tput_target > max_tput) {
                document.getElementById("tputinput").style.borderColor = "red";
                document.getElementById("tputwarning").classList.add('text-danger');
                document.getElementById("tputwarning").classList.remove('text-muted');

                document.getElementById("size_standard_cell").innerText = "";
                document.getElementById("size_premium_cell").innerText = "";
                document.getElementById("size_ultra_cell").innerText = "";

                document.getElementById("dest_size_standard_cell").innerText = "";
                document.getElementById("dest_size_premium_cell").innerText = "";
                document.getElementById("dest_size_ultra_cell").innerText = "";

                document.getElementById("poolsize_standard_cell").innerText = "";
                document.getElementById("poolsize_premium_cell").innerText = "";
                document.getElementById("poolsize_ultra_cell").innerText = "";

                document.getElementById("dest_poolsize_standard_cell").innerText = "";
                document.getElementById("dest_poolsize_premium_cell").innerText = "";
                document.getElementById("dest_poolsize_ultra_cell").innerText = "";

                document.getElementById("tput_standard_cell").innerText = "";
                document.getElementById("tput_premium_cell").innerText = "";
                document.getElementById("tput_ultra_cell").innerText = "";

                document.getElementById("dest_tput_standard_cell").innerText = "";
                document.getElementById("dest_tput_premium_cell").innerText = "";
                document.getElementById("dest_tput_ultra_cell").innerText = "";

                document.getElementById("poolcost_standard_cell").innerText = "";
                document.getElementById("poolcost_premium_cell").innerText = "";
                document.getElementById("poolcost_ultra_cell").innerText = "";
                
                document.getElementById("dest_poolcost_standard_cell").innerText = "";
                document.getElementById("dest_poolcost_premium_cell").innerText = "";
                document.getElementById("dest_poolcost_ultra_cell").innerText = "";

                document.getElementById("cost_standard_cell").innerText = "";
                document.getElementById("cost_premium_cell").innerText = "";
                document.getElementById("cost_ultra_cell").innerText = "";

                document.getElementById("dest_cost_standard_cell").innerText = "";
                document.getElementById("dest_cost_premium_cell").innerText = "";
                document.getElementById("dest_cost_ultra_cell").innerText = "";
            } else {
                document.getElementById("tputinput").style.borderColor = "lightgray";
                document.getElementById("tputwarning").classList.remove('text-danger');
                document.getElementById("tputwarning").classList.add('text-muted');
                if (tput_target <= min_tput) {
                    standard_tput = (volume_in_gb / 1024) * 16;
                    if (standard_tput > max_standard_tput) {
                        standard_tput = max_standard_tput;
                    }
                    premium_tput = (volume_in_gb / 1024) * 64;
                    if (premium_tput > max_premium_tput) {
                        premium_tput = max_premium_tput;
                    }
                    ultra_tput = (volume_in_gb / 1024) * 128;
                    if (ultra_tput > max_ultra_tput) {
                        ultra_tput = max_ultra_tput;
                    }
                    standard_cost = (volume_in_gb * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    premium_cost = (volume_in_gb * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    ultra_cost = (volume_in_gb * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                }
                if (document.getElementById('GiB').checked) {
                    Array.from(document.getElementsByClassName("table_unit")).forEach(
                        function(element, index, array) {
                            element.innerHTML = '(GiB)';
                        }
                    );
                    document.getElementById("size_standard_cell").innerText = volume_in_gb.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("size_premium_cell").innerText = volume_in_gb.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("size_ultra_cell").innerText = volume_in_gb.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                    document.getElementById("dest_size_standard_cell").innerText = volume_in_gb.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_size_premium_cell").innerText = volume_in_gb.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_size_ultra_cell").innerText = volume_in_gb.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                } else {
                    Array.from(document.getElementsByClassName("table_unit")).forEach(
                        function(element, index, array) {
                            element.innerHTML = '(TiB)';
                        }
                    );
                    document.getElementById("size_standard_cell").innerText = (volume_in_gb / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("size_premium_cell").innerText = (volume_in_gb / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("size_ultra_cell").innerText = (volume_in_gb / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                    document.getElementById("dest_size_standard_cell").innerText = (volume_in_gb / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_size_premium_cell").innerText = (volume_in_gb / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_size_ultra_cell").innerText = (volume_in_gb / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                }
                if (Math.ceil(volume_in_gb / 1024) < min_pool_capacity) {
                    document.getElementById("poolsize_standard_cell").innerText = min_pool_capacity;
                    document.getElementById("poolcost_standard_cell").innerText = (min_pool_capacity * 1024 * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("poolsize_premium_cell").innerText = min_pool_capacity;
                    document.getElementById("poolcost_premium_cell").innerText = (min_pool_capacity * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("poolsize_ultra_cell").innerText = min_pool_capacity;
                    document.getElementById("poolcost_ultra_cell").innerText = (min_pool_capacity * 1024 * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                    document.getElementById("dest_poolsize_standard_cell").innerText = min_pool_capacity;
                    document.getElementById("dest_poolcost_standard_cell").innerText = (min_pool_capacity * 1024 * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_poolsize_premium_cell").innerText = min_pool_capacity;
                    document.getElementById("dest_poolcost_premium_cell").innerText = (min_pool_capacity * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_poolsize_ultra_cell").innerText = min_pool_capacity;
                    document.getElementById("dest_poolcost_ultra_cell").innerText = (min_pool_capacity * 1024 * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                } else {
                    document.getElementById("poolsize_standard_cell").innerText = Math.ceil(volume_in_gb / 1024);
                    document.getElementById("poolcost_standard_cell").innerText = (Math.ceil(volume_in_gb / 1024) * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    
                    document.getElementById("poolsize_premium_cell").innerText = Math.ceil(volume_in_gb / 1024);
                    document.getElementById("poolcost_premium_cell").innerText = (Math.ceil(volume_in_gb / 1024) * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    
                    document.getElementById("poolsize_ultra_cell").innerText = Math.ceil(volume_in_gb / 1024);
                    document.getElementById("poolcost_ultra_cell").innerText = (Math.ceil(volume_in_gb / 1024) * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    
                    document.getElementById("tput_standard_cell").innerText = standard_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("tput_premium_cell").innerText = premium_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("tput_ultra_cell").innerText = ultra_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                    document.getElementById("cost_standard_cell").innerText = standard_cost;
                    document.getElementById("cost_premium_cell").innerText = premium_cost;
                    document.getElementById("cost_ultra_cell").innerText = ultra_cost;

                    document.getElementById("dest_poolsize_standard_cell").innerText = Math.ceil(volume_in_gb / 1024);
                    document.getElementById("dest_poolcost_standard_cell").innerText = (Math.ceil(volume_in_gb / 1024) * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    
                    document.getElementById("dest_poolsize_premium_cell").innerText = Math.ceil(volume_in_gb / 1024);
                    document.getElementById("dest_poolcost_premium_cell").innerText = (Math.ceil(volume_in_gb / 1024) * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    
                    document.getElementById("dest_poolsize_ultra_cell").innerText = Math.ceil(volume_in_gb / 1024);
                    document.getElementById("dest_poolcost_ultra_cell").innerText = (Math.ceil(volume_in_gb / 1024) * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    
                    document.getElementById("dest_tput_standard_cell").innerText = standard_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_tput_premium_cell").innerText = premium_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_tput_ultra_cell").innerText = ultra_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                    document.getElementById("dest_cost_standard_cell").innerText = standard_cost;
                    document.getElementById("dest_cost_premium_cell").innerText = premium_cost;
                    document.getElementById("dest_cost_ultra_cell").innerText = ultra_cost;
                } 
                standard_size_needed = (tput_target / standard_tputpertib) * 1024;
                premium_size_needed = (tput_target / premium_tputpertib) * 1024;
                ultra_size_needed = (tput_target / ultra_tputpertib) * 1024;
                if (standard_size_needed < volume_in_gb) {
                    standard_size_needed = volume_in_gb
                }
                if (premium_size_needed < volume_in_gb) {
                    premium_size_needed = volume_in_gb
                }
                if (ultra_size_needed < volume_in_gb) {
                    ultra_size_needed = volume_in_gb
                }
                if (document.getElementById('GiB').checked) {
                    Array.from(document.getElementsByClassName("table_unit")).forEach(
                        function(element, index, array) {
                            element.innerHTML = '(GiB)';
                        }
                    );
                    standard_as_displayed = standard_size_needed;
                    premium_as_displayed = premium_size_needed;
                    ultra_as_displayed = ultra_size_needed;
                    mincap_as_displayed = min_vol_capacity;
                } else {
                    Array.from(document.getElementsByClassName("table_unit")).forEach(
                        function(element, index, array) {
                            element.innerHTML = '(TiB)';
                        }
                    );
                    standard_as_displayed = standard_size_needed / 1024;
                    premium_as_displayed = premium_size_needed / 1024;
                    ultra_as_displayed = ultra_size_needed / 1024;
                    mincap_as_displayed = min_vol_capacity / 1024;
                }
                if (standard_size_needed > max_largevol_capacity || tput_target > max_standard_tput) {
                    document.getElementById("size_standard_cell").innerText = "n/a";
                    document.getElementById("tput_standard_cell").innerText = "n/a";
                    document.getElementById("cost_standard_cell").innerText = "n/a";
                    document.getElementById("poolcost_standard_cell").innerText = "n/a";
                    document.getElementById("poolsize_standard_cell").innerText = "n/a";

                    document.getElementById("dest_size_standard_cell").innerText = "n/a";
                    document.getElementById("dest_tput_standard_cell").innerText = "n/a";
                    document.getElementById("dest_cost_standard_cell").innerText = "n/a";
                    document.getElementById("dest_poolcost_standard_cell").innerText = "n/a";
                    document.getElementById("dest_poolsize_standard_cell").innerText = "n/a";
                } else if (standard_size_needed <= min_vol_capacity) {
                    document.getElementById("size_standard_cell").innerText = mincap_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("tput_standard_cell").innerText = ((min_vol_capacity / 1024) * standard_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("cost_standard_cell").innerText = (min_vol_capacity * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("poolcost_standard_cell").innerText = (min_pool_capacity * 1024 * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                    document.getElementById("dest_size_standard_cell").innerText = mincap_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_tput_standard_cell").innerText = ((min_vol_capacity / 1024) * standard_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_cost_standard_cell").innerText = (min_vol_capacity * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_poolcost_standard_cell").innerText = (min_pool_capacity * 1024 * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                } 
                else {
                    document.getElementById("size_standard_cell").innerText = standard_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_size_standard_cell").innerText = standard_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    if (standard_size_needed > volume_in_gb) {
                    document.getElementById("size_standard_cell").classList.add('text-primary');
                    document.getElementById("dest_size_standard_cell").classList.add('text-primary');
                    document.getElementById("capinput").classList.add('text-primary');
                    }
                    if (Math.ceil(standard_size_needed / 1024) <= min_pool_capacity) {
                        document.getElementById("poolsize_standard_cell").innerText = min_pool_capacity;
                        document.getElementById("poolcost_standard_cell").innerText = (min_pool_capacity * 1024 * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        document.getElementById("dest_poolsize_standard_cell").innerText = min_pool_capacity;
                        document.getElementById("dest_poolcost_standard_cell").innerText = (min_pool_capacity * 1024 * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    } 
                    else {
                    document.getElementById("poolsize_standard_cell").innerText = Math.ceil(standard_size_needed / 1024);
                    document.getElementById("poolcost_standard_cell").innerText = (Math.ceil(standard_size_needed / 1024) * 1024 * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_poolsize_standard_cell").innerText = Math.ceil(standard_size_needed / 1024);
                    document.getElementById("dest_poolcost_standard_cell").innerText = (Math.ceil(standard_size_needed / 1024) * 1024 * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    }
                    if ((standard_size_needed / 1024) * standard_tputpertib < max_standard_tput) {
                        document.getElementById("tput_standard_cell").innerText = ((standard_size_needed / 1024) * standard_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        document.getElementById("dest_tput_standard_cell").innerText = ((standard_size_needed / 1024) * standard_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    } else {
                        document.getElementById("tput_standard_cell").innerText = max_standard_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        document.getElementById("dest_tput_standard_cell").innerText = max_standard_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    }
                    document.getElementById("cost_standard_cell").innerText = (standard_size_needed * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_cost_standard_cell").innerText = (standard_size_needed * standard_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                }
                if (premium_size_needed > max_largevol_capacity || tput_target > max_premium_tput) {
                    document.getElementById("size_premium_cell").innerText = "n/a";
                    document.getElementById("tput_premium_cell").innerText = "n/a";
                    document.getElementById("cost_premium_cell").innerText = "n/a";
                    document.getElementById("poolcost_premium_cell").innerText = "n/a";
                    document.getElementById("poolsize_premium_cell").innerText = "n/a";

                    document.getElementById("dest_size_premium_cell").innerText = "n/a";
                    document.getElementById("dest_tput_premium_cell").innerText = "n/a";
                    document.getElementById("dest_cost_premium_cell").innerText = "n/a";
                    document.getElementById("dest_poolcost_premium_cell").innerText = "n/a";
                    document.getElementById("dest_poolsize_premium_cell").innerText = "n/a";
                } else if (premium_size_needed <= min_vol_capacity) {
                    document.getElementById("size_premium_cell").innerText = mincap_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("tput_premium_cell").innerText = ((min_vol_capacity / 1024) * premium_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("cost_premium_cell").innerText = (min_vol_capacity * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("poolcost_premium_cell").innerText = (min_pool_capacity * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                    document.getElementById("dest_size_premium_cell").innerText = mincap_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_tput_premium_cell").innerText = ((min_vol_capacity / 1024) * premium_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_cost_premium_cell").innerText = (min_vol_capacity * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_poolcost_premium_cell").innerText = (min_pool_capacity * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                } else {
                    document.getElementById("size_premium_cell").innerText = premium_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_size_premium_cell").innerText = premium_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    if (premium_size_needed > volume_in_gb) {
                    document.getElementById("size_premium_cell").classList.add('text-primary');
                    document.getElementById("dest_size_premium_cell").classList.add('text-primary');
                    document.getElementById("capinput").classList.add('text-primary');
                    }
                    if (Math.ceil(premium_size_needed / 1024) < min_pool_capacity) {
                        document.getElementById("poolsize_premium_cell").innerText = min_pool_capacity;
                        document.getElementById("poolcost_premium_cell").innerText = (min_pool_capacity * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        document.getElementById("dest_poolsize_premium_cell").innerText = min_pool_capacity;
                        document.getElementById("dest_poolcost_premium_cell").innerText = (min_pool_capacity * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    } else {
                    document.getElementById("poolsize_premium_cell").innerText = Math.ceil(premium_size_needed / 1024);
                    document.getElementById("poolcost_premium_cell").innerText = (Math.ceil(premium_size_needed / 1024) * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_poolsize_premium_cell").innerText = Math.ceil(premium_size_needed / 1024);
                    document.getElementById("dest_poolcost_premium_cell").innerText = (Math.ceil(premium_size_needed / 1024) * 1024 * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    }
                    if ((premium_size_needed / 1024) * premium_tputpertib < max_premium_tput) {
                        document.getElementById("tput_premium_cell").innerText = ((premium_size_needed / 1024) * premium_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        document.getElementById("dest_tput_premium_cell").innerText = ((premium_size_needed / 1024) * premium_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    } else {
                        document.getElementById("tput_premium_cell").innerText = max_premium_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        document.getElementById("dest_tput_premium_cell").innerText = max_premium_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    }
                    document.getElementById("cost_premium_cell").innerText = (premium_size_needed * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_cost_premium_cell").innerText = (premium_size_needed * premium_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                }
                if (ultra_size_needed > max_largevol_capacity || tput_target > max_ultra_tput) {
                    document.getElementById("size_ultra_cell").innerText = "n/a";
                    document.getElementById("tput_ultra_cell").innerText = "n/a";
                    document.getElementById("cost_ultra_cell").innerText = "n/a";
                    document.getElementById("poolcost_ultra_cell").innerText = "n/a";
                    document.getElementById("poolsize_ultra_cell").innerText = "n/a";

                    document.getElementById("dest_size_ultra_cell").innerText = "n/a";
                    document.getElementById("dest_tput_ultra_cell").innerText = "n/a";
                    document.getElementById("dest_cost_ultra_cell").innerText = "n/a";
                    document.getElementById("dest_poolcost_ultra_cell").innerText = "n/a";
                    document.getElementById("dest_poolsize_ultra_cell").innerText = "n/a";
                } else if (ultra_size_needed <= min_vol_capacity) {
                    document.getElementById("size_ultra_cell").innerText = mincap_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("tput_ultra_cell").innerText = ((min_vol_capacity / 1024) * ultra_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("cost_ultra_cell").innerText = (min_vol_capacity * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("poolcost_ultra_cell").innerText = ((min_pool_capacity * 1024) * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                    document.getElementById("dest_size_ultra_cell").innerText = mincap_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_tput_ultra_cell").innerText = ((min_vol_capacity / 1024) * ultra_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_cost_ultra_cell").innerText = (min_vol_capacity * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_poolcost_ultra_cell").innerText = ((min_pool_capacity * 1024) * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                } else {
                    document.getElementById("size_ultra_cell").innerText = ultra_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_size_ultra_cell").innerText = ultra_as_displayed.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    if (ultra_size_needed > volume_in_gb) {
                    document.getElementById("size_ultra_cell").classList.add('text-primary');
                    document.getElementById("dest_size_ultra_cell").classList.add('text-primary');
                    document.getElementById("capinput").classList.add('text-primary');
                    }
                    if (Math.ceil(ultra_size_needed / 1024) < min_pool_capacity) {
                        document.getElementById("poolsize_ultra_cell").innerText = min_pool_capacity;
                        document.getElementById("poolcost_ultra_cell").innerText = (min_pool_capacity * 1024 * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        document.getElementById("dest_poolsize_ultra_cell").innerText = min_pool_capacity;
                        document.getElementById("dest_poolcost_ultra_cell").innerText = (min_pool_capacity * 1024 * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    } else {
                    document.getElementById("poolsize_ultra_cell").innerText = Math.ceil(ultra_size_needed / 1024);
                    document.getElementById("poolcost_ultra_cell").innerText = (Math.ceil(ultra_size_needed / 1024) * 1024 * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_poolsize_ultra_cell").innerText = Math.ceil(ultra_size_needed / 1024);
                    document.getElementById("dest_poolcost_ultra_cell").innerText = (Math.ceil(ultra_size_needed / 1024) * 1024 * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    }
                    if ((ultra_size_needed / 1024) * ultra_tputpertib < max_ultra_tput) {
                        document.getElementById("tput_ultra_cell").innerText = ((ultra_size_needed / 1024) * ultra_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        document.getElementById("dest_tput_ultra_cell").innerText = ((ultra_size_needed / 1024) * ultra_tputpertib).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    } else {
                        document.getElementById("tput_ultra_cell").innerText = max_ultra_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        document.getElementById("dest_tput_ultra_cell").innerText = max_ultra_tput.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    }
                    document.getElementById("cost_ultra_cell").innerText = (ultra_size_needed * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    document.getElementById("dest_cost_ultra_cell").innerText = (ultra_size_needed * ultra_rate).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                }
            }
        }
    }
