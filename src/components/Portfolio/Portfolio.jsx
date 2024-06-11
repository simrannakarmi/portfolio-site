import "./Portfolio.css";
import photo from "../../assets/web1.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function PortfolioCard() {
  return (
    <div className="card-container">
      <div className="portfolio-card">
        <div className="portfolio-card-img">
          <img src={photo} alt="" className="project-img" />
        </div>
        <div className="portfolio-card-text">
          <h4>Project Name</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="links">
            <a href="#" className="link-view">
              View in GitHub
            </a>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Portfolio() {
  return (
    <div className="portfolio-container" id="porfolio">
      <div className="portfolio-content">
        <div className="portfolio-header">
          <div className="portfolio-text">
            <h5>Recent Projects</h5>
            <h1>My Portfolio</h1>
          </div>

          <a href="https://github.com/simrannakarmi" className="github-btn">
            Visit My GitHub  <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
        <div className="cards">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
