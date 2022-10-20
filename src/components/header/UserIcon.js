import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import useAuth from '../../context/useAuthHook';

const UserIcon = () => {
    const { user, setUser } = useAuth();
    const [view, setView] = useState(false);

    return (
        <div>
            <div className='user-icon-ctr'>
                {user ? <div className="user-icon sml-gry">{user.first_name.slice(0, 1)}{user.last_name && user.last_name.slice(0, 1)}</div> : null}
                {user ? <p className='sml-gry'>{user.first_name} {user.last_name && user.last_name}</p> : null}
                <button role="button" tabindex="0" className="sml-gry caret-down" onClick={() => setView(!view)}>
                    <FontAwesomeIcon icon={faCaretDown} />
                </button>
            </div>
            <button
                className='logout sml-gry'
                style={{ display: view ? "block" : "none" }}
                onClick={() => setUser(null)}
            >
                logout
            </button>
        </div>
    );
}

export default UserIcon;