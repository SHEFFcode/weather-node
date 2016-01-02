var request = require('request');
//function doWork (data, callback) {
//    callback('done');
//}
//
//function doWorkPromise (data) {
//    return new Promise(function (resolve, reject) {
//        setTimeout(function () {
//        reject('everything is FUBAR!!!');
////        reject({
////            error: 'Something bad happened'
////        });
//        }, 1000);
//    });
//}
//
//doWorkPromise('data').then(function (resolveResult) {
//                                console.log(resolveResult);
//                            }
//                           ,function(rejectResult) {
//                                console.log(rejectResult);
//                            });

function getWeather (location) {
    return new Promise(function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';
        if (!location) {
            return reject('No location provided');
        }
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                reject('Unable to fetch weather')
            } else {
                resolve('It\'s ' + body.main.temp + ' degrees in ' + body.name + '.');
            }
        });
    })
}

getWeather('san fran').then(function(resolveResult) {
    console.log(resolveResult);
}, function (rejectResult) {
    console.log(rejectResult);
})