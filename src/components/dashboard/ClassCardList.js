const ClassCardList = (props) => {

    // list view - max 30 characters in desc
    const limitCharacters = (string) => {
        if (string.length > 30) {
            return string.slice(0, 30) + "..."
        } else { 
            return string
         }
    }

    return (
        <div className="card card-list-view">
            <p className="card-date">{props.data.date}</p>
            <h2 className="headline card-heading">{props.data.classname}</h2>
            <p className="author">{props.data.created_by_name}</p>
            <p className="card-desc">{limitCharacters(props.data.description)}</p>
            <p className="card-attend">{props.data.attendees.length} of {props.data.no_of_places}</p>
            <div className="card-btn">
                <button className="btn-sml btn-green">JOIN</button>
            </div>
        </div>
    );
}

export default ClassCardList;