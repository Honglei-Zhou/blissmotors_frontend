import axios from 'axios'

export const locationService = {
  getLocationJSON
}

// API Key needed here
const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='

function getLocationJSON (position) {
  return new Promise((resolve, reject) => {
    var GEOCODING = baseUrl + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en'
    axios({
      url: GEOCODING,
      method: 'GET'
    }).then((resp) => {
      console.log(resp)
      var data = Object.assign({}, {
        country: resp.results[0].address_components[5].short_name,
        state: resp.results[0].address_components[4].short_name,
        city: resp.results[0].address_components[2].long_name,
        address: resp.results[0].formatted_address
      })
      resolve(data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
