import axios from 'axios'

import 'dotenv/config'
const { env } = process
const apiKey = env.API_KEY || ''
const geoApiUrl = env.GEO_API_URL || ''
const weatherApiUrl = env.WEATHER_API_URL || ''

export const ApiGeo = (req, res) => {
  const url = `${req.url}&appid=${apiKey}`
  axios
    .get(geoApiUrl + url)
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err))
}

export const ApiWeather = (req, res) => {
  const url = `${req.url}&appid=${apiKey}`
  axios
    .get(weatherApiUrl + url)
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err))
}
