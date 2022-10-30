import { ajax } from "../tools/ajax";



export const getCountryCode = async (name) => {
    const options = {
        method: 'GET',
        url: `https://restcountries.com/v3.1/name/${name}`
    };
    // Obtener el codigo del pais
    try {
        const [{ cca2 }] = await ajax(options);
        return cca2;
    } catch (error) {
        alert('No se pudo');
    }
}