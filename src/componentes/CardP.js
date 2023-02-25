import React from 'react'
import { UseFetch } from '../UseFetch'
import './css/cards.css'
import "../index.css"
import "../App.css"
export const CardP = ({ url }) => {
  const estado = UseFetch(url)
  const { cargando, data } = estado

  return (
    <div className='cartas' id="pokemones">
      {cargando ? (
        <h1>cargando</h1>
      ) : (
        <div className='cards'>
          <div className='card-header'></div>
          <div className='card-body'>
            <img src={data.sprites.front_default} alt='pokemon' />
          </div>
          <div className='card-footer'>
            
            <p className='habilidades'>Habilidades</p>
            <ul className='habilidadess1'>
              {data.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className='piedecard'> <p className='card-text text-capitalize'>
              {data.id}: {data.forms[0].name}{' '}
            </p></div>
        </div>
      )}
    </div>
  )
}
