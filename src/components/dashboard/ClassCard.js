import "../../css/cards.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ClassCard = () => {
    return (
        <div>
            <div className="card-container card-list-view">

                <p className="card-date ">April 4, 2017</p>

                <div className="card-heading">
                    <h2 className="headline">Tattoing Masterclass</h2>
                </div>

                <p className="card-desc">Party in Scrollbar</p>
                <p className="card-attend"><FontAwesomeIcon icon={faUser} /> 9 of 31</p>
                <div className="card-btn">
                    <button className="btn-sml btn-green">JOIN</button>
                </div>
            </div>

            <div className="card-container card-grid-view">

                <p className="card-date">April 4, 2017</p>

                <div className="card-heading">
                    <h2 className="headline">Tattoing Masterclass</h2>
                    <p>Minnie Mouse</p>
                </div>

                <p className="card-desc">Party in Scrollbar</p>
                <p className="card-attend"><FontAwesomeIcon icon={faUser} /> 9 of 31</p>
                <div className="card-btn">
                    <button className="btn-sml btn-green">JOIN</button>
                </div>
            </div>
            <div className="card-container card-grid-view">

                <p className="card-date">April 4, 2017</p>

                <div className="card-heading">
                    <h2 className="headline">Tattoing Masterclass</h2>
                    <p>Minnie Mouse</p>
                </div>

                <p className="card-desc">he href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but he href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but he href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but he href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but</p>
                <p className="card-attend"><FontAwesomeIcon icon={faUser} /> 9 of 31</p>
                <div className="card-btn">
                    <button className="btn-sml btn-green">JOIN</button>
                </div>
            </div>
        </div>
    );
}

export default ClassCard;