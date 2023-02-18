import React from 'react';
import HeaderCSS from './css/Header'

import logo from '../images/logo.png';
import search from '../images/search.png';
import bell from '../images/bell.png';
import avatar from '../images/avatar.jpg';
import arrow from '../images/arrow.png';

function Header() {
      return (
            <HeaderCSS>
                  <div className='container'>
                        <img src={ logo } className='logo' alt="Logo" />
                        <ul className='navegation-menu'>
                              <li>Inicio</li>
                              <li>Series</li>
                              <li>Filmes</li>
                              <li>Bombando</li>
                              <li>Minha lista</li>
                              <li>Navegar por idiomas</li>
                        </ul>

                        <div className='auxiliar-menu'>
                              <img className='icon' src={ search } alt="Seach" />
                              <img className='icon' src={ bell } alt="Bell" />
                              <div className='avatar'>
                                    <img className='picture' src={ avatar } alt="User Avatar" />
                                    <img className='arrow'src={ arrow } alt="Arrow" />
                              </div>
                        </div>
                  </div>
            </HeaderCSS>
      );
}

export default Header;