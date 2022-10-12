const Attendees = (props) => {
    return (
        <div className="card attendees-ctr">
            <h2 className="headline">Attendees</h2>
            <div >
                <div>
                    {props.attendees && props.attendees.map((name, index) => {
                        return <div className="attendee" key={index}>{name}</div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Attendees;

//once login complete, and global with user details exists, add an if statement to get "you"

// if(name === yourName) {
//     return <div className="attendee you">You</div>
// }