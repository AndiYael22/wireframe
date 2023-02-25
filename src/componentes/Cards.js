import React from 'react'
import { CardP } from './CardP'
import  "./css/cards.css"


export const Cards = ({ results }) => {
  return (
    <div className='container' >
      <div className='row'>
        {results.map(p => (
          <div className='col-md-4 mb-3' key={p.name}>
            <CardP url={p.url}/>
          </div>
          
        ))}
      </div>
    </div>
  );
};
