import "../css/dashboard.css"
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

    const getClasses = async () => {
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
        getClasses();
    },[])

    return (
        <div className="main-container">
            <Header topRight="userIcon" />
            <div>
                {(allClasses.length == 0)
                    ? <div className="no-classes" >
                        <div>
                            <h1 className="headline">Be a trailblazer!</h1>

                            <Link to="/newclass" style={{ textDecoration: "none" }}><p className="sub-head underline">Add the first class</p></Link>
                            <p className="sub-head">to kick off a new era of learning.</p>
                        </div>
                        <div>
                            <img src={"graduate.png"} />
                        </div>
                    </div>
                    : <div>
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
                                            <ClassCardGrid data={data} reset={() => getClasses()} />
                                        </Link>
                                        : <Link to={"/detail/" + data._id} key={index} style={{ textDecoration: 'none' }}>
                                            <ClassCardList data={data} reset={() => getClasses()} />
                                        </Link>
                                })}
                            </div>
                        </div>
                        <AddButton />
                    </div>
                }
            </div>
        </div>
    );
}

export default Dashboard;