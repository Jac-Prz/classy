import "../css/header.css"
import SignUpLink from "./signin/SignUpLink";
import SignInLink from "./signin/SignInLink";
import UserIcon from "./UserIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {

    return (
        <header>
            <h3>Classy.io</h3>
            <div className="top-right">
                {props.topRight &&
                    (props.topRight === "signin") ? <SignUpLink />
                    : (props.topRight === "signup") ? <SignInLink />
                        : (props.topRight === "userIcon") ? <UserIcon />
                            : <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                }
            </div>
        </header>
    );
}

export default Header;