import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faGrip, faGripLines } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const DisplaySettings = (props) => {
    const [selectedOption, setSelectedOption] = useState()
    const [dropdown, setDropdown] = useState("hidden");

    const selectedStyle = {
        order: "1",
        color: "#323C46"
    }

    const defaultStyle = {
        order: "2",
        color: "#A9AEB4"
    }

    const handleListClick = (e) => {
        setSelectedOption(e.target.innerHTML)
        props.setShowingOption(e.target.innerHTML)
        setDropdown("hidden")
    }

    return (
        <div className="display-settings">
            <div className={"gry-bld showing-options " + dropdown}>
                <p className="gry-bld ">SHOW: </p>
                <ul>
                    <li
                        style= {(selectedOption === "ALL CLASSES")  ? selectedStyle : defaultStyle}
                        onClick={handleListClick}
                        >
                        ALL CLASSES
                    </li>
                    <li
                        style= {(selectedOption === "FUTURE CLASSES")  ? selectedStyle : defaultStyle}
                        onClick={handleListClick}
                        >
                        FUTURE CLASSES
                    </li>
                    <li
                        style= {(selectedOption === "PAST CLASSES")  ? selectedStyle : defaultStyle}
                        onClick={handleListClick}
                        >
                        PAST CLASSES
                    </li>
                </ul>
                <p className="gry-bld" onClick={() => setDropdown("expanded")}><FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
            </div>
            <div className='layout-icon'>
                <div
                    className={props.gridDisplay ? "selected-layout" : null}
                    onClick={props.setToGrid}
                >
                    <FontAwesomeIcon icon={faGrip} />
                </div>
                <div
                    className={props.gridDisplay ? null : "selected-layout"}
                    onClick={props.setToList}
                >
                    <FontAwesomeIcon icon={faGripLines} />
                </div>
            </div>
        </div >
    );
}

export default DisplaySettings;