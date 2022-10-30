import { useComponents } from "./hook/useComponents";
import { WeatherCard } from "./WeatherCard";


export const SelectCity = ({ cities = [] }) => {

    const { handleCoords, weather }= useComponents();
    return (
        cities.length > 0 &&
        <div className="container select">
            <label htmlFor="ciudad">Elige una ciudad</label>
            <select name="ciudad" onChange={handleCoords}>
                <option>seleccione</option>
                {
                    cities.map(({ coordinates, id, name }) => (
                        <option key={id} value={[coordinates.latitude, coordinates.longitude]}>{name}</option>
                    ))
                }
            </select>
            <hr />
            <WeatherCard weather={weather}/>
        </div>
    )
}
