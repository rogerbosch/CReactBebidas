import React, {useContext, useState} from 'react';
import {CategoriasContext} from "../context/CategoriasContext";
import {RecetasContext} from "../context/RecetasContext";

function Formulario(props) {

    const {categorias} = useContext(CategoriasContext);
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const getDatosReceta = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
        setConsultar(true);
    }
    const { setBusquedaContext,setConsultar } = useContext(RecetasContext);

    return (
        <form className="col-12"
            onSubmit={ e =>{ e.preventDefault(); setBusquedaContext(busqueda);}}>
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingreiente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={getDatosReceta}/>
                </div>
                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control"
                        onChange={getDatosReceta}>
                        <option value=""> -- Selecciona categoría -- </option>
                        {
                            categorias.map(categoria=>(
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                > {categoria.strCategory}</option>

                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Buscar recetas"/>

                </div>
            </div>
        </form>
    );
}

export default Formulario;