const pClass = "text-sm text-gray-300"

const LatAndLon = ({ lat, lon }) => {
  return (
    <div className=" flex flex-col items-start">
      <p className={pClass}>lat: {lat}</p>
      <p className={pClass}>lon: {lon}</p>
    </div>
  )
}

export default LatAndLon
