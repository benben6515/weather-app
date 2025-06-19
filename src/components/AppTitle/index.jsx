import logo from '../../logo.svg'

const AppTitle = () => {
  return (
    <header className="h-32">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1 className="text-4xl text-sky-300">Weather App</h1>
      </div>
      <p className="text-lg text-sky-700 text-shadow-md">Search weather at everywhere.</p>
    </header>
  )
}

export default AppTitle
