import Header from "../components/Header";
import ClassCardGrid from "../components/dashboard/ClassCardGrid";
import ClassDetail from "../components/dashboard/ClassDetail";
import Attendees from "../components/dashboard/Attendees";
import AddButton from "../components/dashboard/AddButton";
import allClasses from "../data/data.json"


const Detail = () => {

    return (
        <div className="main-container">
            <Header topRight="loggedIn"/>
            <div className="container">
                <ClassDetail />
                <ClassCardGrid data={allClasses[0]}/>
                <Attendees />
                <AddButton />
            </div>
        </div>

    );
}

export default Detail;