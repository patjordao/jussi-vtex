import React from 'react';

import hero from './../../images/hero.png';

const Hero = (props) => {
  return (
    <div className='hero'>
      <div className='box'>
        <div className='text'>
          <h1>
            Criamos
            <br />
            lojas que
            <br />
            vendem mais.
          </h1>
          <p>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
        </div>

        <button>Veja nossas soluções</button>
      </div>

      <img src={hero} alt='Jussi Products' />
    </div>
  );
};

export default Hero;
