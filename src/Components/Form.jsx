import {useContext} from 'react'
import {CategoriasContext} from '../Contex/CategoriasContex';

const Form = () => {

    const { hola } = useContext(CategoriasContext)
    alert(hola)

    return (
        <form
            className="col-12">
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
                    />
                </div>
                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control">
                        <option value="">-- Selecciona Categoria--</option>
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