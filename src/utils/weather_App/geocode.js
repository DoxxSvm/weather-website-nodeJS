// const request = require('request')
// const geocode = (address, callback) => {

//     const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZG94eDEyMjIyIiwiYSI6ImNrcm1kbWdrYjBtMTYycW52dTdobmZuY2cifQ.szTbHE-2EOaq4cUt4EHMSw'
//     request({ url: geourl, json: true }, (error, response) => {
//         if (error){
//             callback('unable to connect')
//         } //response undefined by defaulkt
//         else if (response.body.features.length === 0) {
//             callback('unable to find location',undefined)
//         }
//         else{
//             callback(undefined,{
//                 lat:response.body.features[0].center[0],
//                 long:response.body.features[0].center[1],
//                 place:response.body.features[0].place_name
//             })
//         }

        
//     })
// }
// module.exports = geocode
const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZG94eDEyMjIyIiwiYSI6ImNrcm1kbWdrYjBtMTYycW52dTdobmZuY2cifQ.szTbHE-2EOaq4cUt4EHMSw'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode