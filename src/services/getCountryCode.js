import { toast } from "react-toastify";
import { ajax } from "../tools/ajax";



export const getCountryCode = async (name) => {
    const notify=()=>{
        toast.error('No se puedo encontrar ese pais', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    const options = {
        method: 'GET',
        url: `https://restcountries.com/v3.1/name/${name}`
    };
    // Obtener el codigo del pais
    try {
        const [{ cca2 }] = await ajax(options);
        return cca2;
    } catch (error) {
        notify();
    }
}