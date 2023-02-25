import React from 'react'
import "./css/menu.css";
export const Menu = () => {
  return (
    <div id="inicio" className='menu'>
      <button className='boton'>Login</button>
      <ul className='perfil'>
        <li className='lista'>perfil
        </li>
         <li className='lista'>subir archivo </li>
         <li className='lista'>favoritos</li>
      </ul>
    </div>
  )
}
