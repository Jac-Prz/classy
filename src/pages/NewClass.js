import Header from "../components/header/Header";
import NewClassForm from "../components/NewClassForm";
import "../css/new-class.css"

const NewClass = () => {
      return (
        <div className="main-container">
            <Header topRight="userIcon" />
            <section className="new-class-ctr">
                <div>
                    <div>
                        <h2 className="headline">Create a new class.</h2>
                        <p className="sub-head">Enter details below.</p>
                    </div>
                    <NewClassForm />
                </div>
            </section>
        </div>
    );
}

export default NewClass;