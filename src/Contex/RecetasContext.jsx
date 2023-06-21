import { createContext, useState, useEffect,axios } from 'react'


export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [busqueda, guardarBusqueda] = useState({
        name: '',
        categoria: ''
    });
    const [consultar, setConsultar] = useState(false);

    const { nombre, categoria } = busqueda;

    useEffect(() => {

        if (consultar) {
            const consultaApi = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                const resultado = await axios(url);
                
                console.log(resultado.data.drinks)
            }
            consultaApi()
        }
    }, [busqueda])
    return (
        <RecetasContext.Provider
            value={{
                guardarBusqueda,
                setConsultar
            }}>
            {props.children}
        </RecetasContext.Provider>
    )

}

export default RecetasProvider;