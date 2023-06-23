import Header from "./Components/Header";
import Form from "./Components/Form";
import ListaRecetas from "./Components/ListaRecetas";

import CategoriasProvider from "./Contex/CategoriasContex";
import RecetasProvider from "./Contex/RecetasContext";
import ModalProvider from "./Contex/ModalContex";

function App() {
    
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
