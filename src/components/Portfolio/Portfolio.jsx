import './Portfolio.css'

function Portfolio() {
    return (
        <div className='portfolio-container'>
            <div className='portfolio-content'>
                <div className="portfolio-header">
                    <div className="portfolio-text">
                        <h4>Recent Projects</h4>
                        <h1>My Portfolio</h1>
                    </div>
                    <button className="github-btn">
                        Visit My GitHub
                    </button> 
                </div>
            </div>
        </div>
    )
}

export default Portfolio