import AlternateLogin from "./AlternateLogin";
import Input from "../Input";
import axios from "../../api/axios"
import useAuth from "../../context/useAuthHook";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const SignUpForm = (props) => {

    const { setUser } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    });
    const [errorField, setErrorField] = useState("")

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName) {
            props.handleErrorMsg("Oops! Your first name is required");
            setErrorField('firstName')
        } else if (!formData.email) {
            props.handleErrorMsg("Oops! An email is required")
            setErrorField('email')
        } else if (!formData.password) {
            props.handleErrorMsg("Oops! A password is required")
            setErrorField('password')
        } else if (!formData.repeatPassword) {
            props.handleErrorMsg("Oops! A repeat password is required")
            setErrorField('repeatPassword')
        } else if (formData.password !== formData.repeatPassword) {
            props.handleErrorMsg("Oops! Your passwords don't match")
            setErrorField("password")
        } else { postNewUser() }
    }

    const postNewUser = async () => {
        const data = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            password: formData.password
        }
        try {
            const response = await axios.post('/signup', JSON.stringify(data))
            console.log(response.status)
            console.log(response.data)

            const fullName = response.data.last_name ? response.data.first_name + " " + response.data.last_name : response.data.first_name;
            setUser({
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                full_name: fullName,
                email: response.data.email,
                _id: response.data._id
            })
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                repeatPassword: ""
            })
            navigate('/');
        } catch (err) {
            console.log(err.response)
            if (err.response.status === 409 || err.response.data === "message for duplicate emails..." || err.response.data === "message for duplicate emails...") {
                props.handleErrorMsg("Oops! This user already exists");
            } else {
                props.handleErrorMsg("Could not add user");
            }
        }
    }

    useEffect(()=>{
        document.title='Classy - Sign Up'
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <Input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={handleFormData}
                    value={formData.firstName}
                    error={(errorField === "firstName") ? true : false}
                />
                <Input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleFormData}
                    value={formData.lastName}
                    error={(errorField === "lastName") ? true : false}
                />
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
                <Input
                    name="repeatPassword"
                    type="password"
                    placeholder="Repeat Password"
                    onChange={handleFormData}
                    value={formData.repeatPassword}
                    error={(errorField === "repeatPassword") ? true : false}
                />
            </div>
            <AlternateLogin linkTo="signIn" />
            <button className="btn-lrg btn-green">SIGN IN</button>
        </form>
    );

}
export default SignUpForm;