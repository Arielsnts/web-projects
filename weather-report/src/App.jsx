import { useEffect, useState } from 'react'
import './App.css'
import WeatherContainer from './components/weatherContainer'


function App() {
  const [city, setCity] = useState("")

  function addCity(cityName) {
    if (cityName.trim() !== "") {
      setCity(cityName)
    }
  }

  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (!city) return

    const fetchWeather = async (cityName) => {
      const cityF = cityName
      const API_key = "2ce29ab9b3888b6d3296f46141bfd602"
      const url = `
      https://api.openweathermap.org/data/2.5/weather?q=${cityF}&appid=${API_key}&lang=pt_br&units=metric
      `
      try {
        const response = await fetch(url)
        const data = await response.json()
        if (Number(data.cod) === 200) {
          setWeatherData(data)
        }
        else {
          console.log("Erro ao buscar cidade")
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchWeather(city)
  }, [city])

    const isDay = weatherData?.weather[0]?.icon?.includes('d');

  return (
    <div className={`principal-container ${!weatherData ? "input" : "output"} ${isDay ? "day" : "night"}`}>
      <WeatherContainer setFunc={addCity} data={weatherData} />
    </div>
  )

}

export default App
