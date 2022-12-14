import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "../hooks/useForm";
import { SelectCity } from "./SelectCity";
import { useComponents } from "./hook/useComponents";
import { FiSearch } from 'react-icons/fi';


const formData = {
    buscar: ''
}

export const SearchCountry = () => {

    const { buscar, onInputChange } = useForm(formData);

    const { handleSubmit, cities }=useComponents(buscar);
    return (
        <>
            <form className="searchform animate__animated animate__backInUp " onSubmit={handleSubmit}>
                    <input type="search"
                        name="buscar"
                        placeholder="Buscar un país"
                        autoComplete="off"
                        value={buscar}
                        onChange={onInputChange}
                        className="search"
                    />
                <button className="btn-search hvr-grow hvr-sweep-to-top"><FiSearch/></button>
            </form>
            <SelectCity cities={cities}/>
            <ToastContainer />
        </>
    )
}
