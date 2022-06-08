// style
const inputClass = "base-card text-slate-800 px-2"
const buttonClass = "base-card text-slate-800 bg-sky-200 m-4 px-2 hover:bg-sky-300"

const SearchBar = ({ location, setLocation, setCurrentLocation, isLoading, errorMsg, setErrorMsg }) => {

  const handleChange = (e) => {
    setLocation(e.target.value)
    setErrorMsg('')
  }

  return (
    <div>
      <input
        className={inputClass}
        value={location}
        onChange={handleChange}
      />
      <button
        disabled={isLoading}
        className={buttonClass}
        onClick={() => setCurrentLocation(location)}
      >Search { isLoading && '...'}</button>
      { !!errorMsg && <p className="text-red-400">Error: {errorMsg}</p> }
    </div>
  )
}

export default SearchBar
