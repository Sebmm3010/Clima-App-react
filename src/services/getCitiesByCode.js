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
            'X-RapidAPI-Key': '32dee10c98mshb955f3c25847320p1646f1jsnb776d013bbb6',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
        }
    };
    // Obtener las ciudades del pais
    const cities = await ajax(options);
    return cities;
}