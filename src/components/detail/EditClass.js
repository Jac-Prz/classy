import Input from "../Input";
import { useEffect, useState } from "react";

const EditClass = (props) => {

    const [formData, setFormData] = useState({
        classname: props.data.classname,
        description: props.data.description,
        date: props.data.date,
        location: props.data.location,
        no_of_places: props.data.no_of_places
    });

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="card">
            <Input
                name="title"
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
                name="capacity"
                type="number"
                placeholder="Capacity"
                onChange={handleFormData}
                value={formData.no_of_places} />
        </div>
    );
}

export default EditClass;