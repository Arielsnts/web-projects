import { useState } from "react";

function WeatherContainer({setFunc, data}) {
    const [city, setCity] = useState("")

    const isDay = data?.weather[0]?.icon?.includes('d');

    return (
        <div className={`weather-container ${!data ? "input" : "output"} ${isDay ? "day" : "night"}`}>
            {!data ? (
                <>
            <h1>Digite uma cidade</h1>
            <input type="text" onChange={(e) => setCity(e.target.value)}/>
            <button onClick={() => setFunc(city)}>Enviar</button>
                </>
            ) : (
                <>
            <h2>{data.name}, {data.sys.country}</h2>
            <div className="weather-content">
            
                <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                />
            
                <div className="info1">
                    <p className="temp">{data.main.temp}°C</p>
                    <p className="isDay">{isDay? "Está de dia" : "Está de noite"}</p>
                </div>

                <div className="separator"></div>

                <div className="info2">
                    <p className="desc">Clima: {data.weather[0].description}</p>
                    <p className="wind">Vento: {data.wind.speed} km/h</p>
                    <p className="humidity">Umidade: {data.main.humidity}%</p>
                </div>

            </div>
                </>
            )}
        </div>
    )
}

export default WeatherContainer