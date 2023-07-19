import support from "../images/support.png"
const Refundpolicy = () => {
    return ( 
        <div className="refund">
            <div className="image">
            <img src={support} alt="support" />
            </div>
            <div className="info"></div>
            <h1>Our 14 days refund policy</h1>
            <p>
            At our online games shop, we offer a refund policy to ensure your satisfaction. If you are not completely satisfied with your purchase.</p>
            <h3>Please note that certain conditions apply:</h3>
            <ul>
                <li>The game must not have been activated or played.</li>
                <li>The refund request must be made within the specified timeframe.</li>
                <li>Proof of purchase is required.</li>
            </ul>
            <p>
            Please contact our tehnical support if you need a refund.
            </p>
        </div>
     );
}
 
export default Refundpolicy;