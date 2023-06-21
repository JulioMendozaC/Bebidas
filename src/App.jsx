import Header from './Components/Header'
import Form from './Components/Form'
import CategoriasProvider from './Contex/CategoriasContex'
import RecetasProvider from './Contex/RecetasContext'


function App() {


  return (

    <CategoriasProvider>
        <RecetasProvider>
        <Header/>
        <div className="container mt-5">
            <div className="row">
                <Form />
            </div>
        </div>
        </RecetasProvider>
    </CategoriasProvider>
    

 )
}

export default App
