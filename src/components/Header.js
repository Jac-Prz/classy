import "../css/header.css"
import SignUpLink from "./SignIn/SignUpLink";
import SignInLink from "./SignIn/SignInLink";

const Header = (props) => {

    return (
        <header>
            <h3>Classy.io</h3>
            <div className="top-right">
                {props.topRight &&
                    (props.topRight === "signin") ? <SignUpLink />
                    : (props.topRight === "signup") ? <SignInLink />
                        : null
                }
            </div>
        </header>
    );
}

export default Header;