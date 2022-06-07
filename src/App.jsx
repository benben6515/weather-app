import { useState } from 'react'
import './App.css'
import logo from './logo.svg'
import Counter from './components/Counter'
import SearchBar from './components/SearchBar'
import * as api from './utils/api'

function App() {
  const [location, setLocation] = useState('')

  const searchLocation = async (inputText) => {
    const res = await api.getLocation(inputText)
    console.log(res)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <SearchBar location={location} setLocation={setLocation} searchLocation={searchLocation}/>
      </header>
    </div>
  )
}

export default App
