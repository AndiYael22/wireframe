import React,{ useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Legendarios() {
  const [ventanaVisible, setVentanaVisible] = useState(false);
  const mostrarVentanaFlotante = () => {
    setVentanaVisible(true);
  };

  const ocultarVentanaFlotante = () => {
    setVentanaVisible(false);
  };
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="itemimg"
          src="https://esports.as.com/2019/09/10/bonus/Pokemon-legendarios-historia_1280882010_255862_1024x576.png"
          alt="First slide"
        />
        <h3 className='nombre'>Arceus</h3>
          <p className='descripcion'>En los inicios de la existencia, toda la masa del universo estaba condensada en un solo punto: un huevo. Al abrirse provocó una gran explosión de la cual surgieron tanto el universo como Arceus. Vamos, un Big Bang pero con un ciervo con poderes. Se le considera el creador de todo, origen de toda la existencia, tanto humana como Pokémon.</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="itemimg"
          src="https://sm.ign.com/t/ign_es/feature/1/10-best-le/10-best-legendary-pokemon_wfar.1280.jpg"
          alt="Second slide"
        />
      <h3 className='nombre'>Mewtwo</h3>
          <p className='descripcion'>Mewtwo es una criatura ficticia de la franquicia Pokémon. Se trata de un Pokémon Legendario tipo psíquico, que aparece por primera vez en Pokémon Red y Blue, donde además es capturable por el jugador. Es el Pokémon número ciento cincuenta del Pokédex nacional</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="itemimg"
          src="https://i.blogs.es/3e0991/pokemon-scarlet-and-violet-the-new-professors-and-the-legendaries/1366_2000.jpeg"
          alt="Third slide"
        />
          <h3 className='nombre'>Koraidon </h3>
          <p className='descripcion'>es un Pokémon legendario de tipo lucha/dragón introducido en la novena generación. Es la mascota de Pokémon Escarlata. Además, es el Pokémon paradoja del pasado relacionado con Cyclizar y anteriormente era conocido como Reyalado
</p>
      </Carousel.Item>
    </Carousel>
    <div>
      <button className="agregar" onClick={mostrarVentanaFlotante}>
        Agregar legendario
      </button>
      {ventanaVisible && (
        <div className="ventanaFlotante">
          <form>
            <h2>Agregar legendario</h2>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Información" />
            <input type="file" />
            <button type="submit">Agregar</button>
            <button onClick={ocultarVentanaFlotante}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
}

export default Legendarios;