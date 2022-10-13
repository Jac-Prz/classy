import "../css/detail.css"
import Header from "../components/header/Header";
import EditClassForm from "../components/detail/EditClassForm";
import DisplayView from "../components/detail/DisplayView";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";

const Detail = (props) => {

    const navigate = useNavigate();
    let { classId } = useParams();
    const [classData, setClassData] = useState({
        _id: "",
        classname: "",
        date: "",
        attendees: [],
        no_of_places: 0,
        description: "",
        location: "",
        created_by: "",
        create_date: "",
        data_owner: "",
        __v: 0
    });

    const getClass = async () => {
        try {
            const response = await axios.get(`/class/${classId}`);
            setClassData(response.data);
        } catch (err) {
            if (err.response.status === 404) {
                navigate('/404');
            } else {
                navigate('/error')
            }
        }
    }

    useState(() => {
        getClass()
    }, [])

    return (
        <div className="main-container">
            <Header topRight="userIcon" back={true} />
            {!props.edit
                ? <DisplayView detail={true} data={classData} reset={getClass} />
                : <EditClassForm data={classData} reset={getClass} />
            }
        </div>
    );
}

export default Detail;