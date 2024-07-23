import axios from 'axios'

const GeoApiOptions= (namePrefix = "") =>( {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  headers: {
    'x-rapidapi-key': 'a6018e4e3bmshae16fec91391c8dp1b0bc9jsn92b9e2ec29db',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  },
  params: {
    'namePrefix': namePrefix,
    'limit': '5',
    'offset': '0'
  }
});

const fetchGeoData = (namePrefix) => {
  return axios.request(GeoApiOptions(namePrefix))
}
const selectGeoData = (data) =>
        data.data.data.map((city) => ({
          id: city.id,
          city: city.name,
          country: city.country,

          lat: city.latitude,
          lon: city.longitude,
        }))
export  {fetchGeoData, selectGeoData}
