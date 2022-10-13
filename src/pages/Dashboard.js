import "../css/dashboard.css"
import "../css/cards.css"
import Header from "../components/header/Header";
import DisplaySettings from "../components/dashboard/DisplaySettings";
import ClassCardGrid from "../components/dashboard/ClassCardGrid";
import ClassCardList from "../components/dashboard/ClassCardList";
import AddButton from "../components/dashboard/AddButton";
// import allClasses from "../data/data.json"
import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
    const { user } = useContext(UserContext)
    // const allClasses, setAllClasses = useState() we will set all classes with a call to the api
    const [gridDisplay, setGridDisplay] = useState(true);
    const [allClasses, setAllClasses] = useState([]);
    const [filter, setFilter] = useState("ALL CLASSES");

    const fetchUsers = async () => {
        const response = await fetch(
            "https://testproject.optimistinc.com/api/classes",
            {
                headers: {
                    optimist_api_key: "bQ0V2vc2F3dKadbAuUiV",
                },
            }
        );
        const dat = await response.json();
        console.log(dat)
        setAllClasses(dat)
    };

    useEffect(() => {
        fetchUsers();

    }, [])



    const handleFilter = (value) => {
        setFilter(value);
        // if (value === "ALL CLASSES") {
        //     setFilter(cl => new Date(cl.date) > new Date());
        // } else if (value === "FUTURE CLASSES") {
        //     setFilter(cl => new Date(cl.date) > new Date())
        // } else if (value === "PAST CLASSES") {
        //     setFilter(cl => new Date(cl.date) < new Date())
        // }
    }

    return (
        <div className="main-container">
            <Header topRight="userIcon" />
            <div className={gridDisplay ? "container grid-display" : "container list-display"}>
                <DisplaySettings
                    setShowingOption={handleFilter}
                    gridDisplay={gridDisplay}
                    setToGrid={() => setGridDisplay(true)}
                    setToList={() => setGridDisplay(false)}
                />
                <div className="cards-ctr">
                    {allClasses.filter((cl) => {
                        if (filter === "ALL CLASSES") {
                            return cl
                        } else if (filter === "FUTURE CLASSES") {
                            return new Date(cl.date) > new Date()
                        } else if (filter === "PAST CLASSES") {
                            return new Date(cl.date) < new Date()
                        }
                    }).map((data, index) => {
                        return gridDisplay
                            ? <Link to={"/detail/" + data._id} key={index} style={{ textDecoration: 'none' }}>
                                <ClassCardGrid data={data} />
                            </Link>
                            : <Link to={"/detail/" + data._id} key={index} style={{ textDecoration: 'none' }}>
                                <ClassCardList data={data} />
                            </Link>
                    })}
                </div>
                <AddButton />
            </div>
        </div>
    );
}

export default Dashboard;