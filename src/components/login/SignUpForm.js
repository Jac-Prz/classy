import Link from "./Link";
import Input from "../Input";
import { useState } from "react";

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    });

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form>
            <div className="input-container">
                <Input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={handleFormData}
                    value={formData.firstName} />
                <Input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleFormData}
                    value={formData.lastName} />
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleFormData}
                    value={formData.email} />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleFormData}
                    value={formData.password} />
                <Input
                    name="repeatPassword"
                    type="password"
                    placeholder="Repeat Password"
                    onChange={handleFormData}
                    value={formData.repeatPassword} />
            </div>
            <Link linkTo="signIn"/>
            <button className="btn-lrg btn-green">SIGN IN</button>
        </form>
    );

}
export default SignUpForm;