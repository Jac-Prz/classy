import "../css/editclass.css"
import Header from "../components/Header";
import { useState } from "react";
import allClasses from "../data/data.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Input from "../components/Input";
import ClassDetail from "../components/dashboard/ClassDetail";
import TickButton from "../components/dashboard/TickButton";
import Attendees from "../components/dashboard/Attendees"

const EditClass = () => {

    const [formData, setFormData] = useState({
        title: allClasses[0].classname,
        description: allClasses[0].description,
        date: allClasses[0].date,
        location: allClasses[0].location,
        capacity: allClasses[0].no_of_places
    });

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="main-container">
            <Header topRight="userIcon" />
            <div className="container grid-display">
                <div className="class-detail-ctr">
                    <ClassDetail />
                    <FontAwesomeIcon icon={faTrash} className="bin-icon" />
                </div>
                <div className="cards-ctr  edit-class">
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
                    <div className="attendees-ctr">
                        <div className="card">
                            <Attendees />
                        </div>
                    </div>

                </div>
                <TickButton />
            </div>
        </div>
    );
}

export default EditClass;