import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faGrip, faGripLines } from '@fortawesome/free-solid-svg-icons'

const DisplaySettings = () => {
    
    return (
        <div className="display-settings">
            <p className="gry-bld">
                SHOW:
                <span> ALL CLASSES <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></span>
            </p>
            <div className='layout-icon'>
                <div className="selected-layout"><FontAwesomeIcon icon={faGrip} /></div>
                <div><FontAwesomeIcon icon={faGripLines} /></div>
            </div>
        </div>
    );
}

export default DisplaySettings;