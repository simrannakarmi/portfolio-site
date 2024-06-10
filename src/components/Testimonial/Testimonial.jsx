import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import profile from '../../assets/profile2.jpg'

function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div className="ratings">
        <FontAwesomeIcon icon={faStar} className="star-icon" />
        <FontAwesomeIcon icon={faStar} className="star-icon" />
        <FontAwesomeIcon icon={faStar} className="star-icon" />
        <FontAwesomeIcon icon={faStar} className="star-icon" />
        <FontAwesomeIcon icon={faStar} className="star-icon" />
      </div>
      <div className="testimonial-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra.
        </p>
      </div>
      <div className="user-details">
        <img src={profile} className="profile-img" />
        <div className="user-info">
          <h4>Dianne Russell</h4>
          <p>Starbucks</p>
        </div>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="testimonial-container" id="testimonials">
      <div className="testimonial-content">
        <div className="testimonial-header">
          <h3>Clients Feedback</h3>
          <h1>Customer testimonials</h1>
        </div>
        <div className="card-section">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
