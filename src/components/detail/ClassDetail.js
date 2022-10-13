import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const ClassDetail = (props) => {
 
    const navigate = useNavigate()

    const deleteClass = async () => {
        const response = await fetch(
            `https://testproject.optimistinc.com/api/class/${props.classId}`,
            {
                method: "delete",
                headers: {
                    'optimist_api_key': "bQ0V2vc2F3dKadbAuUiV",
                }
            })
        if (!response.ok){
            console.log(response)
        }else{
            const json = await response.json()
            if (json.deletedCount == 1) {
                navigate('/')
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