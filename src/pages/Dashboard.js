import "../css/dashboard.css"
import Header from "../components/Header";
import DisplaySettings from "../components/dashboard/DisplaySettings";
import ClassCard from "../components/dashboard/ClassCard";
import AddButton from "../components/dashboard/AddButton";

const Dashboard = () => {
    return (
        <div className="main-container">
            <Header topRight="userIcon" />
            <div className="container">
                <DisplaySettings />
                <ClassCard />
                <AddButton />
            </div>
        </div>
    );
}

export default Dashboard;