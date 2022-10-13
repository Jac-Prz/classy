import Input from "./Input";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const NewClassForm = (props) => {

    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        location: "",
        capacity: ""
    });
    const [errorField, setErrorField] = useState(null)

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const data = {
        classname: formData.title,
        description: formData.description,
        date: formData.date,
        location: formData.location,
        capacity: formData.capacity,
        created_by: user._id,
        created_by_name: user.full_name
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title) {
            setErrorField("title")
            props.setError("Title is required")
        } else if (!formData.description) {
            setErrorField("description")
            props.setError("Description is required")
        } else if
            (!formData.date) {
            setErrorField("date")
            props.setError("Date is required")
        } else if
            (!formData.location) {
            setErrorField("location")
            props.setError("Location is required")
        } else if
            (!formData.capacity) {
            setErrorField("capacity")
            props.setError("Capacity is required")
        } else {
            addClass()
        }
    }

    const addClass = async () => {
        try {
            const response = await axios.post("/class/", JSON.stringify(data))
            console.log(response)
            navigate(`/detail/${response.data._id}`)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/404')
            } else {
                navigate('/error')
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <Input
                    name="title"
                    type="text"
                    placeholder="Title"
                    onChange={handleFormData}
                    value={formData.title}
                    error={(errorField === "title") ? true : false} />

                <Input
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={handleFormData}
                    value={formData.description}
                    error={(errorField === "description") ? true : false} />
                <Input
                    name="date"
                    type="text"
                    placeholder="Date"
                    onChange={handleFormData}
                    value={formData.date}
                    error={(errorField === "date") ? true : false} />
                <Input
                    name="location"
                    type="address"
                    placeholder="Location"
                    onChange={handleFormData}
                    value={formData.location}
                    error={(errorField === "location") ? true : false}
                />
                <Input
                    name="capacity"
                    type="number"
                    placeholder="Capacity"
                    onChange={handleFormData}
                    value={formData.capacity}
                    error={(errorField === "location") ? true : false}
                />
            </div>
            <button className="btn-lrg btn-green">CREATE NEW CLASS</button>
        </form>
    );
}

export default NewClassForm;