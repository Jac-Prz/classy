import "../css/header.css"
import Link from "./login/Link";
import UserIcon from "./UserIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {

    return (
        <header>
            <h3>Classy.io</h3>
            <div className="top-right">
                {props.topRight &&
                    (props.topRight === "signin") ? <Link linkTo="signUp" />
                    : (props.topRight === "signup") ? <Link linkTo="signIn" />
                        : (props.topRight === "userIcon") ? <UserIcon />
                            : <FontAwesomeIcon icon={faXmark} />
                }
            </div>
        </header>
    );
}

export default Header;