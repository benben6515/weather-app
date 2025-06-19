// style
const inputClass = "base-card text-slate-800 px-2"
const buttonClass = "base-card text-slate-800 bg-sky-200 m-4 px-2 hover:bg-sky-300 disabled:bg-gray-400 disabled:cursor-wait duration-300 ease-in-out"

const SearchBar = ({ location, setLocation, setCurrentLocation, isLoading, errorMsg, setErrorMsg }) => {

  const handleChange = (e) => {
    if (isLoading) return
    setLocation(e.target.value)
    setErrorMsg('')
  }

  return (
    <div>
      <input
        className={inputClass}
        value={location}
        onChange={handleChange}
        placeholder="input city ..."
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
