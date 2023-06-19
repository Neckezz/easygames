import account from '../images/account.png';
import cart from '../images/shopping-cart.png';
import logo from '../images/logo.png';
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
        <ul>
          <li><a href="">Playstation 5 games</a></li>
          <li><a href="">Playstation 4 games</a></li>
          <li><a href="">Xbox games</a></li>
          <li><a href="">Nintendo Switch</a></li>
          <li><a href="">PC Games</a></li>
        </ul>
      </div>
      </ul>
    </header>
  );
};

export default Header;