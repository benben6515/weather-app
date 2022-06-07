import axios from 'axios'

// front end api key
const API_KEY = '38e1981202f1a44a468c5cf67b05fc5b'

const searchLocation = axios.create({
  baseURL: 'https://api.openweathermap.org/geo/1.0',
  timeout: 2000,
  headers: {'X-Custom-Header': 'benben'}
});

// TODO: fix CORS
export const getLocation = (location) => {
  return searchLocation.get(`/direct?q=${encodeURIComponent(location)}&limit=5&appid=${API_KEY}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}
