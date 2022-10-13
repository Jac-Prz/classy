import Input from "../Input";
import TickButton from "./TickButton";
import Attendees from "./Attendees"
import ClassDetail from "./ClassDetail";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditClassForm = (props) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        classname: "",
        description: "",
        date: "",
        location: "",
        no_of_places: 0,
    });
    const [errorField, setErrorField] = useState(null);

    useEffect(() => {
        setFormData(props.data)
    }, [props])

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.classname) {
            setErrorField("classname")
        } else if (!formData.description) {
            setErrorField("description")
        } else if (!formData.date) {
            setErrorField("date")
        } else if (!formData.location) {
            setErrorField("location")
        } else if (!formData.no_of_places) {
            setErrorField("no_of_places")
        } else {
            editClass();
        }
    }

    const editClass = async () => {
        try {
            const response = await axios.put(`/class/${props.data._id}`, JSON.stringify(formData));
            props.reset();
            navigate(`/detail/${props.data._id}`);
        } catch (err) {
            if (err.status === 404) {
                navigate('/404')
            } else {
                navigate('/error')
            }
        }
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
                            value={formData.classname}
                            error={(errorField === "classname") ? true : false}
                        />
                        <Input
                            name="description"
                            type="text"
                            placeholder="Description"
                            onChange={handleFormData}
                            value={formData.description}
                            error={(errorField === "description") ? true : false}
                        />
                        <Input
                            name="date"
                            type="text"
                            placeholder="Date"
                            onChange={handleFormData}
                            value={formData.date}
                            error={(errorField === "date") ? true : false}
                            className={(formData.date.length > 0 )? "active" : null}
                        />
                        <Input
                            name="location"
                            type="address"
                            placeholder="Location"
                            onChange={handleFormData}
                            value={formData.location}
                            error={(errorField === "location") ? true : false}
                        />
                        <Input
                            name="no_of_places"
                            type="number"
                            placeholder="Capacity"
                            onChange={handleFormData}
                            value={formData.no_of_places}
                            error={(errorField === "no_of_places") ? true : false}
                        />
                    </div>
                </div>
                <Attendees attendees={props.data.attendees} />
            </div>
            <TickButton onClick={handleSubmit} />
        </div>
    );
}

export default EditClassForm;