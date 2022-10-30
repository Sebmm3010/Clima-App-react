import { useState } from "react";
import { getCitiesByCode, getCountryCode, getWeather } from "../../services";



export const useComponents = (name) => {
   
    /* Search Countr logic*/

    // Array donde se alamcenaran las cities que vengan de  la api
    const [cities, setCities] = useState([]);

    // obtener las ciudades y setearlas en el array de ciudades(cities)
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name) return;
        const code = await getCountryCode(name);
        if(!code) alert('No se puedp');
        setCities(await getCitiesByCode(code));
    }

    /* SeñectCity logic */

    // Objeto que contendra el clima, la temperatura y el icono de las ciudades
    const [weather, setWeather] = useState(null);

    // Obtener las coordenadas
    const handleCoords = async (event) => {
        const cord = event.currentTarget.value;
        const [lat, long] = cord.split(',');
        setWeather(await getWeather(lat, long));
    }

    /* WeatherCard Logic */

    // Clima de ingles a español
    const spanish = (en) => {
        switch (en) {
            case 'Thunderstorm':
                return 'Tormenta electrica';

            case 'Drizzie':
                return 'Llovizna';
            case 'Rain':
                return 'Lluvia';
            case 'Snow':
                return 'Nevado';
            case 'Atmosphere':
                return 'Nublado';
            case 'Clear':
                return 'Despejado';
            case 'Clouds':
                return 'Pocas nubes';
            default:
                break;
        }
    }

    return{
        cities,
        handleSubmit,
        weather,
        handleCoords,
        spanish
    }
}