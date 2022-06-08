import { tempToCelsius } from "../../../utils/tools"
import ChartPie from '../../ChartPie'

const pClass = "text-lg text-blue-300 flex justify-start items-center"

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) return

  const { current: { temp, humidity, clouds } } = weatherData

  return (
  <div>
    <div className="flex gap-4 justify-center items-center">
      <div className="text-4xl text-light-300">{tempToCelsius(temp)} °C</div>
      <div className="flex flex-col gap-2">
        <p className={pClass}>
          clouds: {clouds} %
          <ChartPie width="40" height="40" data={clouds} />
        </p>
        <p className={pClass}>
          humidity: {humidity} %
          <ChartPie width="40" height="40" data={humidity}/>
        </p>
      </div>
    </div>
  </div>
  )
}

export default WeatherInfo
