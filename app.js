var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        describe: 'Location to fetch weather for.',
        type: 'string'
    })
    .help('help')
    .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
    weather(argv.l, function (weatherResult){
        console.log(weatherResult);
    });
} else {
    console.log('no location given.');
    location(function (locationResult) {
        if (locationResult) {
            weather(locationResult.city, function (weatherResult) {
                console.log(weatherResult);
            })
        } else {
            console.log('Unable to guess location.')
        }
    })
}
   