import account from '../images/account.png';
import cart from '../images/shopping-cart.png';
import logo from '../images/logo.png'
const Header = () => {
    return ( 
        <header>
<div className="logo">
        <a href=""><img src={logo} alt="EasyGames" id="logo" /></a>
    </div>
        <ul className="menu">
            <li><a href="">Categories</a></li>
            <li><a href=""><img src={account} alt="Account" /></a></li>
            <li><a href=""><img src={cart} alt="Cart" /></a></li>
        </ul>
        </header>
     );
}
 
export default Header;