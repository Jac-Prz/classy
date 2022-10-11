import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import { UserContext } from "../../context/UserContext"
const UserIcon = () => {
    const { user, setUser } = useContext(UserContext);
    const [view, setView] = useState(false);

    return (
        <div>
        <div className='user-icon-container'>
            { user  ? <div className="user-icon sml-gry">JP</div> : null }
            {user ? <p className='sml-gry'>{user.first_name} {user.last_name && user.last_name}</p> : null }
            <div className="sml-gry caret-down" onClick={()=> setView(!view)}>
            <FontAwesomeIcon icon={faCaretDown} />
            </div>
        </div>
        <div 
        className='logout sml-gry'
        style={{display: view ? "block" : "none"}}
        onClick={()=> setUser(null)}
        >
        logout
        </div>
        </div>
    );
}

export default UserIcon;