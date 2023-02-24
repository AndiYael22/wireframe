import React from 'react'
import { UseFetch } from '../UseFetch'

export const CardP = ({url}) => {
    const estado=UseFetch(url)
    const{cargando,data}=estado
   
 
    return (
    <div>
{
    cargando
    ?
        <h1>cargango</h1>
        :
        <div className='cards'>
          <div className='card-header'>
          <h4 className='card-title'>
            {data.id}
          </h4>
             </div>
             <div className='card-body'> 
             <img src={data.sprites.front_default} alt="pokemon"/> 
             </div>
             <div className='card-footer'>
             <p className='card-text text-capitalize'> {data.forms[0].name} </p>
             </div>

        </div>
}

    </div>
  )
}
