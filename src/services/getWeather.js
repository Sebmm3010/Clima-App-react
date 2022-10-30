import { ajax } from "../tools/ajax";



export const getWeather = async (lat, long) => {
    const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
            lat: lat,
            lon: long,
            appid: import.meta.env.VITE_APPID,
            units: 'metric'
        }
    };
    // Obtener las ciudades del pais
    const weather = await ajax(options);
    return weather;
}