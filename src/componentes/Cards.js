import React from 'react'
import { CardP } from './CardP'
import  "./cards.css"

export const Cards = ({results} ) => {
  return (
    <div className='container'>
        
     <ul className='cards'>
    {
    results.map(p=>(
        <li className='card-item' key={p.name}>
             <CardP url={p.url}/>
        </li>
    ))
    }
  </ul>

    </div>
  )
}
