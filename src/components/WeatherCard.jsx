import { useComponents } from "./hook/useComponents"

export const WeatherCard = ({ weather = null }) => {

    const { spanish } = useComponents();
    return (
        weather &&
        <div className="weatherCard">
            <h2>{spanish(weather.weather[0].main)}</h2>
            <h2>Temperatura actual: {weather.main.temp} C°</h2>
            <h3>Temperatura minima: {weather.main.temp_min} C°</h3>
            <h3>Temperatura maxima: {weather.main.temp_max} C°</h3>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        </div>
    )
}
