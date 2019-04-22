const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1032427931e0c9e31c0c8d251ce35d27/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (body.error) {
            callback('Unable to find location!');
        } else {
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The high for today is ' + body.daily.data[0].temperatureHigh + ' and the low will be ' + body.daily.data[0].temperatureLow + '. There is a ' + body.daily.data[0].precipProbability*100 + '% chance of rain.')
        }
    });
}

module.exports = forecast