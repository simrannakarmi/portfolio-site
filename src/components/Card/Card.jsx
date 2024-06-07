import './Card.css'
import htmlLogo from '../../assets/html5.png'

function Card() {
    return (
        <div className="card-box">
            <div className="card-body">
                <img className="card-img" src={htmlLogo} alt="" />
                <h2 className="card-title">Webflow Development</h2>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique..</p>
            </div>
        </div>
    )
}

export default Card