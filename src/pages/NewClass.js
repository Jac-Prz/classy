import Header from "../components/header/Header";
import NewClassForm from "../components/newclass/NewClassForm";

const NewClass = () => {

    return (
        <div className="main-container login-container">
            <Header topRight="exit" />
            <section className="container login">
                <h2 className="headline">Create a new class.</h2>
                <p className="sub-head">Enter details below.</p>
                <NewClassForm />
            </section>
        </div>
    );
}

export default NewClass;