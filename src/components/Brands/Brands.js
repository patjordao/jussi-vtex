import React from 'react';
import arrow from './../../images/arrow.png';
import brastemp from './../../images/logo-brastemp.png';
import compracerta from './../../images/logo-compracerta.png';
import consul from './../../images/logo-consul.png';
import thebar from './../../images/logo-thebar.png';


const Brands = (props) => {
  return (
    <div className='brands'>
      <p>Nossas principais lojas VTEX</p>
      <img src={arrow} alt='vtex' />
      <img src={brastemp} alt='Brastemp' />
      <img src={compracerta} alt='Compra Certa' />
      <img src={consul} alt='Consul' />
      <img src={thebar} alt='The Bar' />
    </div>
  );
};

export default Brands;

