import AlternateLogin from "./AlternateLogin";
import Input from "../Input";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const SignUpForm = (props) => {
    //state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    });
    const [errorField, setErrorField] = useState("")

    //context
    const { setUser } = useContext(UserContext)

    //functions
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
        const response = await fetch(
            "https://testproject.optimistinc.com/api/signup",
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
            const json = await response.json();
            console.log(json);
            setUser({
                first_name: json.first_name,
                last_name: json.last_name,
                email: json.email,
                _id: json._id
            })
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                repeatPassword: ""
            });
        } else {
            props.handleErrorMsg("Something went wrong")
        }
       
    };

    return (
        <form >
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
            <button className="btn-lrg btn-green" onClick={handleSubmit}>SIGN IN</button>
        </form>
    );

}
export default SignUpForm;