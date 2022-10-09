import "../css/dashboard.css"
import "../css/cards.css"
import Header from "../components/Header";
import DisplaySettings from "../components/dashboard/DisplaySettings";
import ClassCardGrid from "../components/dashboard/ClassCardGrid";
import ClassCardList from "../components/dashboard/ClassCardList";
import AddButton from "../components/dashboard/AddButton";
import { useState } from "react";
import allClasses from "../data/data.json"

const Dashboard = () => {

    // const allClasses, setAllClasses = useState() we will set all classes with a call to the api
    const [gridDisplay, setGridDisplay] = useState(true);
    const [showingClasses, setShowingClasses] = useState(allClasses);
    
    const handleShowingOptions = (value) => {
        if (value === "ALL CLASSES") {
            setShowingClasses(allClasses);
        } else if (value === "FUTURE CLASSES") {
            const classData = allClasses.filter(cl => new Date(cl.date) > new Date())
            setShowingClasses(classData)
        } else if (value === "PAST CLASSES") {
            const classData = allClasses.filter(cl => new Date(cl.date) < new Date())
            setShowingClasses(classData)
        }
    }

    return (
        <div className="main-container">
            <Header topRight="userIcon" />
            <div className={gridDisplay ? "container grid-display" : "container list-display"}>
                <DisplaySettings
                    setShowingOption={handleShowingOptions}
                    gridDisplay={gridDisplay}
                    setToGrid={() => setGridDisplay(true)}
                    setToList={() => setGridDisplay(false)}
                />
                <div className="cards-ctr">
                    {showingClasses.map((data) => {
                        return gridDisplay ? <ClassCardGrid data={data} /> : <ClassCardList data={data} />
                    })}
                </div>
                <AddButton />
            </div>
        </div>
    );
}

export default Dashboard;