import account from '../images/account.png';
import cart from '../images/shopping-cart .png';
import accountB from '../images/accountB.png';
import cartB from '../images/shopping-cartB .png';
import logo from '../images/logo.png';
import burger from '../images/burger.png';
import Categories from './categories';
import closeIcon from '../images/x.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
      <header>
                <div className="logo">
                  <Link to={'/'}><img src={logo} alt="EasyGames" id="logo" /></Link>
                </div>
          
                <ul className="menu">

                  <li><Link to={'/register'}><img src={accountB} alt="Account" /></Link></li>
                  <li><Link to={'/cart'}><img src={cartB} alt="Cart" /></Link></li>
                </ul>
        
                <div className="mobilemenu">
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