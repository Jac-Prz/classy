import Input from "./Input";
import { useState } from "react";

const NewClassForm = () => {

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
        <form>
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
            <button className="btn-lrg btn-green">CREATE NEW CLASS</button>
            
        </form>
    );

}

export default NewClassForm;