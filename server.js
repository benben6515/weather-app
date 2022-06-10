const express = require('express')
const axios = require('axios')
const rateLimit = require('express-rate-limit')
const cors = require('cors')
require('dotenv').config()

const { env } = process
const isDev = env.MODE === 'development'

const port =  (isDev ? env.NODE_DEV_PORT : env.VITE_APP_PORT) || 5000
const apiKey = env.API_KEY || ''
const geoApiUrl = env.GEO_API_URL || ''
const weatherApiUrl = env.WEATHER_API_URL || ''

console.log(apiKey)

const limiter = rateLimit({
	windowMs: 30 * 60 * 1000,
	max: 60,
	standardHeaders: true,
	legacyHeaders: false,
})

const app = express()
app.use(cors())
app.use(express.json())
app.use(limiter)

// router -------------------------------
app.get('/hello', (req, res) => res.send('hello world!'))

app.use('/api-geo', (req, res) => {
  const url = `${req.url}&appid=${apiKey}`
  axios
    .get(geoApiUrl + url)
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err))
})

app.use('/api-data' , (req, res) => {
  const url = `${req.url}&appid=${apiKey}`
  axios
    .get(weatherApiUrl + url)
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err))
})

app.use(express.static(__dirname + '/dist/'))
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'))

app.listen(port, () => {
  console.log(`$ server is running at ${port}`)
})
