import axios from 'axios'

// env
const TIMEOUT = import.meta.env.VITE_APP_TIMEOUT || 10000

const locationUrl = axios.create({
  baseURL: '/api-geo',
  timeout: TIMEOUT,
  headers: {'X-Custom-Header': 'benben'}
});

const weatherUrl = axios.create({
  baseURL: '/api-data',
  timeout: TIMEOUT,
  headers: {'X-Custom-Header': 'benben'}
});

/**
 * ref: https://openweathermap.org/api/geocoding-api
 * @param {string} location
 *
 * 各種語言都行！
 */
export const getLocation = (location) => {
  return locationUrl.get(`/direct?q=${encodeURIComponent(location)}&limit=5`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

/**
 * ref: https://openweathermap.org/api/one-call-3
 * @param {number} lat
 * @param {number} lon
 *
 * 經緯度
 * exclude -> current minutely hourly daily alerts
 */
export const getWeather = ({ lat, lon }) => {
  return weatherUrl.get(`/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts`)
    .then(res => res.data)
    .catch(err => console.log(err))
}
