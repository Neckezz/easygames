import paypal from "../images/paypal.png"
import paysafe from "../images/paysafe.png"
import visa from "../images/visa.png"
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="newsletter">
                <h1>Subscribe to our Newsletter:</h1>
                <input defaultValue={"example@gmail.com"} type="text" />
                <button>Sumbit</button>
            </div>
            <div className="information">
                <div className="locations">
                    <ul>
                        <h3>Visit us:</h3>
                        <li> 3, Anke Matic (Zemun, Belgrade)</li>
                        <li> 113, Beogradska(Cukarica, Belgrade)</li>
                        <li> 15b Aleksandra Vojinovica(Palilula,Belgrade)</li>
                    </ul>
                </div>
                <div className="support">
                    <h3>Need tehnical support?</h3>
                    <h3>Contact us 📱</h3>
                    <ul>
                        <li>+381 123 456 789</li>
                        <li>+381 987 654 321</li>
                    </ul>
                </div>
            </div>
            <div className="partners">
                    <img src={paypal} alt="Paypal" />
                    <img src={paysafe} alt="Paysafe" />
                    <img src={visa} alt="Visa" />
                </div>
            <div className="trademark">2023©Easygames All Rights Reserved</div>
        </div>
     );
}
 
export default Footer;