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

    const addClass = async (e) => {
        e.preventDefault();
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
        <form onSubmit={addClass}>
            <div className="input-container">
                <Input
                    name="title"
                    type="text"
                    placeholder="Title"
                    onChange={handleFormData}
                    value={formData.title} />
                <Input
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={handleFormData}
                    value={formData.description} />
                <Input
                    name="date"
                    type="date"
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
                    name="capacity"
                    type="number"
                    placeholder="Capacity"
                    onChange={handleFormData}
                    value={formData.capacity} />
            </div>
            <button className="btn-lrg btn-green">CREATE NEW CLASS</button>
        </form>
    );
}

export default NewClassForm;