import useAuth from "../../context/useAuthHook"

const Attendees = (props) => {

    const {user} = useAuth()

    return (
        <div className="card attendees-ctr">
            <h2 className="headline">Attendees</h2>
            <div >
                <div>
                    {props.attendees && props.attendees.map((name, index) => {
                        return (name === user.full_name) 
                        ? <div className="attendee you" key={index}>You</div>
                        : <div className="attendee" key={index}>{name}</div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Attendees;


