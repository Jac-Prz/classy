import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const UserIcon = () => {

    return (
        <div className='user-icon-container'>
            <div className="user-icon">JP</div>
            <div className="user-icon-dropdown">
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
        </div>
    );
}

export default UserIcon;