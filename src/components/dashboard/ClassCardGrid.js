import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const ClassCardGrid = (props) => {

    return (
        <div className="card card-grid-view" >
            <p className="card-date">{props.data.date}</p>
            <div className="card-heading">
                <h2 className="headline">{props.data.classname}</h2>
                <p>{props.data.created_by_name}</p>
            </div>
            <p className="card-desc">{props.data.description}</p>
            <p className="card-attend"><FontAwesomeIcon icon={faUser} /> {props.data.attendees.length} of {props.data.no_of_places}</p>
            <div className="card-btn">
                <button className="btn-sml btn-green">JOIN</button>
            </div>
        </div>
    );
}

export default ClassCardGrid;