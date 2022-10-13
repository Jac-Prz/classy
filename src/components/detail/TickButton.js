import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const TickButton = (props) => {
    return (
        <div className="add-btn-ctr">
            <button
                className="add-button centered tick"
                onClick={(e) => props.onClick(e)}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </div>
    );
}

export default TickButton;