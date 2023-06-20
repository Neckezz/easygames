import account from '../images/account.png';
import cart from '../images/shopping-cart .png';
import accountB from '../images/accountB.png';
import cartB from '../images/shopping-cartB .png';
import logo from '../images/logo.png';
import burger from '../images/burger.png';
import Categories from './categories';
import closeIcon from '../images/x.png';
import React, { useState } from 'react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  const [display, setDisplay] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setDisplay(!display);
  };

  const show = {
    display: display ? 'block' : 'none'
  };

  return (
    <header>
      <div className="logo">
        <a href=""><img src={logo} alt="EasyGames" id="logo" /></a>
      </div>
      
      <ul className="menu">
        <li id="categories"><a href="#" onClick={handleClick}>Categories</a></li>
        <li><a href=""><img src={accountB} alt="Account" /></a></li>
        <li><a href=""><img src={cartB} alt="Cart" /></a></li>
        
        <div className="categories" style={show}>
        <Categories/>
      </div>
      </ul>
      
      <div className="mobile-menu">
            <img  onClick={toggleMenu} id="burger" src={burger} alt="burger"/>
              <div className={`nav ${isOpen ? 'open' : ''}`}>
              <img onClick={closeMenu} id="close" src={closeIcon} alt="x" />
              <a href=""><img src={account} alt="Account"/></a>
              <a href=""><img src={cart} alt="Cart"/></a>
              <Categories/>
              </div>
      </div>
    </header>
  );
};

export default Header;