import Header from "../components/Header";
import ClassDetail from "../components/dashboard/ClassDetail";
import TickButton from "../components/dashboard/TickButton";
import Input from "../components/Input";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import addClasses from "../data/data.json"

const EditClass = () => {

    const [formData, setFormData] = useState({
        title: addClasses[0].classname,
        description: addClasses[0].description,
        date: addClasses[0].date,
        location: addClasses[0].location,
        capacity: addClasses[0].no_of_places
    });

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return (
        <div className="main-container">
            <Header topRight="userIcon" />
            <div className="container grid-display">
                
                <div className="edit-class-ctr">
                <div className="card">
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
                </div>
                <TickButton />
            </div>
        </div>

    );
}

export default EditClass;