import account from '../images/account.png';
import cart from '../images/shopping-cart.png';
import logo from '../images/logo.png';
import burger from '../images/burger.png';
import Categories from './categories';
import React, { useState } from 'react';

const Header = () => {
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
        <li><a href="#" onClick={handleClick}>Categories</a></li>
        <li><a href=""><img src={account} alt="Account" /></a></li>
        <li><a href=""><img src={cart} alt="Cart" /></a></li>
        
        <div className="categories" style={show}>
        <Categories/>
      </div>
      </ul>
      <div className="mobilemenu">
            <img src={burger} alt="burger" />
            <ul>
              <div className="icons">
              <a href=""><img src={account} alt="Account" /></a>
              <a href=""><img src={cart} alt="Cart" /></a>
              </div>
              <Categories/>
            </ul>
      </div>
    </header>
  );
};

export default Header;