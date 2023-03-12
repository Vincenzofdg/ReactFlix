import React from 'react';
import HeaderCSS from './css/Header'

import logo from '../assets/Logo.png';
import search from '../assets/Search.png';
import bell from '../assets/Bell.png';
import avatar from '../assets/Avatar.jpg';
import arrow from '../assets/Arrow-Menu.png';

function Header() {
      const menuItens = () => {
            const topics = ['Home', 'Series', 'Films', 'Minha Lista'];
            return topics.map((topic) => (
                  <li
                        key={topic + '-key'}
                  >
                        { topic }
                  </li>
            ));
      }

      return (
            <HeaderCSS>
                  <div className='container'>
                        <img src={ logo } className='logo' alt="Logo" />
                        <ul className='navegation-menu'>
                              { menuItens() }
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