import React ,{useState} from "react";
import { UseFetch } from "./UseFetch";
import {Cards} from './componentes/Cards'
import  "./componentes/css/cards.css"
import  "./componentes/css/nav+header+footer.css"
import  "./componentes/css/informacion.css"
import  "./componentes/css/regionesylegendarios.css"
import  "./componentes/css/menu.css"


export const Principal=()=>{
    const[url, setUrl]=useState("https://pokeapi.co/api/v2/pokemon?limit=6&offset=0")
    const estado=UseFetch(url)
    const{cargando,data}=estado
    cargando?console.log("cargando"):console.log(data.results)

    return(
        <div>
             <h1 className="titulo">Pokemones</h1>

             {
                cargando
                ?
                <h1>cargando...</h1>
                :
                <div >
              
                <Cards results={data.results}/>
               
                <div className="container m-auto">
                <button onClick={()=>setUrl(data.previous)} className="m-2 btn btn-dark">anterior</button>
                <button onClick={()=>setUrl(data.next)} className=" btn btn-dark ">sigiente</button>


                </div>
                </div>

             }
            
         </div>
        
    )
    
}
export default Principal