import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = useState(null);
  const [info, setReceta] = useState({});


  useEffect(() => {
    const consultaApi = async () => {
      if (!idReceta) return ;

        const url = `https:/www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const res = await axios.get(url);
            setReceta(res.data.drinks[0]); 
    }
    consultaApi();
  }, [idReceta]);


  return (
    <ModalContext.Provider
      value={{
        info,
        setIdReceta,
        setReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
