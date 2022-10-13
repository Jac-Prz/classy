import "../../css/header.css"
import AlternateLogin from "../login/AlternateLogin";
import UserIcon from "./UserIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = (props) => {

    return (
        <header>
            <h3>Classy.io</h3>
            {props.back ? <div>
                <Link to="/" className="back arrow"><FontAwesomeIcon icon={faArrowLeft} /> <span>Back to classes</span></Link>
            </div> : null}
            <div className="top-right">
                {props.topRight &&
                    (props.topRight === "signin") ? <AlternateLogin linkTo="signUp" />
                    : (props.topRight === "signup") ? <AlternateLogin linkTo="signIn" />
                        : (props.backCross) ? <Link to="/" className="back"><FontAwesomeIcon icon={faXmark} /> <span>Close</span></Link>
                            : (props.topRight === "userIcon") ? <UserIcon /> : null
                            
                }
            </div>
        </header>
    );
}

export default Header;