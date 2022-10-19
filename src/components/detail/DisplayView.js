import AddButton from "../dashboard/AddButton";
import Attendees from "./Attendees";
import ClassDetail from "./ClassDetail";
import ClassCardGrid from "../dashboard/ClassCardGrid";
import { useEffect } from "react";

const DisplayView = (props) => {

    useEffect(()=>{
        document.title='Classy - Class Detail'
    }, [])

    return (
        <div className="detail-ctr">
            <ClassDetail classId={props.data._id} bin={false} />
            <div className="detail">
                <ClassCardGrid detail={true} data={props.data} reset={() =>  props.reset() } />
                <Attendees attendees={props.data.attendees} />
            </div>
            <AddButton />
        </div>
    );
}
export default DisplayView;