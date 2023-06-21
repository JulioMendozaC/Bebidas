import { createContext, useState } from 'react'

//Creamos el context
export const CategoriasContext = createContext();

//Provider es Donde se encuentrab las funciones y state
const CategoriasProvider = (props) => {
    
    //state del Context
    const [hola, setHola] = useState('Hola desde state');



    return (
        <CategoriasContext.Provider
            value={{
hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}



export default CategoriasProvider;