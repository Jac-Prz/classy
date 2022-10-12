import Header from "../components/header/Header";
import ClassCardGrid from "../components/dashboard/ClassCardGrid";
import ClassDetail from "../components/dashboard/ClassDetail";
import Attendees from "../components/detail/Attendees";
import AddButton from "../components/dashboard/AddButton";
import EditClass from "../components/detail/EditClass";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Detail = (props) => {

    const { user } = useContext(UserContext)

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

    const fetchClass = async () => {
        const response = await fetch(
            `https://testproject.optimistinc.com/api/class/${classId}`,
            {
                headers: {
                    optimist_api_key: "bQ0V2vc2F3dKadbAuUiV",
                },
            });
        const json = await response.json()
        console.log(json)
        setClassData(json);
    }
    useState(() => {
        fetchClass()
    })

    return (
        <div className="main-container">
            {!user ? <Navigate to="/" /> : null}
            <Header topRight="userIcon" back={true} />
            <div className="container">
                <ClassDetail classId={classId} />
                {!props.edit ? <ClassCardGrid data={classData} /> : <EditClass data={classData} />}
                <Attendees attendees={classData.attendees} />
                <AddButton />
            </div>
        </div>

    );
}

export default Detail;