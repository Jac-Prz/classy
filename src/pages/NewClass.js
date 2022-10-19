import { useState, useEffect} from "react";
import Header from "../components/header/Header";
import NewClassForm from "../components/NewClassForm";
import "../css/new-class.css"

const NewClass = () => {

    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(()=>{
        document.title='Classy - New Class'
    }, [])

    return (
        <div className="main-container">
            <Header topRight="userIcon" backCross={true} />
            <section className="new-class-ctr">
                <div>
                    <div>
                        <h2 className="headline">Create a new class.</h2>
                        <p className="sub-head" style={{ color: errorMsg ? "#FF0000" : "#949EA8" }}>
                            {!errorMsg ? "Enter details below." : errorMsg}
                        </p>
                    </div>
                    <NewClassForm setError={(errmsg) => setErrorMsg(errmsg)} />
                </div>
            </section>
        </div>
    );
}

export default NewClass;