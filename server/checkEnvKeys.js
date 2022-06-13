const envKeys = [
'PORT',
'API_KEY',
'GEO_API_URL',
'WEATHER_API_URL',
]

export default (env) => {
  envKeys.forEach(e => {
    if (!env[e]) throw(`miss [${e}] key in .env file!`)
  })
  return env
}
