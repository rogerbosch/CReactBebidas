import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [busqueda, setBusquedaContext] = useState({
        nombre:'',
        categoria:''
    });
    const [recetas, setRecetas] = useState([]);
    const [consultar, setConsultar] = useState(false);

    useEffect(() =>{
        const getRecetas = async ()=>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;
            const resultado = await axios.get(url);
            setConsultar(false);
            setRecetas(resultado.data.drinks);
        }
        if(consultar){
            getRecetas();
        }
    },[busqueda]);

    return(
        <RecetasContext.Provider
            value={{
                recetas,
                setBusquedaContext,
                setConsultar
            }}>
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;