import AddButton from "../dashboard/AddButton";
import Attendees from "./Attendees";
import ClassDetail from "./ClassDetail";
import ClassCardGrid from "../dashboard/ClassCardGrid";

const DisplayView = (props) => {
    return ( 
        <div className="detail-ctr">
                <ClassDetail classId={props.data._id} bin={false} />
                <div className="detail">
                    <ClassCardGrid detail={true} data={props.data} reset={() => {props.reset()}}/> 
                    <Attendees attendees={props.data.attendees} />
                </div>
                <AddButton />
            </div>
     );
}
export default DisplayView;