import "../css/detail.css"
import Header from "../components/header/Header";
import EditClass from "../components/detail/EditClass";
import DisplayView from "../components/detail/DisplayView";
import { useParams } from "react-router-dom";
import { useState} from "react";


const Detail = (props) => {
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
            <Header topRight="userIcon" back={true} />
            {!props.edit
                ? <DisplayView data={classData} reset={() => fetchClass()} />
                : <EditClass data={classData} reset={() => fetchClass()} />
            }
        </div>
    );
}

export default Detail;