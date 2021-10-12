import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import logo from './../../images/logo.svg';
import shoppingcart from './../../images/shopping-cart.svg';
import wppcompany from './../../images/wppcompany.png';
import instagram from './../../images/instagram.png';
import facebook from './../../images/facebook.png';
import linkedin from './../../images/linkedin.png';

import SearchBox from './../SearchBox/SearchBox';
import Hero from './../Hero/Hero';
import ProductList from './../ProductList/ProductList';
import Brands from '../Brands/Brands';
import ImageFull from '../ImageFull/ImageFull';

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products?limit=4'
      );
      const postsData = await response.json();
      setProducts(postsData);
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchField.toString().toLowerCase())
  );
  return (
    <>
      <div className='home'>
        <header>
          <ul>
            <li>
              <img src={logo} alt='Jüssi' />
            </li>
            <li>
              <HashLink smooth to={'/home#nossas-solucoes'}>
                Nossas soluções
              </HashLink>
            </li>

            <li>
              <HashLink smooth to={'/home#quem-somos'}>
                Conheça a Jüssi
              </HashLink>
            </li>
          </ul>
          <ul>
            <li>
              <SearchBox placeholder='Busca' handleChange={handleChange} />
            </li>
            <li>
              <HashLink smooth to={'/home'}>
                Login
              </HashLink>
            </li>

            <li>
              <img src={shoppingcart} alt='Jüssi' />
            </li>
          </ul>
        </header>
        <Hero />
        <Brands />

        <ProductList stats={filteredProducts} id='nossas-solucoes' />

        <ImageFull />

        <div className='contato'>
          <h2>
            Essa loja foi construída usando uma das nossas soluções da
            plataforma VTEX. tenha a sua.
          </h2>
          <p>Entre em contato</p>
          <HashLink smooth to={'/home'}>
            comercial@jussi.com.br
          </HashLink>
        </div>
        <div className='subscribe'>
          <h2>receba novidades da nossa área de produtos digitais.</h2>
          <div>
            <input
              type='text'
              className='email'
              placeholder='Digite seu e-mail'
            />
            <button>CADASTRAR</button>
          </div>
        </div>
      </div>
      <footer>
        <img src={wppcompany} alt='WPP Company' />
        <div>
          <img src={facebook} alt='WPP Company' />
          <img src={instagram} alt='WPP Company' />
          <img src={linkedin} alt='WPP Company' />
        </div>
      </footer>
    </>
  );
};

export default Home;

