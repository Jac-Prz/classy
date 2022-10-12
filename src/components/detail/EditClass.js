import Input from "../Input";
import TickButton from "./TickButton";
import Attendees from "./Attendees"
import ClassDetail from "./ClassDetail";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const EditClass = (props) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        classname: "",
        description: "",
        date: "",
        location: "",
        no_of_places: 0,
    });

    useEffect(() => {
        setFormData(props.data)
    }, [props])

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const json = editClass();
        console.log(json)
        if (json) {
            props.reset();
            navigate(`/detail/${props.data._id}`);
        }
    }

    const editClass = async () => {
        const response = await fetch(
            `https://testproject.optimistinc.com/api/class/${props.data._id}`,
            {
                method: "PUT",
                headers: {
                    'Content-Type': "application/json",
                    'optimist_api_key': "bQ0V2vc2F3dKadbAuUiV",
                },
                body: JSON.stringify(formData)
            });
        if (!response.ok) {
            console.log(response)
        }
        return await response.json()
    }


    return (
        <div className="detail-ctr">
            <ClassDetail classId={props.data._id} bin={true} />
            <div className="detail">
                <div className="card attendees-ctr">
                    <div>
                        <Input
                            name="classname"
                            type="text"
                            placeholder="Title"
                            onChange={handleFormData}
                            value={formData.classname} />
                        <Input
                            name="description"
                            type="text"
                            placeholder="Description"
                            onChange={handleFormData}
                            value={formData.description} />
                        <Input
                            name="date"
                            type="text"
                            placeholder="Date"
                            onChange={handleFormData}
                            value={formData.date} />
                        <Input
                            name="location"
                            type="address"
                            placeholder="Location"
                            onChange={handleFormData}
                            value={formData.location} />
                        <Input
                            name="no_of_places"
                            type="number"
                            placeholder="Capacity"
                            onChange={handleFormData}
                            value={formData.no_of_places} />
                    </div>
                </div>
                <Attendees attendees={props.data.attendees} />
            </div>
            <TickButton onClick={handleSubmit} />
        </div>
    );

}

export default EditClass;