import React, {useEffect,useState, createContext} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) =>{

    const [idReceta, setIdReceta] = useState(null);
    const [informacion, setReceta] = useState({

    });
    useEffect(()=>{
        const obtenerReceta = async () =>{
            if(idReceta === null) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resultado = await axios.get(url);
            setReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    },[idReceta]);
    return(
      <ModalContext.Provider
          value ={{
              informacion,
              setIdReceta,
              setReceta
          }}>
          {props.children}
      </ModalContext.Provider>
    );

}
export default ModalProvider;