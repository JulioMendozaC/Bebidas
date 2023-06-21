import {useContext, useState} from 'react'
import {CategoriasContext} from '../Contex/CategoriasContex';
import {RecetasContext} from '../Contex/RecetasContext';

const Form = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const { categorias } = useContext(CategoriasContext)
    const { guardarBusqueda, setConsultar } = useContext(RecetasContext)

    const obptenerDatos = (e) =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
        

    }

    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                guardarBusqueda(busqueda);
                setConsultar(true);

            }}>
            <fieldset className="text-center">
                <legend>Buscar Bebida por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={obptenerDatos}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control"
                        onChange={obptenerDatos}
                        >
                        <option value="">-- Selecciona Categoria--</option>
                        {categorias.map(categoria =>(
                            <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                            >{categoria.strCategory} </option>
                        ))} 

                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                    type="submit"
                    className="btn btn-block btn-primary" 
                    value="Buscar Receta"/>
                </div>
            </div>

        </form>
    );
}

export default Form;