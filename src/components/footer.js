const Footer = () => {
    return ( 
        <div className="footer">
            <div className="newsletter">
                <h1>Subscribe to our Newsletter:</h1>
                <input type="text" />
                <button>Sumbit</button>
            </div>
            <div className="information">
                <img src="" alt="Logo" />
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
                    <h3>Contact us:</h3>
                    <ul>
                        <li>+381 123 456 789</li>
                        <li>+381 987 654 321</li>
                    </ul>
                </div>
                <div className="socialmedia">
                    <img src="" alt="Instagram" />
                    <img src="" alt="Tiktok" />
                    <img src="" alt="Youtube" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;