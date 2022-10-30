import { ajax } from "../tools/ajax";



export const getCitiesByCode = async (code) => {
    const options = {
        method: 'GET',
        url: 'https://spott.p.rapidapi.com/places',
        params:{
            type: 'CITY',
            skip: 0,
            country: code,
            limit: 20

        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
        }
    };
    // Obtener las ciudades del pais
    const cities = await ajax(options);
    return cities;
}