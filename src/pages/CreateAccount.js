import  {Link} from 'react-router-dom';
const LoginPage = () => {
    const Notification=()=>{
        alert("Login successful (There are no accounts bcs this is frontened only project)")
    }
    return ( 
        <div className="login">
            <h2>Welcome to the login page!</h2>
            <h2 class="special">Please enter your information below:</h2>

            <div className="form">
            <h4>Email address:</h4>
            <input defaultValue={"Email address"} id="email" type="email" />
            <h4>Password:</h4>
            <input defaultValue={"Password"} type="password" /><br />
            <Link to="/register">New here? Register now!</Link> <br />
            <button onClick={Notification}>Create Account</button>
            </div>
        </div>
     );
}
 
export default LoginPage;