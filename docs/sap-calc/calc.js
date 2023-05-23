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

function addSystem() {
    // get the values from the form
    let sysSid = document.getElementById("sys-sid").value;
    let sysDescription = document.getElementById("sys-description").value;
    let sysRamSize = document.getElementById("sys-ram").value;
    let sysEnv = document.getElementById("sys-env").value;
    let sysHA = document.getElementById("sys-ha").value;
    let sysMultipleHosts = document.getElementById("sys-multipleHosts").value;
    let sysNodeCount = document.getElementById("sys-nodes").value;
    let sysPool = document.getElementById("sys-pool").value;

    // calculate
    let dataGiB = sysRamSize * 1.0;
    let dataPerf = kpiTargets["data"] * kpiMultipliers[sysEnv];
    let dataFreeSpace = dataGiB / 2;
    let dataDailyChangeRate = 30;
    let dataSnapshotRetentionDays = 3;
    let dataSnapshotSize = (dataGiB / 2) * (dataDailyChangeRate / 100) * dataSnapshotRetentionDays;
    let dataAddSnapshotSpace = Math.max(dataSnapshotSize - dataFreeSpace, 0);
    let dataTotalSpace = dataGiB + dataAddSnapshotSpace;

    // add to running totals

    runningLogicalTotal[sysPool] += dataGiB/1024;
    runningAddSnapshotTotal[sysPool] += dataAddSnapshotSpace/1024;
    runningTotalCapacity[sysPool] += dataTotalSpace/1024;
    runningPerformance[sysPool] += dataPerf;
    runningSnapshotSpace[sysPool] += dataSnapshotSize/1024;

    // create new row in the volume table, data
    var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
    var dataRow = tbodyRef.insertRow();

    // create new cells in the new row
    var dataRowDescription = dataRow.insertCell(0);
    var dataRowSID = dataRow.insertCell(1);
    var dataRowZone = dataRow.insertCell(2);
    var dataRowEnv = dataRow.insertCell(3);
    var dataRowPool = dataRow.insertCell(4);
    var dataRowType = dataRow.insertCell(5);
    var dataRowLogical = dataRow.insertCell(6);
    var dataRowAddSnapshot = dataRow.insertCell(7);
    var dataRowRequiredCapacity = dataRow.insertCell(8);
    var dataRowRequiredPerformance = dataRow.insertCell(9);
    var dataRowDailyChangeRate = dataRow.insertCell(10);
    var dataRowSnapshotRetentionDays = dataRow.insertCell(11);
    var dataRowSnapshotSize = dataRow.insertCell(12);
    var dataRowFreeSpace = dataRow.insertCell(13);

    dataRowDescription.innerHTML = sysDescription;
    dataRowSID.innerHTML = sysSid;
    dataRowZone.innerHTML = "1";
    dataRowEnv.innerHTML = sysEnv;
    dataRowPool.innerHTML = sysPool;
    dataRowType.innerHTML = "data";
    dataRowLogical.innerHTML = dataGiB;
    dataRowAddSnapshot.innerHTML = dataAddSnapshotSpace;
    dataRowRequiredCapacity.innerHTML = dataTotalSpace;
    dataRowRequiredPerformance.innerHTML = dataPerf;
    dataRowDailyChangeRate.innerHTML = dataDailyChangeRate;
    dataRowSnapshotRetentionDays.innerHTML = dataSnapshotRetentionDays;
    dataRowSnapshotSize.innerHTML = dataSnapshotSize;
    dataRowFreeSpace.innerHTML = dataFreeSpace;

    // calculate
    let logGiB = Math.min(sysRamSize * 1.0, 512);
    let logPerf = kpiTargets["log"] * kpiMultipliers[sysEnv];
    let logFreeSpace = 0;
    let logDailyChangeRate = 0;
    let logSnapshotRetentionDays = 0;
    let logSnapshotSize = 0;
    let logAddSnapshotSpace = 0;
    let logTotalSpace = logGiB + logAddSnapshotSpace;

    // add to running totals
    runningLogicalTotal[sysPool] += logGiB/1024;
    runningAddSnapshotTotal[sysPool] += logAddSnapshotSpace/1024;
    runningTotalCapacity[sysPool] += logTotalSpace/1024;
    runningPerformance[sysPool] += logPerf;
    runningSnapshotSpace[sysPool] += logSnapshotSize/1024;

    // create new row in the volume table, data
    var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
    var logRow = tbodyRef.insertRow();

    // create new cells in the new row
    var logRowDescription = logRow.insertCell(0);
    var logRowSID = logRow.insertCell(1);
    var logRowZone = logRow.insertCell(2);
    var logRowEnv = logRow.insertCell(3);
    var logRowPool = logRow.insertCell(4);
    var logRowType = logRow.insertCell(5);
    var logRowLogical = logRow.insertCell(6);
    var logRowAddSnapshot = logRow.insertCell(7);
    var logRowRequiredCapacity = logRow.insertCell(8);
    var logRowRequiredPerformance = logRow.insertCell(9);
    var logRowDailyChangeRate = logRow.insertCell(10);
    var logRowSnapshotRetentionDays = logRow.insertCell(11);
    var logRowSnapshotSize = logRow.insertCell(12);
    var logRowFreeSpace = logRow.insertCell(13);

    logRowDescription.innerHTML = sysDescription;
    logRowSID.innerHTML = sysSid;
    logRowZone.innerHTML = "1";
    logRowEnv.innerHTML = sysEnv;
    logRowPool.innerHTML = sysPool;
    logRowType.innerHTML = "log";
    logRowLogical.innerHTML = logGiB;
    logRowAddSnapshot.innerHTML = logAddSnapshotSpace;
    logRowRequiredCapacity.innerHTML = logTotalSpace;
    logRowRequiredPerformance.innerHTML = logPerf;
    logRowDailyChangeRate.innerHTML = logDailyChangeRate;
    logRowSnapshotRetentionDays.innerHTML = logSnapshotRetentionDays;
    logRowSnapshotSize.innerHTML = logSnapshotSize;
    logRowFreeSpace.innerHTML = logFreeSpace;

    // calculate
    let sharedGiB = Math.min(sysRamSize * 1.0, 1024);
    let sharedPerf = kpiTargets["shared"] * kpiMultipliers[sysEnv];
    let sharedFreeSpace = 0;
    let sharedDailyChangeRate = 2;
    let sharedSnapshotRetentionDays = 3;
    let sharedSnapshotSize = (sharedGiB) * (sharedDailyChangeRate / 100) * sharedSnapshotRetentionDays;
    let sharedAddSnapshotSpace = Math.max(sharedSnapshotSize - sharedFreeSpace, 0);
    let sharedTotalSpace = sharedGiB + sharedAddSnapshotSpace;

    // add to running totals
    runningLogicalTotal[sysPool] += sharedGiB/1024;
    runningAddSnapshotTotal[sysPool] += sharedAddSnapshotSpace/1024;
    runningTotalCapacity[sysPool] += sharedTotalSpace/1024;
    runningPerformance[sysPool] += sharedPerf;
    runningSnapshotSpace[sysPool] += sharedSnapshotSize/1024;

    // create new row in the volume table, data
    var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
    var sharedRow = tbodyRef.insertRow();

    // create new cells in the new row
    var sharedRowDescription = sharedRow.insertCell(0);
    var sharedRowSID = sharedRow.insertCell(1);
    var sharedRowZone = sharedRow.insertCell(2);
    var sharedRowEnv = sharedRow.insertCell(3);
    var sharedRowPool = sharedRow.insertCell(4);
    var sharedRowType = sharedRow.insertCell(5);
    var sharedRowLogical = sharedRow.insertCell(6);
    var sharedRowAddSnapshot = sharedRow.insertCell(7);
    var sharedRowRequiredCapacity = sharedRow.insertCell(8);
    var sharedRowRequiredPerformance = sharedRow.insertCell(9);
    var sharedRowDailyChangeRate = sharedRow.insertCell(10);
    var sharedRowSnapshotRetentionDays = sharedRow.insertCell(11);
    var sharedRowSnapshotSize = sharedRow.insertCell(12);
    var sharedRowFreeSpace = sharedRow.insertCell(13);

    sharedRowDescription.innerHTML = sysDescription;
    sharedRowSID.innerHTML = sysSid;
    sharedRowZone.innerHTML = "1";
    sharedRowEnv.innerHTML = sysEnv;
    sharedRowPool.innerHTML = sysPool;
    sharedRowType.innerHTML = "shared";
    sharedRowLogical.innerHTML = sharedGiB;
    sharedRowAddSnapshot.innerHTML = sharedAddSnapshotSpace;
    sharedRowRequiredCapacity.innerHTML = sharedTotalSpace;
    sharedRowRequiredPerformance.innerHTML = sharedPerf;
    sharedRowDailyChangeRate.innerHTML = sharedDailyChangeRate;
    sharedRowSnapshotRetentionDays.innerHTML = sharedSnapshotRetentionDays;
    sharedRowSnapshotSize.innerHTML = sharedSnapshotSize;
    sharedRowFreeSpace.innerHTML = sharedFreeSpace;

    updatePoolRequirementsTable();
}

function addVolume() {
    // get the values from the form
    let volSid = "";
    let volDescription = document.getElementById("vol-description").value;
    let volSize = document.getElementById("vol-size").value;
    let volThroughput = document.getElementById("vol-tPut").value;
    let volType = document.getElementById("vol-type").value;
    let volPool = document.getElementById("vol-pool").value;
    let volDailyChangeRate = document.getElementById("vol-changeRate").value;

    // calculate
    let volGiB = volSize;
    let volPerf = volThroughput;
    let volSnapshotRetentionDays = 3;
    let volSnapshotSize = (volGiB) * (volDailyChangeRate / 100) * volSnapshotRetentionDays;
    let volAddSnapshotSpace = Math.max(volSnapshotSize, 0);
    let volTotalSpace = parseFloat(volGiB) + parseFloat(volAddSnapshotSpace);

    // add to running totals
    runningLogicalTotal[sysPool] += volGiB/1024;
    runningAddSnapshotTotal[sysPool] += volAddSnapshotSpace/1024;
    runningTotalCapacity[sysPool] += volTotalSpace/1024;
    runningPerformance[sysPool] += volPerf;
    runningSnapshotSpace[sysPool] += volSnapshotSize/1024;

    // create new row in the volume table, data
    var tbodyRef = document.getElementById('volume-list').getElementsByTagName('tbody')[0];
    var volRow = tbodyRef.insertRow();

    // create new cells in the new row
    var volRowDescription = volRow.insertCell(0);
    var volRowSID = volRow.insertCell(1);
    var volRowZone = volRow.insertCell(2);
    var volRowEnv = volRow.insertCell(3);
    var volRowPool = volRow.insertCell(4);
    var volRowType = volRow.insertCell(5);
    var volRowLogical = volRow.insertCell(6);
    var volRowAddSnapshot = volRow.insertCell(7);
    var volRowRequiredCapacity = volRow.insertCell(8);
    var volRowRequiredPerformance = volRow.insertCell(9);
    var volRowDailyChangeRate = volRow.insertCell(10);
    var volRowSnapshotRetentionDays = volRow.insertCell(11);
    var volRowSnapshotSize = volRow.insertCell(12);
    var volRowFreeSpace = volRow.insertCell(13);

    volRowDescription.innerHTML = volDescription;
    volRowSID.innerHTML = volSid;
    volRowZone.innerHTML = "1";
    volRowEnv.innerHTML = "";
    volRowPool.innerHTML = volPool;
    volRowType.innerHTML = "";
    volRowLogical.innerHTML = volGiB;
    volRowAddSnapshot.innerHTML = volAddSnapshotSpace;
    volRowRequiredCapacity.innerHTML = volTotalSpace;
    volRowRequiredPerformance.innerHTML = volPerf;
    volRowDailyChangeRate.innerHTML = volDailyChangeRate;
    volRowSnapshotRetentionDays.innerHTML = volSnapshotRetentionDays;
    volRowSnapshotSize.innerHTML = volSnapshotSize;
    volRowFreeSpace.innerHTML = "0";

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
            poolGroupRowLogical.innerHTML = runningLogicalTotal[key].toFixed(2);
            poolGroupRowAddSnapshot.innerHTML = runningAddSnapshotTotal[key].toFixed(2);
            poolGroupRowRequiredCapacity.innerHTML = runningTotalCapacity[key].toFixed(2);
            poolGroupRowRequiredPerformance.innerHTML = runningPerformance[key].toFixed(2);
            poolGroupRowSnapshotSize.innerHTML = runningSnapshotSpace[key].toFixed(2); 
        }
    }
}