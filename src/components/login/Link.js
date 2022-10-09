const SignInLink = (props) => {

    return (
        <div>
        {(props.linkTo === "signIn")
            ? <p className="login-link "> Already an account? <a>SIGN IN</a></p>
            : <p className="login-link "> Dont have an account? <a>SIGN UP</a></p> }
            </div>
    );
}

export default SignInLink;