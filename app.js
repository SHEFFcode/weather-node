var weather = require('./weather.js');
var location = require('./location.js')

weather(function (result) {
    console.log(result);
});

location(function (result) {
    if (!result) {
        console.log('Unable to get location.');
        return;
    }
    console.log('city: ' + result.city);
    console.log('lon/lat: ' + result.loc);

});