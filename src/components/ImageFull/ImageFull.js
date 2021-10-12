import React from 'react';

import jussi from './../../images/image-jussi.png';

const ImageFull = (props) => {
  return (
    <div className='imagefull' id='quem-somos'>
      <div className='box'>
        <div className='text'>
          <h2>
            Olá, somos
            <br />a Jüssi
          </h2>
          <p>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
        </div>

        <button>Conheça a Jüssi</button>
      </div>

      <img src={jussi} alt='Jussi Products' />
    </div>
  );
};

export default ImageFull;
