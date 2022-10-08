import "../css/login.css"
import Header from "../components/Header";
import SignInForm from "../components/SignIn/SignInForm";
import SignUpForm from "../components/SignIn/SignUpForm";

const LogIn = (props) => {
    return (
        <div className="login-container">
            <Header topRight={props.type} />
            <section className="login">

                <h1 className="headline">
                    {(props.type === "signup")
                        ? "Get started absolutely free."
                        : "Sign in to Classy"}
                </h1>
                <p className="sub-head">Enter your details below</p>
                {(props.type === "signin")
                    ? <SignInForm />
                    : <SignUpForm />}
            </section>
        </div>
    );
}

export default LogIn;