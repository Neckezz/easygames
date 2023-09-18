import { Link } from "react-router-dom";
const RegisterAccount = () => {
    const Notification=()=>{
        alert("Account Created (There are no accounts bcs this is frontened only project)")
    }
    return ( 
        <div className="login">
            <h2>Welcome to the register page!</h2>
            <h2 class="special">Please enter your information to procede</h2>
            <div className="form">
            <h4>Username:</h4>
            <input defaultValue={"Email address"} id="email" type="email" />
            <h4>Email address:</h4>
            <input defaultValue={"Email address"} id="email" type="email" />
            <h4>Password:</h4>
            <input defaultValue={"Password"} type="password" /><br />
            <Link to="/login">Already created account? Click here</Link> <br />
            <button onClick={Notification}>Create Account</button>
            </div>
        </div>
     );
}
 
export default RegisterAccount;