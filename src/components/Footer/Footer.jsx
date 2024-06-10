import './Footer.css'


const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-container">
            <nav className='navbar'>
                    <ul className='nav-items'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#porfolio">Portfolio</a></li>
                        <li><a href="#about-me">About me</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                    <div className="social-media">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </nav>
                <hr/>
                <div className="content">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service </a>
                    <a href="#">Cookies Settings</a>
                </div>
            </div>
            <p>Copyright &copy; 2024</p>
        </div>
    )
}

export default Footer