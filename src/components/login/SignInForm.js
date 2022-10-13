import AlternateLogin from "./AlternateLogin";
import Input from "../Input";
import useAuth from "../../context/useAuthHook";
import axios from "../../api/axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = (props) => {    const { setUser } = useAuth();
    const navigate = useNavigate();
    const [errorField, setErrorField] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.email) {
            setErrorField("email")
            props.handleErrorMsg("Oops! An email is required");
        } else if (!formData.password) {
            setErrorField("password")
            props.handleErrorMsg("Oops! A password is required");
        } else {
            loginUser()
        }
    }

    const loginUser = async () => {
        const data = {
            email: formData.email,
            password: formData.password
        }
        try {
            const response = await axios.post('/login', JSON.stringify(data))
            const fullName = response.data.last_name ? response.data.first_name + " " + response.data.last_name : response.data.first_name;
            setUser({
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                full_name: fullName,
                email: response.data.email,
                _id: response.data._id
            })
            setFormData({
                email: "",
                password: ""
            })
            navigate('/');
        } catch (err) {
            console.log(err.response)
            if (err.response.status === 400 && err.response.data === "invalid credentials provided") {
                props.handleErrorMsg("Oops! That email and pasword combination is not valid.");
            } if (err.response.status === 400 && err.response.data === "UserNotFound") {
                props.handleErrorMsg("Oops! This user doesnt exist");
            } else {
                props.handleErrorMsg("Oops! Something went wrong");
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleFormData}
                    value={formData.email}
                    error={(errorField === "email") ? true : false}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleFormData}
                    value={formData.password}
                    error={(errorField === "password") ? true : false}
                />
            </div>
            <AlternateLogin type="signUp" />
            <button
                className="btn-lrg btn-green" >SIGN IN</button>
        </form>
    );
}

export default SignInForm;
