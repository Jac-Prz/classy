import "../css/login.css"
import Header from "../components/Header";
import SignInForm from "../components/login/SignInForm";
import SignUpForm from "../components/login/SignUpForm";
import SignInMsg from "../components/login/LogInMsg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import LogInMsg from "../components/login/LogInMsg";

const LogIn = (props) => {
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
                            ? <LogInMsg heading="Get started absolutely free." msg="Enter your details below." />
                            : (props.type === "signin")
                                ? <LogInMsg heading="Sign in to Classy." msg="Enter your details below." />
                                : (props.type === "404")
                                    ? <LogInMsg heading="404 Error - page not found." msg="Seems like someone didn’t study hard enough in programming class! Please press the refresh button and everything should be fine again." />
                                    : <LogInMsg heading="Something went wrong" msg={"Seems like someone didn’t study hard enough in programming class! Please press the refresh button and everything should be fine again." }/>
                        }
                        {(props.type === "signin")
                            ? <SignInForm />
                            : (props.type === "signup")
                                ? <SignUpForm />
                                : <button className="btn-lrg btn-blk">REFRESH</button>}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LogIn;