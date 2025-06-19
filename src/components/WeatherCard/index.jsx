import { useState, useEffect } from 'react'
import Title from './components/Title'
import LatAndLon from './components/LatAndLon'
import WeatherInfo from './components/WeatherInfo'
import * as api from '../../utils/api'

// style
const wrapperClass = "base-card bg-gray-600 p-6 m-8 text-light-400 flex flex-col gap-4"

const Content = ({ locationData, weatherData }) => {
  const { lat, lon, name, local_names } = locationData[0]
  let name_zh = local_names ? local_names.zh : ''

  return (
    <div className={wrapperClass}>
      <Title name={name} name_zh={name_zh} />
      <LatAndLon lat={lat} lon={lon} />
      <WeatherInfo weatherData={weatherData} />
    </div>
  )
}

const WeatherCard = ({ locationData, setIsLoading, setErrorMsg }) => {
  const { lat, lon } = locationData[0]
  const [weatherData, setWeatherData] = useState(null)
  const isShow = locationData ? locationData.length > 0 : false

  useEffect(() => {
    if (!lat || !lon) return null
    ;(async () => {
      setIsLoading(true)
      try {
        const res = await api.getWeather({ lat, lon })
        if (!res) {
          setIsLoading(() => false)
          setErrorMsg(() => '404, Not found!')
          return
        }
        setWeatherData(() => res)
      } catch(err) {
        setErrorMsg(() => '500, Server Error!')
      } finally {
        setIsLoading(() => false)
      }
    })()
  }, [lat, lon])

  return (
    isShow &&
      <Content
        locationData={locationData}
        weatherData={weatherData}
      />
  )
}

export default WeatherCard
