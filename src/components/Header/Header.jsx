import './Header.css'

function Header() {
    return (
        <>
            <header className="header" id="home">
                <nav className='navbar'>
                    <ul className='nav-items'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#porfolio">Portfolio</a></li>
                        <li><a href="#about-me">About me</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                    <button className='contact-me-btn'>
                        Contact Me
                    </button>
                </nav>
            </header>
        </>
    );
}

export default Header