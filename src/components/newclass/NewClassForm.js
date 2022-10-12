import Input from "../Input";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";


const NewClassForm = (props) => {

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
        const response = await fetch(
            "https://testproject.optimistinc.com/api/class/",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'optimist_api_key': "bQ0V2vc2F3dKadbAuUiV",
                },
                body: JSON.stringify(data)
            }
        )
        console.log(response)
        if (!response.ok) {
            console.log(response)
        }
        const json = await response.json()
        console.log(json)
        if (json) {
            props.success()
        }
        //if success redirect or set a success response and back button
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
            <button className="btn-lrg btn-green" onClick={addClass}>CREATE NEW CLASS</button>
        </form>
    );

}

export default NewClassForm;