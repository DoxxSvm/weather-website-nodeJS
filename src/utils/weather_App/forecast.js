  // const request = require('request')
// const forecast = (lat,long, callback) => {

//     const url = 'http://api.weatherstack.com/current?access_key=2e5eedba90cbf13e1037362c3a40f74e&query=' + lat +','+long
//     console.log(url)
//     request({ url: url, json: true }, (error, response) => {
//         if (error){
//             callback('unable to connect')
//         } //response undefined by defaulkt
//         else if (response.body.error) {
//             callback('unable to find location',undefined)
//         }
//         else{
//             callback(undefined,'temperature here is ' + response.body.current.temperature)
//         }

        
//     })
// }
// module.exports = forecast
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2e5eedba90cbf13e1037362c3a40f74e&query=' + latitude +','+longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.observation_time + '. It is currently ' + response.body.current.temperature + ' degrees out.')
        }
    })
}

module.exports = forecast
 