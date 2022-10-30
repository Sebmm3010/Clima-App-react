import { useForm } from "../hooks/useForm";
import { SelectCity } from "./SelectCity";
import { useComponents } from "./hook/useComponents";


const formData = {
    buscar: ''
}

export const SearchCountry = () => {

    const { buscar, onInputChange } = useForm(formData);

    const { handleSubmit, cities }=useComponents(buscar);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="buscar">
                    Elige un pais
                    <input type="search"
                        name="buscar"
                        placeholder="Buscar un pais"
                        autoComplete="off"
                        value={buscar}
                        onChange={onInputChange}
                        className="search"
                    />
                    <button>Buscar</button>
                </label>
            </form>
            <SelectCity cities={cities}/>
        </>
    )
}
