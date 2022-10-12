import Header from "../components/header/Header";
import NewClassForm from "../components/newclass/NewClassForm";
import "../css/new-class.css"
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

const NewClass = () => {
    const { user } = useContext(UserContext)
    const [success, setSuccess] = useState(false)
    return (
        <div>
            {!user ? <Navigate to="/" /> :
                <div className="main-container">
                    <Header topRight="userIcon" />
                    <section className="new-class-ctr">
                        {!success ?
                            <div>
                                <div>
                                    <h2 className="headline">Create a new class.</h2>
                                    <p className="sub-head">Enter details below.</p>
                                </div>
                                <NewClassForm success={() => setSuccess(true)} />
                            </div>
                            : <div>
                                <div>
                                    <h2 className="headline">You have successfully added a new class</h2>
                                    <p className="sub-head"> <Link to="/home" >Back to dashboard </Link></p>
                                </div>
                            </div>
                        }
                    </section>
                </div>
            }

        </div>
    );
}

export default NewClass;