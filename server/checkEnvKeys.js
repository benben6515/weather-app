const envKeys = [
'API_KEY',
'GEO_API_URL',
'WEATHER_API_URL',
'VITE_APP_TIMEOUT'
]

export default (env) => {
  envKeys.forEach(e => {
    if (!env[e]) throw(`miss [${e}] key in .env file!`)
  })
  return env
}
