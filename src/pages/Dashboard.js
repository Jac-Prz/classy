import "../css/dashboard.css"
import "../css/cards.css"
import Header from "../components/header/Header";
import DisplaySettings from "../components/dashboard/DisplaySettings";
import ClassCardGrid from "../components/dashboard/ClassCardGrid";
import ClassCardList from "../components/dashboard/ClassCardList";
import AddButton from "../components/dashboard/AddButton";
import axios from "../api/axios"
import { useEffect, useState } from "react";
import { Link, useNavigate, } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate()
    const [gridDisplay, setGridDisplay] = useState(true);
    const [allClasses, setAllClasses] = useState([]);
    const [filter, setFilter] = useState("ALL CLASSES");

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/classes')
            setAllClasses(response.data)
        } catch (err) {
            if (err.response.status === 404) {
                navigate('/404');
            } else {
                 navigate('/error')
            } 
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="main-container">
            <Header topRight="userIcon" />
            <div className={gridDisplay ? "container grid-display" : "container list-display"}>
                <DisplaySettings
                    setShowingOption={(value) => setFilter(value)}
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