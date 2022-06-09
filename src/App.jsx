import { useState, useEffect } from 'react'
import './App.css'
import AppTitle from './components/AppTitle'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import * as api from './utils/api'

function App() {
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [location, setLocation] = useState('')
  const [currentLocation, setCurrentLocation] = useState('')
  const [locationData, setLocationData] = useState(null)

  useEffect(() => {
    if (!currentLocation) return
    ;(async () => {
      setIsLoading(true)
      try {
        const res = await api.getLocation(currentLocation)
        if (!res.length) {
          setIsLoading(() => false)
          setErrorMsg(() => '404, Not found!')
          return
        }
        setLocationData(() => res)
      } catch(err) {
        setErrorMsg(() => '500, Server Error!')
      } finally {
        setIsLoading(() => false)
      }
    })()
  }, [currentLocation])

  return (
    <div className="App">
      <section className="App-header">
        <AppTitle />
        <SearchBar
          location={location}
          setLocation={setLocation}
          setCurrentLocation={setCurrentLocation}
          isLoading={isLoading}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
        />
        {!!locationData &&
          <WeatherCard
            locationData={locationData}
            setIsLoading={setIsLoading}
            setErrorMsg={setErrorMsg}
          />
        }
      </section>
    </div>
  )
}

export default App
