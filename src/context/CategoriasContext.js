import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

//Crear context
export const CategoriasContext = createContext();

//Provider donde se encuentran las funciones y los states
const CategoriasProvider = (props) =>{
    const [categorias, setCategorias] = useState([]);

    //Cargamos las categorias
    useEffect(()=>{
        const getCategorias = async ()=>{
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            const categorias = await axios.get(url);
            setCategorias(categorias.data.drinks);
        }
        getCategorias();
    },[])
    return (
        <CategoriasContext.Provider
            value={{
                categorias,
                setCategorias
            }}>
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;