import { Link } from "react-router-dom";

const AlternateLogin = (props) => {
    return (
        <div>
        {(props.linkTo === "signIn")
            ? <p className="login-link "> Already an account? <Link to="/">SIGN IN</Link></p>
            : <p className="login-link "> Dont have an account? <Link to="/signup">SIGN UP</Link></p> }
            </div>
    );
}

export default AlternateLogin;