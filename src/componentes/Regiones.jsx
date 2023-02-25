import React, { useState, useEffect } from 'react';
import imagenes from './imagenes';
import "../componentes/css/regionesylegendarios.css";
import { motion } from "framer-motion";

export const Regiones = () => {

  const [posicion, setPosicion] = useState(0);
  const [velocidad, setVelocidad] = useState(3);
  imagenes.sort((a, b) => a.title.localeCompare(b.title));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosicion(posicion => {
        const nuevaPosicion = posicion - velocidad;
        if (nuevaPosicion <= -5478) {
          return 0;
        } else {
          return nuevaPosicion;
        }
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, [velocidad]);
  return (
    <motion.div className='Regiones' id="regiones">
         <p className='tituloregiones'>Regiones pokemon</p>
      <motion.div className="slider" style={{x: posicion}} drag="x" dragConstraints={{right:0, left:-5478}}>
        {imagenes.map(imagen => (
          <motion.div className="item" key={imagen.src}>
            <img className='imagenesRegiones' src={imagen.src} alt=""/>
            <h2>{imagen.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
