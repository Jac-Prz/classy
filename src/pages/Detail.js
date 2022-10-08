import Header from "../components/Header";
import ClassCard from "../components/dashboard/ClassCard";
import ClassDetail from "../components/dashboard/ClassDetail";
import Attendees from "../components/dashboard/Attendees";
import AddButton from "../components/dashboard/AddButton";

const Detail = () => {

    return (
        <div className="main-container">
            <Header topRight="loggedIn"/>
            <div className="container">
                <ClassDetail />
                <ClassCard />
                <Attendees />
                <AddButton />
            </div>
        </div>

    );
}

export default Detail;