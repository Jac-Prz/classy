import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AddButton = () => {
    return (
        <div className="add-btn-ctr" >
            <Link to="/newclass" className="add-button centered add">
                <FontAwesomeIcon icon={faPlus} />
            </Link>
        </div>
    );
}

export default AddButton;