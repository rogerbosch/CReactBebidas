import React, {useContext} from 'react';
import {RecetasContext} from "../context/RecetasContext";
import Receta from "./Receta";

function ListaRecetas(props) {

    const { recetas } = useContext(RecetasContext);

    return (
        <div className="row mt-5">
            {recetas.map( receta => (
              <Receta
                  key = {receta.idDrink}
                  receta={receta}>
              </Receta>
            ))}
        </div>
    );
}

export default ListaRecetas;