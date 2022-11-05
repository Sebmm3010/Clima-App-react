import { useComponents } from "./hook/useComponents"

export const WeatherCard = ({ weather = null }) => {

    const { spanish } = useComponents();
    return (
        weather &&
        <div className="weather-card animate__animated animate__fadeIn">
            <div className="content-wrapper">
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].icon}`} />
                <div className="text-wrap ">
                    <h2>{spanish(weather.weather[0].main)}</h2>
                        <h3>Temp actual: <span>{weather.main.temp} C°</span></h3>
                        <h3>Temp min: <span>{weather.main.temp_min} C°</span></h3>
                        <h3>Temp max: <span>{weather.main.temp_max} C°</span></h3>
                </div>
            </div>
        </div>
    )
}
