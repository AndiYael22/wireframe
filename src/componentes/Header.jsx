import React from 'react';
import { Link } from 'react-scroll';
import "./css/nav+header+footer.css";
import titulo from "../imagenes/footer/pokemon.png"
import pokebola from "../imagenes/footer/pokebola.png"

export const Header = () => {
  return (
    <header>
      <div className='logo'>
      <img className='pokebola' src={pokebola} alt="" />
      
        <img className='titulo1' src={titulo} alt="" />
        <img className='pokebola' src={pokebola} alt="" />
        </div>
      <nav className="opciones">
        <ul>
          <li>
            <Link to="inicio" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="pokemones" smooth={true} duration={500}>
              Pokemones
            </Link>
          </li>
          <li>
            <Link to="regiones" smooth={true} duration={500}>
              Regiones
            </Link>
          </li>
        </ul>
      </nav>
      <button id="boton-arriba" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Ir arriba</button>
    </header>
  );
};
