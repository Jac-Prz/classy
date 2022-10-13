import axios from "../../api/axios";
import { UserContext } from "../../context/UserContext"
import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CardButton = (props) => {

    const { user } = useContext(UserContext);
    const [btnType, setBtnType] = useState("join")
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log(props.data.attendees.length)
        if (props.data.attendees.length === props.data.no_of_places && !props.data.attendees.includes(user.full_name)) {
            setBtnType("full")
        } else if (props.data.created_by === user._id) {
            setBtnType("edit")
        } else if (props.data.attendees.includes(user.full_name)) {
            setBtnType("leave")
        } else if (!props.data.attendees.includes(user.full_name)) {
            setBtnType("join")
        }
    }, [props])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (btnType === "full") {
            //nothing happens
        } else if (btnType === "join") {
            subscribeToClass()
        } else if (btnType === "leave") {
            leaveClass()
        } else if (btnType === "edit") {
            navigate(`/editclass/${props.data._id}`);
        }
    }

    const data = {
        class_id: props.data._id,
        username: user.full_name
    }

    const subscribeToClass = async () => {
        try {
            const response = await axios.post('/subscribe/', JSON.stringify(data))
            console.log(response)
            setBtnType("leave")
            if (location.pathname.includes("detail")) {
                props.reset()
            }
        }
        catch (err) {
            if (err.status === 404) {
                navigate('/404')
            } else {
                navigate('/error')
            }
        }
    }

    const leaveClass = async () => {
        try {
            const response = await axios.delete('/subscribe/', { data: JSON.stringify(data) })
            console.log(response)
            setBtnType("join")
            if (location.pathname.includes("detail")) {
                props.reset()
            }
        }
        catch (err) {
            if (err.status === 404) {
                navigate('/404')
            } else {
                navigate('/error')
            }
        }
    }

    return (
        <button
            className={`btn-sml ${btnType}`}
            style={{cursor: (btnType === "full") ? "not-allowed": "pointer"}}
            onClick={handleSubmit}>
            {btnType.toUpperCase()}
        </button>
    );
}

export default CardButton