import "../../css/header.css"
import AlternateLogin from "../login/AlternateLogin";
import UserIcon from "./UserIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {

    return (
        <header>
            <h3>Classy.io</h3>
            <div className="top-right">
                {props.topRight &&
                    (props.topRight === "signin") ? <AlternateLogin linkTo="signUp" />
                    : (props.topRight === "signup") ? <AlternateLogin linkTo="signIn" />
                        : (props.topRight === "userIcon") ? <UserIcon />
                            : <FontAwesomeIcon icon={faXmark} />
                }
            </div>
        </header>
    );
}

export default Header;