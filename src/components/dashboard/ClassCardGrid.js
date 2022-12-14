import CardButton from './CardButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ClassCardGrid = (props) => {
    return (
        <div className="card card-grid-view" >
            <p className="card-date">{(new Date(props.data.date)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            <div className="card-heading">
                <h2 className="headline">{props.data.classname}</h2>
                <p>{props.data.created_by_name}</p>
            </div>
            <p className="card-desc">{props.data.description}</p>
            <p className="card-attend">
                <FontAwesomeIcon icon={faUser} style={{ marginRight: ".5rem" }} />
                {(props.detail && props.data.attendees.length == 0)
                    ? "No atendees yet, be the first to join!"
                    : props.data.attendees.length + " of " + props.data.no_of_places
                }
            </p>
            <div className="card-btn">
                <CardButton data={props.data} reset={() => props.reset()} />
            </div>
        </div>
    );
}

export default ClassCardGrid;