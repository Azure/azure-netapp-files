(function (T, l, y) {
    var S = T.location,
        u = "script",
        k = "instrumentationKey",
        D = "ingestionendpoint",
        C = "disableExceptionTracking",
        E = "ai.device.",
        I = "toLowerCase",
        b = "crossOrigin",
        w = "POST",
        e = "appInsightsSDK",
        t = y.name || "appInsights";

    // Set the global SDK instance name
    if (y.name || T[e]) {
        T[e] = t;
    }

    var n = T[t] || function (d) {
        var g = false,
            f = false,
            m = {
                initialize: true,
                queue: [],
                sv: "4",
                version: 2,
                config: d
            };

        // Function to create telemetry item
        function v(e, t) {
            var n = {},
                a = "Browser";
            n[E + "id"] = a[I]();
            n[E + "type"] = a;
            n["ai.operation.name"] = S && S.pathname || "_unknown_";
            n["ai.internal.sdkVersion"] = "javascript:snippet_" + (m.sv || m.version);
            return {
                time: new Date().toISOString(),
                iKey: e,
                name: "Microsoft.ApplicationInsights." + e.replace(/-/g, "") + "." + t,
                sampleRate: 100,
                tags: n,
                data: {
                    baseData: {
                        ver: 2
                    }
                }
            };
        }

        // Load the SDK script
        var h = d.url || y.src;
        if (h) {
            function a(e) {
                var t, n, a, i, r, o, s, c, p, l, u;
                g = true;
                m.queue = [];
                if (!f) {
                    f = true;
                    t = h;
                    s = (function () {
                        var e = {},
                            t = d.connectionString;
                        if (t) {
                            var n = t.split(";");
                            for (var a = 0; a < n.length; a++) {
                                var i = n[a].split("=");
                                if (i.length === 2) {
                                    e[i[0][I]()] = i[1];
                                }
                            }
                        }
                        if (!e[D]) {
                            var r = e.endpointsuffix,
                                o = r ? e.location : null;
                            e[D] = "https://" + (o ? o + "." : "") + "dc." + (r || "services.visualstudio.com");
                        }
                        return e;
                    })();
                    c = s[k] || d[k] || "";
                    p = s[D];
                    l = p ? p + "/v2/track" : config.endpointUrl;
                    u = [];
                    u.push((n = "SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details)", a = t, i = l, (o = (r = v(c, "Exception")).data).baseType = "ExceptionData", o.baseData.exceptions = [{
                        typeName: "SDKLoadFailed",
                        message: n.replace(/\./g, "-"),
                        hasFullStack: false,
                        stack: n + "\nSnippet failed to load [" + a + "] -- Telemetry is disabled\nHelp Link: https://go.microsoft.com/fwlink/?linkid=2128109\nHost: " + (S && S.pathname || "_unknown_") + "\nEndpoint: " + i,
                        parsedStack: []
                    }], r));
                    u.push((function (e, t, n, a) {
                        var i = v(c, "Message"),
                            r = i.data;
                        r.baseType = "MessageData";
                        var o = r.baseData;
                        o.message = 'AI (Internal): 99 message:"' + ("SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details) (" + n + ")").replace(/\"/g, "") + '"';
                        o.properties = {
                            endpoint: a
                        };
                        return i;
                    })(0, 0, t, l));
                    (function (e, t) {
                        if (JSON) {
                            var n = T.fetch;
                            if (n && !y.useXhr) {
                                n(t, {
                                    method: w,
                                    body: JSON.stringify(e),
                                    mode: "cors"
                                });
                            } else if (XMLHttpRequest) {
                                var a = new XMLHttpRequest();
                                a.open(w, t);
                                a.setRequestHeader("Content-type", "application/json");
                                a.send(JSON.stringify(e));
                            }
                        }
                    })(u, l);
                }
            }

            function i(e, t) {
                if (!f) {
                    setTimeout(function () {
                        if (!t && m.core) {
                            a();
                        }
                    }, 500);
                }
            }

            var e = (function () {
                var n = l.createElement(u);
                n.src = h;
                var e = y[b];
                if (e !== undefined && e !== "") {
                    n[b] = e;
                }
                n.onload = i;
                n.onerror = a;
                n.onreadystatechange = function (e, t) {
                    if (n.readyState === "loaded" || n.readyState === "complete") {
                        i(0, t);
                    }
                };
                return n;
            })();

            if (y.ld < 0) {
                l.getElementsByTagName("head")[0].appendChild(e);
            } else {
                setTimeout(function () {
                    l.getElementsByTagName(u)[0].parentNode.appendChild(e);
                }, y.ld || 0);
            }
        }

        try {
            m.cookie = l.cookie;
        } catch (p) {}

        function t(e) {
            while (e.length) {
                (function (t) {
                    m[t] = function () {
                        var e = arguments;
                        if (!g) {
                            m.queue.push(function () {
                                m[t].apply(m, e);
                            });
                        }
                    };
                })(e.pop());
            }
        }

        var n = "track",
            r = "TrackPage",
            o = "TrackEvent";
        t([n + "Event", n + "PageView", n + "Exception", n + "Trace", n + "DependencyData", n + "Metric", n + "PageViewPerformance", "start" + r, "stop" + r, "start" + o, "stop" + o, "addTelemetryInitializer", "setAuthenticatedUserContext", "clearAuthenticatedUserContext", "flush"]);

        m.SeverityLevel = {
            Verbose: 0,
            Information: 1,
            Warning: 2,
            Error: 3,
            Critical: 4
        };

        var s = (d.extensionConfig || {}).ApplicationInsightsAnalytics || {};
        if (d[C] !== true && s[C] !== true) {
            var method = "onerror";
            t(["_" + method]);
            var c = T[method];
            T[method] = function (e, t, n, a, i) {
                var r = c && c(e, t, n, a, i);
                if (r !== true) {
                    m["_" + method]({
                        message: e,
                        url: t,
                        lineNumber: n,
                        columnNumber: a,
                        error: i
                    });
                }
                return r;
            };
            d.autoExceptionInstrumented = true;
        }

        return m;
    }(y.cfg);

    if (T[t] = n, n.queue && n.queue.length === 0) {
        n.trackPageView({});
    }
})(window, document, {
    src: "https://az416426.vo.msecnd.net/scripts/b/ai.2.min.js", // The SDK URL Source
    //name: "appInsights", // Global SDK Instance name defaults to "appInsights" when not supplied
    //ld: 0, // Defines the load delay (in ms) before attempting to load the sdk. -1 = block page load and add to head. (default) = 0ms load after timeout,
    //useXhr: 1, // Use XHR instead of fetch to report failures (if available),
    //crossOrigin: "anonymous", // When supplied this will add the provided value as the cross origin attribute on the script tag 
    cfg: { // Application Insights Configuration
        instrumentationKey: "8f84391c-82e5-4ef1-bf89-3e15ae7d10fc"
        /* ...Other Configuration Options... */
    }
});

function createChart() {
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    const data = {
        labels: ['Logical List', 'Effective', 'Effective Capacity'],
        datasets: [
            {
                label: 'hot tier',
                data: [0, 0, 0],
                backgroundColor: 'rgb(0, 120, 212)',
            },
            {
                label: 'cool tier',
                data: [0, 0, 0],
                backgroundColor: 'rgb(77, 195, 255)',
            },
            {
                label: 'network transfer',
                data: [0, 0, 0],
                backgroundColor: 'rgb(88, 88, 88)',
            }
        ]
    };

    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'Estimated Monthly Costs'
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    stacked: true
                },
                y: {
                    beginAtZero: true,
                    stacked: true
                }
            }
        }
    });

}

function updateChart(chart, hotTier1, hotTier2, hotTier3, coolTier1, coolTier2, coolTier3, networkTransfer, networkTransfer2, labels) {
    // Update hot tier data
    chart.data.datasets[0].data[0] = hotTier3;
    chart.data.datasets[0].data[1] = hotTier2;
    chart.data.datasets[0].data[2] = hotTier1;

    // Update cool tier data
    chart.data.datasets[1].data[0] = coolTier3;
    chart.data.datasets[1].data[1] = coolTier2;
    chart.data.datasets[1].data[2] = coolTier1;

    // Update network transfer data
    chart.data.datasets[2].data[2] = networkTransfer;
    chart.data.datasets[2].data[1] = networkTransfer2;

    // Update labels
    chart.data.labels = labels;

    // Refresh the chart
    chart.update();
}

function getResults() {
    month_hours = 730;
    standard_rate = 0.000202;
    cool_rate = 0.000101;
    dataSizeInTiBs = 30;
    min_dataSizeInTiBs = 1;
    max_dataSizeInTiBs = 100000;
    discount_percent = 1;
    retrieve_rate = 0.024600;
    minimum_pool_size = 1024;
    
    var standard_region_rates = {
        "Central US": 0.000202,
        "East US": 0.000202,
        "East US 2": 0.000202,
        "North Central US": 0.000242,
        "South Central US": 0.000202,
        "West US": 0.000202,
        "West US 2": 0.000202,
        "West US 3": 0.000202,
        "UK South": 0.000202,
        "UK West": 0.000222,
        "UAE Central": 0.000316,
        "UAE North": 0.000288,
        "Switzerland North": 0.000222,
        "Switzerland West": 0.000289,
        "Sweden Central": 0.000202,
        "Sweden South": 0.000263,
        "Qatar Central": 0.000289,
        "Norway East": 0.000222,
        "Norway West": 0.000222,
        "Korea Central": 0.000272,
        "Korea South": 0.000252,
        "Japan East": 0.000242,
        "Japan West": 0.000314,
        "Italy North": 0.000202,
        "Israel Central": 0.000289,
        "Central India": 0.000223,
        "South India": 0.000285,
        "Germany North": 0.000324,
        "Germany West Central": 0.000243,
        "France Central": 0.000252,
        "North Europe": 0.000202,
        "West Europe": 0.000202,
        "Canada Central": 0.000223,
        "Canada East": 0.000243,        
        "Brazil South": 0.000403,
        "Brazil Southeast": 0.000464,
        "US Gov Arizona": 0.000243,
        "US Gov Texas": 0.000252,
        "US Gov Virginia": 0.000252,
        "Australia Central": 0.000292,
        "Australia Central 2": 0.000242,
        "Australia East": 0.000223,
        "Australia Southeast": 0.000263,
        "East Asia": 0.000312,
        "Southeast Asia": 0.000202,
        "South Africa North": 0.000295
    };
    var premium_region_rates = {
        "Central US": 0.000403,
        "East US": 0.000403,
        "East US 2": 0.000403,
        "North Central US": 0.000484,
        "South Central US": 0.000403,
        "West US": 0.000403,
        "West US 2": 0.000403,
        "West US 3": 0.000403,
        "UK South": 0.000403,
        "UK West": 0.000443,
        "UAE Central": 0.000629,
        "UAE North": 0.000577,
        "Switzerland North": 0.000443,
        "Switzerland West": 0.000576,
        "Sweden Central": 0.000403,
        "Sweden South": 0.000524,
        "Qatar Central": 0.000576,
        "Norway East": 0.000443,
        "Norway West": 0.000443,
        "Korea Central": 0.000544,
        "Korea South": 0.000504,
        "Japan East": 0.000483,
        "Japan West": 0.000625,
        "Italy North": 0.000403,
        "Israel Central": 0.000576,
        "Central India": 0.000444,
        "South India": 0.000569,
        "Germany North": 0.000645,
        "Germany West Central": 0.000484,
        "France Central": 0.000504,
        "North Europe": 0.000403,
        "West Europe": 0.000403,
        "Canada Central": 0.000444,
        "Canada East": 0.000484,
        "Brazil South": 0.000806,
        "Brazil Southeast": 0.000927,
        "US Gov Arizona": 0.000484,
        "US Gov Virginia": 0.000504,
        "US Gov Texas": 0.000504,
        "Australia Central": 0.000585,
        "Australia Central 2": 0.000484,
        "Australia East": 0.000444,
        "Australia Southeast": 0.000524,
        "East Asia": 0.000625,
        "Southeast Asia": 0.000403,
        "South Africa North": 0.000588
    };
    var ultra_region_rates = {
        "Central US": 0.000538,
        "East US": 0.000538,
        "East US 2": 0.000538,
        "North Central US": 0.000646,
        "South Central US": 0.000538,
        "West US": 0.000538,
        "West US 2": 0.000538,
        "West US 3": 0.000538,
        "UK South": 0.000538,
        "UK West": 0.000591,
        "UAE Central": 0.000840,
        "UAE North": 0.000769,
        "Switzerland North": 0.000592,
        "Switzerland West": 0.000770,
        "Sweden Central": 0.000538,
        "Sweden South": 0.000699,
        "Qatar Central": 0.000769,
        "Norway East": 0.000592,
        "Norway West": 0.000592,
        "Korea Central": 0.000726,
        "Korea South": 0.000673,
        "Japan East": 0.000645,
        "Japan West": 0.000834,
        "Italy North": 0.000538,
        "Israel Central": 0.000769,
        "Central India": 0.000592,
        "South India": 0.000759,
        "Germany North": 0.000861,
        "Germany West Central": 0.000646,
        "France Central": 0.000673,
        "North Europe": 0.000538,
        "West Europe": 0.000538,
        "Canada Central": 0.000592,
        "Canada East": 0.000646,
        "Brazil South": 0.001080,
        "Brazil Southeast": 0.001240,
        "US Gov Arizona": 0.000646,
        "US Gov Virginia": 0.000672,
        "US Gov Texas": 0.000673,
        "Australia Central": 0.000780,
        "Australia Central 2": 0.000646,
        "Australia East": 0.000591,
        "Australia Southeast": 0.000700,
        "East Asia": 0.000834,
        "Southeast Asia": 0.000538,
        "South Africa North": 0.000785
    };
    var standardcool_region_rates = {
        "Central US": 0.000101 ,
        "East US": 0.000082,
        "East US 2": 0.000082,
        "North Central US": 0.000082,
        "South Central US": 0.000099,
        "West US": 0.000093,
        "West US 2": 0.000082,
        "West US 3": 0.000082,
        "UK South": 0.000086,
        "UK West": 0.000108,
        "UAE Central": 0.000115,
        "UAE North": 0.000089,
        "Switzerland North": 0.000128,
        "Switzerland West": 0.000167,
        "Sweden Central": 0.000082,
        "Sweden South": 0.000107,
        "Qatar Central": 0.000117,
        "Norway East": 0.000096,
        "Norway West": 0.000125,
        "Korea Central": 0.000089,
        "Korea South": 0.000103,
        "Japan East": 0.000089,
        "Japan West": 0.000089,
        "Italy North": 0.000087,
        "Israel Central": 0.000117,
        "Central India": 0.000089,
        "South India": 0.000124,
        "Germany North": 0.000114,
        "Germany West Central": 0.000087,
        "France Central": 0.000086,
        "North Europe": 0.000082,
        "West Europe": 0.000087,
        "Canada Central": 0.000089,
        "Canada East": 0.000089,
        "Brazil South": 0.000144,
        "Brazil Southeast": 0.000188,
        "US Gov Arizona": 0.000139,
        "US Gov Texas": 0.000103,
        "US Gov Virginia": 0.000139,
        "Australia Central": 0.000089,
        "Australia Central 2": 0.000089,
        "Australia East": 0.000089,
        "Australia Southeast": 0.000107,
        "East Asia": 0.000089,
        "Southeast Asia": 0.000089,
        "South Africa North": 0.000144
    }
    var standardcool_network_rates = {
        "Central US": 0.024600,
        "East US": 0.020000,
        "East US 2": 0.020000,
        "North Central US": 0.020000,
        "South Central US": 0.024000,
        "West US": 0.026000,
        "West US 2": 0.020000,
        "West US 3": 0.020000,
        "UK South": 0.020900,
        "UK West": 0.026200,
        "UAE Central": 0.028100,
        "UAE North": 0.021600,
        "Switzerland North": 0.031200,
        "Switzerland West": 0.040600,
        "Sweden Central": 0.020000,
        "Sweden South": 0.026000,
        "Qatar Central": 0.028600,
        "Norway East": 0.023430,
        "Norway West": 0.030459,
        "Korea Central": 0.021800,
        "Korea South": 0.025000,
        "Japan East": 0.021800,
        "Japan West": 0.031000,
        "Italy North": 0.021300,
        "Israel Central": 0.028600,
        "Central India": 0.021800,
        "South India": 0.030200,
        "Germany North": 0.027700,
        "Germany West Central": 0.021300,
        "France Central": 0.020900,
        "North Europe": 0.020000,
        "West Europe": 0.021300,
        "Canada Central": 0.021800,
        "Canada East": 0.021800,
        "Brazil South": 0.035200,
        "Brazil Southeast": 0.0458,
        "US Gov Arizona": 0.033900,
        "US Gov Texas": 0.025000,
        "US Gov Virginia": 0.033900,
        "Australia Central": 0.021600,
        "Australia Central 2": 0.021600,
        "Australia East": 0.021600,
        "Australia Southeast": 0.026000,
        "East Asia": 0.021600,
        "Southeast Asia": 0.021600,
        "South Africa North": 0.035040
    }
   
//Inputs
    // region Input "input output:E11"
    var active_region = document.getElementById("regionselector").value; //region from drop down
    // reserved capacity term (years) "input output:E26"
    var reservedCapacity = document.getElementById("reservedCapacity").value; //0 = none, 1 = 1 year, 3 = 3 years
    // active data size (TiB) "input output:E12" and "calculations:B6"
    var dataSizeInTiBs = parseInt(document.getElementById("datasize").value, 10); //data size in TiBs
    // service level "input output:E13"
    var perfTier = document.querySelector('input[name="tier"]:checked').value; //standard, premium, ultra 
    //cool data (%) "input output:E16"
    var coolDataPercent = document.getElementById("coolPercent").value; //percent of data that is cool
    // number of daily snapshots "input output:E20"
    var snapNumberDaily = document.getElementById("snapNumberDaily").value; //number of daily snaps retained
    // daily change rate (%) "input output:E21"
    var dailyChange = document.getElementById("changerate").value; //percent of daily change
    // cool data retrieval (%) "input output:E17"
    var monthlyRetreive = document.getElementById("coolretreivalInput").value; //percent of monthly data retrieved
    
        // Debugging console logs for inputs
        console.log("Active Region:", active_region);
        console.log("Reserved Capacity:", reservedCapacity);
        console.log("Data Size:", dataSizeInTiBs);
        console.log("Performance Tier:", perfTier);
        console.log("Cool Data Percent:", coolDataPercent);
        console.log("Number of Daily Snapshots:", snapNumberDaily);
        console.log("Daily Change Rate:", dailyChange);
        console.log("Cool Data Retrieval Percent:", monthlyRetreive);

// Input Data normalization
    var dailyChangePercent = dailyChange / 100; //converting input into percent range of 0-1 (e.g. .01 = 1%)
    var cool_percent = coolDataPercent/100; //converting input into percent range of 0-1 (e.g. .01 = 1%)
    var monthlyRetreivePercent = monthlyRetreive / 100; //converting input into percent range of 0-1 (e.g. .01 = 1%)
    var hot_percent = (1 - cool_percent); //calcuating hot percent as inverse of cool data percent
    var dataSizeInGiBs = dataSizeInTiBs * 1024; //Converting GiBs to TiBs
    var total_hot_gib = (dataSizeInGiBs) * (hot_percent); //Define amount of data stored in Host Storage by GiB which applies for snapps and no-snaps all the same (snaps are assumed cold)       
    var total_cool_gib = (dataSizeInGiBs) * (cool_percent); //Define amount of data stored in Cool Storage by GiB
    var total_network_gib = (dataSizeInGiBs * (monthlyRetreivePercent) * cool_percent); //Define amount of data transfered from cool to hot by GiB  which applies for snapps and no-snaps all the same (snaps are assumed cold) 

    // Debugging console logs for normalized inputs
    console.log("Data Size in GiBs:", dataSizeInGiBs);
    console.log("Daily Change Percent:", dailyChangePercent);
    console.log("Cool Percent:", cool_percent);
    console.log("Monthly Retrieve Percent:", monthlyRetreivePercent);
    console.log("Hot Percent:", hot_percent);
    console.log("Data Size in GiBs:", dataSizeInGiBs);
    console.log("Total Hot GiB:", total_hot_gib);
    console.log("Total cool GiB:", total_cool_gib);
    console.log("Total Network GiB:", total_network_gib);


// Intermediate Calculations from calculations worksheet in Excel
    //Calculatiosn for "Snapshots" "calculations:C4"
    var snapshotsAdditionalLogical_TiB = (dataSizeInTiBs * Math.pow((1 + dailyChangePercent), snapNumberDaily)) - dataSizeInTiBs; //worksheet "calculations:D6" "=(dataSizeInTiBs*(1+dailyChangePercent)^snapNumberDaily)-dataSizeInTiBs"
    var snapshotsgainedEffective_TiB = (dataSizeInTiBs * snapNumberDaily) - snapshotsAdditionalLogical_TiB; //worksheet "calculations:C6" "=(dataSizeInTiBs*snapNumberDaily)-D6"
    console.log("Snapshots:Additional Logical TiB:", snapshotsAdditionalLogical_TiB);
    console.log("Snapshots:Gained Effective", snapshotsgainedEffective_TiB);


    //Calculations for "short term clones" calculations:E4
    cloneNumber = 0 // input output:E22 Currently 0 in worksheet formulas
    cloneBufferPercent = 0 // input output:E23 Currently 0 in worksheet formulas
    var shortTermClonesAdditionalLogical_TiB = dataSizeInTiBs * cloneBufferPercent * cloneNumber; //Worksheet "calculations:F6" "=(dataSizeInTiBs*cloneBufferPercent)*cloneNumber"
    var shortTermClonesGainedEffective_TiB = dataSizeInTiBs * cloneNumber - shortTermClonesAdditionalLogical_TiB;  //Worksheet "calculations:E6" "=(dataSizeInTiBs*cloneNumber)-F6"
    console.log("clonenumber:", cloneNumber);
    console.log("cloneBufferPercent:", cloneBufferPercent);
    console.log("Short Term Clones: Additional Logical TiB:", shortTermClonesAdditionalLogical_TiB);
    console.log("Short Term Clones: Gained Effective TiB:", shortTermClonesGainedEffective_TiB);

    //Calculations for "Net Size (with Snapshots & clones)" calculations:G4
    var netSizeWithSnapsAndClonesTotalEffective_TiB = dataSizeInTiBs + snapshotsgainedEffective_TiB + shortTermClonesGainedEffective_TiB; //Worksheet "calculations:G6" "=B6=C6+E6"
    var netSizeWithSnapsAndClonesTotalLogical_TiB = dataSizeInTiBs + snapshotsAdditionalLogical_TiB + shortTermClonesAdditionalLogical_TiB //Worksheet "calculations:H6" "=B6+D6+F6"
    console.log("Net Size With Snaps And Clones: Total Effective TiB:", netSizeWithSnapsAndClonesTotalEffective_TiB);
    console.log("Net Size With Snaps And Clones: Total Logical TiB:", netSizeWithSnapsAndClonesTotalLogical_TiB);

    //Calculations "Net size (without snapshots & clones)" calculations:I4
    console.log("Net Size Without Snaps And Clones: Total Effective TiB:", dataSizeInTiBs);
    console.log("Net Size Without Snaps And Clones: Total Logical TiB:", dataSizeInTiBs);

//Define Rates variables based on Selected Tier
if (perfTier === "standard") {
    var before_rate = standard_region_rates[active_region] * discount_percent;
    var cool_rate = standardcool_region_rates[active_region] * discount_percent;
    
    // Calculate the result of before_rate * month_hours
    var before_rate_month_hours_result = before_rate * month_hours;
    var cool_rate_month_hours_result = cool_rate * month_hours;

    // Set the value to the element with ID 'logical_list_price_output'
    document.getElementById("logical_list_price_output").innerText = before_rate_month_hours_result.toFixed(2);
}


    if (perfTier === "premium") {
        var before_rate = premium_region_rates[active_region] * discount_percent;
        var cool_rate = standardcool_region_rates[active_region] * discount_percent;
    
    // Calculate the result of before_rate * month_hours
    var before_rate_month_hours_result = before_rate * month_hours;
    var cool_rate_month_hours_result = cool_rate * month_hours;

    // Set the value to the element with ID 'logical_list_price_output'
    document.getElementById("logical_list_price_output").innerText = before_rate_month_hours_result.toFixed(2);

    };

    if (perfTier === "ultra") {
        before_rate = ultra_region_rates[active_region] * discount_percent;
        var cool_rate = standardcool_region_rates[active_region] * discount_percent;
    
    // Calculate the result of before_rate * month_hours
    var before_rate_month_hours_result = before_rate * month_hours;
    var cool_rate_month_hours_result = cool_rate * month_hours;

    // Set the value to the element with ID 'logical_list_price_output'
    document.getElementById("logical_list_price_output/hot Cost").innerText = before_rate_month_hours_result.toFixed(2);
    document.getElementById("cool Cost").innerText = cool_rate_month_hours_result.toFixed(2);

    };

    // Total Host Cost
    var total_hot_gib_cost = (total_hot_gib) * (before_rate_month_hours_result); 
    // Total Cool Cost
    var total_cool_gib_cost = (total_cool_gib) * (cool_rate_month_hours_result);
    
    // Total Cool Snapshot Cost
    var total_cool_snapshot_gib_cost = (snapshotsAdditionalLogical_TiB) * 1024 * (cool_rate_month_hours_result);

    //Total Network Cost
    var total_network_gib_cost = (total_network_gib) * (standardcool_network_rates[active_region]); 

    //Per Unit Prices
    console.log("Logical List GiB Price Output:", before_rate_month_hours_result);
    console.log("Cool Logical List GiB Price Output:", cool_rate_month_hours_result);
    
    console.log("Network GiB Monthly Price Output:", standardcool_network_rates[active_region]);

    //Total cost: price * Qty
    console.log("Total Hot Monthly Cost:", total_hot_gib_cost);
    console.log("Total Cool Monthly Cost:", total_cool_gib_cost);
    console.log("Total Cool Snapshot Price Output:", total_cool_snapshot_gib_cost);  
    console.log("Total Network Monthly Cost:", total_network_gib_cost);
   




        //Slider CValues for reference
        //dataSizeInTiBs = Total Data size in TiBs from user input
        //snapNumberDaily = Number of daily snaps retained from user input
        //dailyChange = Percent of daily change from user input (1% has a value of "1")


        //No Snap Values - for calcualtations when no snap sizes are considered
        var total_nosnap_cool_gib = (dataSizeInGiBs) * (cool_percent); //Define amount of data stored in Cool Storage by GiB
        //With Snap Values - for calculations when snap sizes are considered
        var additional_logical_storage_inTiB = (dataSizeInTiBs*(1+dailyChangePercent)^snapNumberDaily)-dataSizeInTiBs; //This is the logical space required to support the percent change rate for the snap deltas.
        var daily_snap_in_gb = dataSizeInGiBs * (dailyChangePercent); //Size of each single day snap in GiB
        var snaps_in_gb = dataSizeInGiBs * dailyChangePercent * snapNumberDaily; //Total size of all snaps in GiB
        var total_withsnap_dataSizeInGiBs = dataSizeInGiBs + snaps_in_gb; //Total size consumed by original data + all snaps
        var total_withsnap_cool_gib = (dataSizeInGiBs * cool_percent) + (snaps_in_gb); //assuming all snaps go cool

        //Calculate Effective storage size
        var snapNumberDaily = ((dataSizeInTiBs*(1+dailyChangePercent)^snapNumberDaily)-dataSizeInTiBs);
        var effective_dataSizeInGiBs = (dataSizeInGiBs*snapNumberDaily)-(dataSizeInTiBs * 1024 * dailyChangePercent);
        //Network Rate
        var network_rate = standardcool_network_rates[active_region];
        //Calculate Effective Prices
        //List price
        document.getElementById("logical_list_price_output").innerText = before_rate_month_hours_result.toFixed(5);
        // Total costs with no snaps, divided by total storage size. Shows Cool tier discounts
        document.getElementById("standard_effective_price").innerText = ((total_hot_gib_cost + total_cool_gib_cost + total_network_gib_cost)/(dataSizeInTiBs*1024)).toFixed(5);
        //Total costs with snaps, divided by total storage size including the combined size of all snaps. Shows that snaps represent a huge amount fo storage with a low cost
        document.getElementById("standard_effective_capacity_price").innerText = + ((total_hot_gib_cost + total_cool_gib_cost + total_cool_snapshot_gib_cost + total_network_gib_cost)/(netSizeWithSnapsAndClonesTotalEffective_TiB*1024)).toFixed(5);

    // *******************************Got to Here ******************************
    document.getElementById("datasize").classList.remove('text-danger');
    document.getElementById("datasize").classList.remove('text-primary');

    if (isNaN(dataSizeInTiBs) || dataSizeInTiBs < min_dataSizeInTiBs || dataSizeInTiBs > max_dataSizeInTiBs) {
        document.getElementById("datasize").style.borderColor = "red";

        document.getElementById("ct_total_cost").innerText = "";
        document.getElementById("ct_standard_cost").innerText = "";
        document.getElementById("ct_cool_cost").innerText = "";
        document.getElementById("standard_total_cost").innerText = "";
        document.getElementById("ct_network_month2").innerText = "";
        document.getElementById("total_savings").innerText = "";
       
    } else if (monthlyRetreive < 0 || monthlyRetreive > 100) {
        document.getElementById("retrieve").style.borderColor = "red";

        document.getElementById("ct_total_cost").innerText = "";
        document.getElementById("ct_standard_cost").innerText = "";
        document.getElementById("ct_cool_cost").innerText = "";
        document.getElementById("standard_total_cost").innerText = "";
        document.getElementById("ct_network_month2").innerText = "";
        document.getElementById("total_savings").innerText = "";
    } else {
        document.getElementById("datasize").style.borderColor = "lightgray";
        if (dataSizeInGiBs < minimum_pool_size) {
            pool_size = minimum_pool_size;
            standardstandardcost = pool_size * before_rate * month_hours;
        } else {
            pool_size = dataSizeInGiBs;
            standardstandardcost = dataSizeInGiBs * before_rate * month_hours;
        }

        


        hot_hours = (7 * 24) % month_hours //how many hours of the month are hot
        cool_hours = month_hours - hot_hours; //how many hours of the month are cool

        month0_standard_cost = (dataSizeInGiBs * before_rate) * month_hours

        month12_storedon_cool = (dataSizeInGiBs * (cool_percent)); //- (dataSizeInGiBs * (cool_percent)); //* (monthlyRetreive/100)); //how much data is stored on cool
        
        month11_standard_cost = (dataSizeInGiBs * before_rate) * hot_hours; //first portion of month one stored on hot
        month12_standard_cost = ((pool_size - month12_storedon_cool) * before_rate) * cool_hours; //second portion of month one

        ctstandardcostmonth1 = month11_standard_cost + month12_standard_cost;

        month12_cool_cost = (month12_storedon_cool * cool_rate) * cool_hours; //second half of month one

        ctcoolcostmonth1 = month12_cool_cost;

        egresscost =  month12_storedon_cool * standardcool_network_rates[active_region];                  

        retrievecost = (dataSizeInGiBs * (cool_percent) * (monthlyRetreive/100)) * standardcool_network_rates[active_region];
        
        month2_storedon_cool = (dataSizeInGiBs * (cool_percent)) - (dataSizeInGiBs * (cool_percent)) * monthlyRetreive/100; //month two accounting for data brought back previous month
        //month2_storedon_cool = (dataSizeInGiBs * (cool_percent)); //how much data is stored on cool
        month2_standard_cost = (pool_size - month2_storedon_cool) * before_rate * month_hours;

        ctstandardcostmonth2 = month2_standard_cost;
        
        month2_cool_cost = month2_storedon_cool * cool_rate * month_hours;

        ctcoolcostmonth2 =  month2_cool_cost;

        totalnetwork = egresscost; //+ retrievecost;
        cttotalcostmonth1 = ctstandardcostmonth1 + ctcoolcostmonth1 + totalnetwork;

        cttotalcostmonth2 = month2_cool_cost + month2_standard_cost + retrievecost;

        totalsavings = standardstandardcost - cttotalcostmonth2;
        
        percent_savings = (((standardstandardcost - cttotalcostmonth2) / standardstandardcost) * 100).toFixed(0)

        document.getElementById("ct_total_cost").innerText = '$' + cttotalcostmonth1.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("ct_total_cost_month2").innerText = '$' + cttotalcostmonth2.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("ct_standard_cost").innerText = '$' + ctstandardcostmonth1.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("ct_standard_cost_month2").innerText = '$' + ctstandardcostmonth2.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("ct_cool_cost").innerText = '$' + ctcoolcostmonth1.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("ct_cool_cost_month2").innerText = '$' + ctcoolcostmonth2.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("standard_total_cost").innerText = '$' + month0_standard_cost.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("ct_network_month2").innerText = '$' + retrievecost.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        document.getElementById("ct_network_month1").innerText = '$' + totalnetwork.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        if (totalsavings > 0) {
            document.getElementById("total_savings_1year").classList.remove('text-danger');
            document.getElementById("total_savings_1year").classList.add('text-success');
            document.getElementById("total_savings_2year").classList.remove('text-danger');
            document.getElementById("total_savings_2year").classList.add('text-success');
            document.getElementById("total_savings_3year").classList.remove('text-danger');
            document.getElementById("total_savings_3year").classList.add('text-success');
            document.getElementById("total_savings").classList.remove('text-danger');
            document.getElementById("total_savings").classList.add('text-success');
        } else {
            document.getElementById("total_savings_1year").classList.remove('text-success');
            document.getElementById("total_savings_1year").classList.add('text-danger');
            document.getElementById("total_savings_2year").classList.remove('text-success');
            document.getElementById("total_savings_2year").classList.add('text-danger');
            document.getElementById("total_savings_3year").classList.remove('text-success');
            document.getElementById("total_savings_3year").classList.add('text-danger');
            document.getElementById("total_savings").classList.remove('text-success');
            document.getElementById("total_savings").classList.add('text-danger');
        }
        totalsavings_1year = totalsavings * 12;
        totalsavings_2year = totalsavings * 24;
        totalsavings_3year = totalsavings * 36;

        document.getElementById("total_savings_1year").innerText = '$' + totalsavings_1year.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '  (' + percent_savings + '%)';
        document.getElementById("total_savings_2year").innerText = '$' + totalsavings_2year.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '  (' + percent_savings + '%)';
        document.getElementById("total_savings_3year").innerText = '$' + totalsavings_3year.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '  (' + percent_savings + '%)';
        document.getElementById("total_savings").innerText = '$' + totalsavings.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '  (' + percent_savings + '%)';

        document.getElementById("logical_list_price").innerText = '$' + standardstandardcost.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

        standardwithout = month0_standard_cost.toFixed(2);
        coolwithout = 0;
        standardwith = ctstandardcostmonth1.toFixed(2);
        standardwithmonth2 = ctstandardcostmonth2.toFixed(2);
        coolwith = ctcoolcostmonth1.toFixed(2);
        coolwithmonth2 = ctcoolcostmonth2.toFixed(2);
        retrievewith = retrievecost.toFixed(2);
        egresswith = totalnetwork.toFixed(2);

        chartlabels = [labelOne, labelTwo, labelThree];
        
        updateChart(chart,standardwithmonth2,standardwith,standardwithout,coolwithmonth2,coolwith,coolwithout,retrievewith,egresswith,chartlabels);
    }        
}