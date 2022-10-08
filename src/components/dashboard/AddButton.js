import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddButton = () => {
    return ( 
        <div className="add-btn-ctr">
        <button className="add-button centered add">
            <FontAwesomeIcon icon={faPlus} />
        </button>
         </div>
     );
}

export default AddButton;