import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const AddButton = () => {
    return ( 
        <div className="add-btn-ctr">
        <button className="add-button centered tick">
            <FontAwesomeIcon icon={faCheck} />
        </button>
         </div>
     );
}

export default AddButton;