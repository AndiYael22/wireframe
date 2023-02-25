import React from 'react';
import { Link } from 'react-scroll';
import "./css/nav+header+footer.css";

export const Header = () => {
  return (
    <header>
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
