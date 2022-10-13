import "../css/login.css"

import Header from "../components/header/Header";
import SignInForm from "../components/login/SignInForm";
import SignUpForm from "../components/login/SignUpForm";
import LogInMsg from "../components/login/LogInMsg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const LogIn = (props) => {

    const [msg, setMsg] = useState({
        signup: "Enter your details below.",
        signin: "Enter your details below.",
        signinError: false,
        signupError: false
    })

    return (
        <div className="main-container login-page">
            <Header topRight={props.type} />
            <div>
                <section className="quote-ctr">
                    <div >
                        <p className="quote">“Intelligence is like a four-wheel drive. It allows you to get stuck in more remote places..”</p>
                        <FontAwesomeIcon icon={faMinus} style={{ color: "#FF0000" }} />
                        <p> Garrison Kellor</p>
                    </div>
                </section>
                <section className="login">
                    <div>
                        {(props.type === "signup")
                            ? <LogInMsg heading="Get started absolutely free." msg={msg.signup} error={msg.signupError} />
                            : (props.type === "signin")
                                ? <LogInMsg heading="Sign in to Classy." msg={msg.signin} error={msg.signinError} />
                                : (props.type === "404")
                                    ? <LogInMsg heading="404 Error - page not found." msg="Seems like someone didn’t study hard enough in programming class! Please press the refresh button and everything should be fine again." />
                                    : <LogInMsg heading="Something went wrong" msg={"Seems like someone didn’t study hard enough in programming class! Please press the refresh button and everything should be fine again."} />
                        }
                        {(props.type === "signin")
                            ? <SignInForm handleErrorMsg={(msg) => { return setMsg({ signup: "Enter your details below.", signin: msg, signinError: true }) }} />
                            : (props.type === "signup")
                                ? <SignUpForm handleErrorMsg={(msg) => { return setMsg({ signup: msg, signin: "Enter your details below.", signupError: true }) }} />
                                : <Link to="/"> <button className="btn-lrg btn-blk">REFRESH</button></Link>
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LogIn;