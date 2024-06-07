import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-me-img">
            <img
              src="https://res.cloudinary.com/simran-portfolio/image/upload/v1631691111/simran-portfolio/about-me-img_q1z52o.png"
              alt="about-me-img"
            />
  
        </div>
        <div className="about-me-text">
            <h1>About Me</h1>
            <p>
            I am a Bachelor of Information Management (BIM) student at the
            National College of Computer Studies, with a strong background in
            programming languages such as C, HTML, CSS, PHP, DBMS, Java, and
            Python. I have applied these skills to projects like a Django-based
            ecommerce website with user authentication and secure payment
            processing, and a Kivy-based screen time analysis application. In
            addition to my academic work, I volunteered at Coding Olympics Nepal,
            where I helped organize coding events, and participated in a
            hackathon, where I contributed to a sales analytics system with data
            visualization and system integration. Fluent in Nepali, English, and
            Nepal Bhasa, I have experience engaging with diverse groups. My
            additional training in graphics design, web development, and data
            science, along with my practical experience, make me a versatile and
            committed contributor to any technology-focused team.
            </p>
        </div>

      </div>
    </div>
  );
}

export default About;
