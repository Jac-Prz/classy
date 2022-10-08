import Header from "../components/Header";
import ClassDetail from "../components/dashboard/ClassDetail";
import TickButton from "../components/dashboard/TickButton";
import Input from "../components/Input";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const EditClass = () => {

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


    return (
        <div className="main-container">
            <Header topRight="userIcon" />
            <div className="container">
                <div className="class-detail-ctr">
                    <ClassDetail />
                    <FontAwesomeIcon icon={faTrash} className="bin-icon"/>
                </div>

                <div className="card-container">
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
                        name="capacity"
                        type="number"
                        placeholder="Capacity"
                        onChange={handleFormData}
                        value={formData.capacity} />
                </div>
                <TickButton />
            </div>
        </div>

    );
}

export default EditClass;