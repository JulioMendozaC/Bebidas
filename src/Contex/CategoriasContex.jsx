import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

//Creamos el context
export const CategoriasContext = createContext();

//Provider es Donde se encuentrab las funciones y state
const CategoriasProvider = (props) => {
    
    //state del Context
    const [categorias, setCategorias] = useState([]);

//LLmadao api

useEffect(() =>{

    const consultaApi = async () => {

        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await axios(url);
            setCategorias(categorias.data.drinks);

    }
    consultaApi()
}, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}



export default CategoriasProvider;