import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return ( 
        <footer>
            <div className="footer">
                <div className="footer-container">
                    <nav className='footer-navbar'>
                        <ul className='nav-items'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#porfolio">Portfolio</a></li>
                            <li><a href="#about-me">About me</a></li>
                            <li><a href="#contact-me">Contact</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                        </ul>
                        <div className="social-media">
                            <a href="https://www.facebook.com/simran.nakarmi.3/"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.instagram.com/simran_nakarmi/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://x.com/simran_nakarmi"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.linkedin.com/in/simran-nakarmi/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </nav>
                    <hr/>
                    <div className="terms-content">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service </a>
                        <a href="#">Cookies Settings</a>
                    </div>
                    <div className="copyright-footer">
                        <p>&copy; 2024 Simran Nakarmi. All rights reserved. Thank you for visiting!
                        | Contact: <a href="mailto:nakarmisimran@gmail.com">nakarmisimran@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </footer>   
    )
}

export default Footer