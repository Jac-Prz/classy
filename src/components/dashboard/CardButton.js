import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom";

const CardButton = (props) => {

    const { user } = useContext(UserContext);
    const [btnType, setBtnType] = useState("join")
    const navigate = useNavigate();

    useEffect(() => {

        if (props.data.created_by === user._id) {
            setBtnType("edit")
        } else if (props.data.attendees.includes(user.full_name)) {
            setBtnType("leave")
        } else if (!props.data.attendees.includes(user.full_name)) {
            setBtnType("join")
        }
    }, [props])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (btnType === "join") {
            handleAttendance("POST")
            setBtnType("leave")
        } else if (btnType === "leave") {
            handleAttendance("DELETE")
            setBtnType("join")
        } else if (btnType === "edit") {
            navigate(`/editclass/${props.data._id}`);
        }
    }

    const handleAttendance = async (type) => {
        const data = {
            class_id: props.data._id,
            username: user.full_name
        }
        const response = await fetch(
           ' https://testproject.optimistinc.com/api/subscribe/',
            {
                method: type,
                headers: {
                    'Content-Type': 'application/json',
                    'optimist_api_key': "bQ0V2vc2F3dKadbAuUiV",
                },
                body: JSON.stringify(data)
            }
        )
        if (!response.ok) {
            console.log(response)
        } else {
            const json = await response.json();
            console.log(json);
        }
    }

    return (

        <button
            className={`btn-sml ${btnType}`}
            onClick={handleSubmit}>
            {btnType.toUpperCase()}
        </button>

    );
}

export default CardButton;