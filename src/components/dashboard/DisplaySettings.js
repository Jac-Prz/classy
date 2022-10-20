import "../../css/display-settings.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faGrip, faGripLines } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const DisplaySettings = (props) => {

    const [selectedOption, setSelectedOption] = useState("ALL CLASSES")
    const [hideDropdown, setHideDropdown] = useState(true);

    const selectedStyle = {
        order: "1",
        color: "#323C46"
    }

    const defaultStyle = {
        order: "2",
        color: "#A9AEB4"
    }

    const changeDisplayedClasses = (e) => {
        setSelectedOption(e.target.innerHTML)
        props.setShowingOption(e.target.innerHTML)
        setHideDropdown(true);
    }

    return (
        <section className="display-settings">
            <div className={hideDropdown ? "gry-bld showing-options hidden" : "gry-bld showing-options expanded"}>
                <p className="gry-bld ">SHOW: </p>
                <ul>
                    <li
                        tabindex="0"
                        className="all"
                        style={(selectedOption === "ALL CLASSES") ? selectedStyle : defaultStyle}
                        onClick={changeDisplayedClasses}
                    >
                        ALL CLASSES
                    </li>
                    <li
                        tabindex="0"
                        className="future"
                        style={(selectedOption === "FUTURE CLASSES") ? selectedStyle : defaultStyle}
                        onClick={changeDisplayedClasses}
                    >
                        FUTURE CLASSES
                    </li>
                    <li

                        tabindex="0"
                        className="past"
                        style={(selectedOption === "PAST CLASSES") ? selectedStyle : defaultStyle}
                        onClick={changeDisplayedClasses}
                    >
                        PAST CLASSES
                    </li>
                </ul>
                <p
                    tabindex="0"
                    className="gry-bld"
                    onClick={() => setHideDropdown(!hideDropdown)}><FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
            </div>
            <div className='layout-icon'>
                <div
                    tabindex="0"
                    className={props.gridDisplay ? "selected-layout" : null}
                    onClick={props.setToGrid}
                >
                    <FontAwesomeIcon icon={faGrip} />
                </div>
                <div
                    tabindex="0"
                    className={props.gridDisplay ? null : "selected-layout"}
                    onClick={props.setToList}
                >
                    <FontAwesomeIcon icon={faGripLines} />
                </div>
            </div>
        </section>
    );
}

export default DisplaySettings;