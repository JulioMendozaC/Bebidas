import Header from './Components/Header'
import Form from './Components/Form'
import CategoriasProvider from './Contex/CategoriasContex'


function App() {


  return (

    <CategoriasProvider>
        <Header/>
        <div className="container mt-5">
            <div className="row">
                <Form />
            </div>
        </div>
    </CategoriasProvider>
    

 )
}

export default App
