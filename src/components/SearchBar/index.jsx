// style
const inputClass = "shadow-md rounded-md text-slate-800"

const SearchBar = ({ location, setLocation, searchLocation }) => {
  return (
    <div>
      <input
        className={inputClass}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={() => searchLocation(location)}>Search</button>
    </div>
  )
}

export default SearchBar
