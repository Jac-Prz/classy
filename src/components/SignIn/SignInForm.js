import SignUpLink from "./SignUpLink";
import Input from "./Input";
import { useState } from "react";

const SignInForm = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form>
            <div className="input-container">
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
            </div>
            <SignUpLink />
            <button className="btn-lrg btn-green">SIGN IN</button>
        </form>
    );
}

export default SignInForm;