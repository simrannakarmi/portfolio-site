import './Skills.css'
import Card from '../Card/Card.jsx';

function Skills() {
    return (
        <div className="skills-container">
            <div className="skills-content">
                <div className="skills-headers">
                    <h3>My Skills</h3>
                    <h1>My Expertise</h1>
                </div>
                <div className="skills-card">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Skills