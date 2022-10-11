import Input from "../Input";
import axios from 'axios';
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

    const data = {
        title: "The perfect fondue",
        description: "Get cheesy at lunch time",
        date: "8 december, 2022",
        location: "Prague",
        capacity: "10",
        created_by: "123456",
        created_by_name: "Jean Louis"
    }

   axios({
        method: 'post',
        url: 'https://testproject.optimistinc.com/api/class',
        data: data, 
        headers: {'optimist_api_key': '633eca001f1829e01a6bb991'}

    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    });

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