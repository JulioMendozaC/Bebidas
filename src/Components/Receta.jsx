import {useContext, useState} from 'react'
import {ModalContext} from '../Contex/ModalContex'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #7a7777',
    boxShadow: 24,
    p: 4,
  };
  
  

const Receta = ({receta}) => {


    const {info,setReceta, setIdReceta} = useContext(ModalContext)
    
    const [open, setOpen] = useState(false);
    

    //Funciones para abrir
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false) ;
  
    const mostrarIng = info => {

        let ingredientes = [];
        for (let i = 0; i < 16; i++) {
            if(info [`strIngredient${i}`])
            ingredientes.push(
                <li>
                    {info [`strIngredient${i}`] } {info [`strMeasures${i}`] }
                </li>
            )

        }
            return ingredientes;
        }


    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {receta.strDrink}
                </h2>
                <img src={receta.strDrinkThumb} alt={receta.strDrink} className="card-img-top" />
            <div className="card-body">
                <button 
                className="btn btn-block btn-primary"
                onClick={() =>{
                    setIdReceta(receta.idDrink)
                    handleOpen();
                }}>
                    Ver Receta
                </button>
                <Modal
                    open={open}
                    onClose={() => {
                        setIdReceta(null);
                        setReceta({});
                        handleClose()}
                        
                    }  
                >
                    <Box sx={style}>
                    <div>
                        <h2>{info.strDrink}</h2>
                        <h3 className='mt-4'>Instructions</h3>
                        <p>{info.strInstructions}</p>
                        <img src={info.strDrinkThumb} alt="" className="img-fluid my-4" />
                        <h3>Ingredinetes y cantidades</h3>
                            {mostrarIng(info)}
                    </div>
                    </Box>
                </Modal>
            </div>
            </div>
        </div>
     );
}
 
export default Receta;