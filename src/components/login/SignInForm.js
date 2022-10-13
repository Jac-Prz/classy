import AlternateLogin from "./AlternateLogin";
import Input from "../Input";
import { useState } from "react";
import useAuth from "../../context/useAuthHook";
import { useNavigate } from "react-router-dom";

const SignInForm = (props) => {
    //navigate
    const navigate = useNavigate();
    // state
    const [errorField, setErrorField] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // context
    const { setUser } = useAuth();

    //functions
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
        const response = await fetch(
            'https://testproject.optimistinc.com/api/login',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'optimist_api_key': "bQ0V2vc2F3dKadbAuUiV",
                },
                body: JSON.stringify(data)
            }
        );
        if (response.ok) {
            const json = await response.json()
            console.log(json);
            const fullName = json.last_name ? json.first_name + " " + json.last_name : json.first_name;
            setUser({
                first_name: json.first_name,
                last_name: json.last_name,
                full_name: fullName,
                email: json.email,
                _id: json._id
            })
            setFormData({
                email: "",
                password: ""
            })
            navigate('/');
        } else {
            props.handleErrorMsg("Oops! That email and pasword combination is not valid.");
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
