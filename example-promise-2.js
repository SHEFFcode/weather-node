function doWork (shouldFail) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('done');
            if (shouldFail === true && typeof shouldFail === 'boolean') {
                reject('error message');
            } else {
                resolve('success'); 
            }
        }, 1000);
    });
}

doWork().then(function (message) {
    console.log(message);
    return doWork(true);
}).then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
});

function getLocation () {
    return new Promise(function (resolve, reject) {
       resolve('San Francisco'); 
    });
}

function getWeather (location) {
    return new Promise(function (resolve, reject) {
       resolve('It\'s 78 degrees in ' + location); 
    });
}

getLocation().then(function (locationResolveResponse) {
    return getWeather(locationResolveResponse);
}).then(function(weatherResolveResponse){
    console.log(weatherResolveResponse);
});