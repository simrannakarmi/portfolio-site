import './Header.css'

function Header() {
    return (
        <>
            <header className="header">
                <nav className='navbar'>
                    <ul className='nav-items'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">About me</a></li>
                        <li><a href="">Testimonials</a></li>
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