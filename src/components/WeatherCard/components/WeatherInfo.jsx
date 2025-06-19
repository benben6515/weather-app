import { tempToCelsius } from "../../../utils/tools"
import ChartPie from '../../ChartPie'
import ChartBar from '../../ChartBar'

const textClass = "text-lg text-blue-300 flex justify-start items-center my-1"
const pInfoClass = "text-sm text-gray-300 flex justify-start items-center my-1"
const h3Class="text-2xl text-gary-100 mt-8 pt-2 border-t-2"

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) return

  const { current: { temp, humidity, clouds, pressure } } = weatherData

  return (
  <div>
    <div className="flex gap-4 justify-center items-center">
      <div className="text-4xl text-light-300 m-6">{tempToCelsius(temp)} °C</div>
      <div className="flex flex-col">
        <div className={textClass}>
          Clouds: {clouds} %
          <ChartPie width="40" height="40" data={clouds} fillColor="#eee" />
        </div>
        <div className={textClass}>
          Humidity: {humidity} %
          <ChartPie width="40" height="40" data={humidity} />
        </div>
        <p className={pInfoClass}>Pressure: {pressure}</p>
      </div>
    </div>
    <h3 className={h3Class}>4 Day weather forecast</h3>
    <ChartBar information={weatherData.daily} />
    <p className={`${pInfoClass} justify-end`}>- {new Date().toDateString()} / {new Date().getHours()}:{new Date().getMinutes()}</p>
  </div>
  )
}

export default WeatherInfo
