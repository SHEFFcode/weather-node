var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';

module.exports = function (callback) {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log('Unable to fetch weather')
        } else {
            callback(JSON.stringify(body, null, 4));
            callback('It\'s ' + body.main.temp + ' degrees in ' + body.name + '.');
        }
    });
}