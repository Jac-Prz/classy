import axios from "../../api/axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const ClassDetail = (props) => {
 
    const navigate = useNavigate()

    const deleteClass = async () => {
        try{
            const response = await axios.delete( `/class/${props.classId}`)
            console.log(response)
            if (response.data.deletedCount == 1) {
                navigate('/')
            } else throw 404
        } catch (err){
            if (err.status === 404) {
                navigate('/404')
            } else {
                navigate('/error')
            }
        }
    }

    return (
        <div className="display-settings">
            <p className="gry-bld">
                DETAIL CLASS: #{props.classId}
            </p>
            {props.bin ? <p
                className="delete"
                onClick={deleteClass}
            ><FontAwesomeIcon icon={faTrash} /> <span >DELETE CLASS</span> </p> : null}
        </div>
    );
}

export default ClassDetail;