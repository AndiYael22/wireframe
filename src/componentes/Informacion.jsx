import React from 'react'
import ash from "../imagenes/protagonistas/pokemon1.jpg"
import red from "../imagenes/protagonistas/pokemon.jpg"
import nueva from "../imagenes/protagonistas/nueva.jpg"
export const Informacion = () => {
  return (
    <div className='protas'>
       <div className='informacion'>
      
      <h1>Historia</h1>
   <p className='historia'>La historia de Pokémon se remonta a la infancia de Satoshi Tajiri (1965), diseñador japonés de videojuegos, quien nació en Machida, prefectura de Tokio, en un Japón todavía rural; cuando era niño, le encantaba explorar entre la hierba alta en bosques, lagos y pantanos, en la búsqueda de insectos, los cuáles coleccionaba e intercambiaba con sus amigos. En alguna ocasión, comentó que él “quería ser entomólogo”; sin embargo, su padre quería que Satoshi fuera ingeniero, así que lo mandó a Tokio. La escuela no le gustaba, al punto que regresó a su casa para encontrarse que aquellos sitios de su infancia ahora estaban convertidos en estacionamientos y centros comerciales, en esas circunstancias fue que la conceptualización de Pokémon surgió. Satoshi nunca imaginó que su pasatiempo favorito se convertiría en la franquicia de medios más grande del planeta.</p>
    </div>
    
   <img className='prota' src={red} alt="" />
   <img className='prota' src={ash} alt="" />
   <img className='prota' src={nueva} alt="" />
    </div>
  )
}
