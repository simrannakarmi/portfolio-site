import './Hero.css'
import profile from '../../assets/propic.png'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-info">
        <h1>Hey, I am Simran</h1>
        <h3>Building the future one line of code at a time.</h3>
        <p>
          Welcome to my portfolio! I am a passionate beginner full stack
          developer, currently honing my skills in Django, React, and Django
          REST Framework (DRF). With a keen interest in creating seamless and
          dynamic web applications, I am dedicated to mastering the art of full
          stack development.
        </p>
        <button className="hero-btn">
          Get In Touch  
        </button>

      </div>
      <div className="hero-image">
        <img src={profile} alt="Simran" />
      </div>
    </div>
  );
};

export default Hero;
