export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Joanne
          <span className="text-primary"> Rachel Tom</span>
        </h1>
        <div className="subheading mb-5">B.Tech Student - SCTCE</div>
        <p className="lead mb-5">
          I’m a passionate Computer Science student with a focus on AI/ML and 
          full-stack development. I enjoy building intelligent web applications, experimenting
           with NLP and Generative AI, and creating impactful projects from scratch. With 
           experience in Flask, MongoDB, machine learning models, and deployment tools like 
           Render, I'm excited about crafting smart, user-friendly solutions.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/joanne-rachel-tom-115b51270/"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="social-icon" href="https://github.com/joanne-tom">
            <i className="fab fa-github" />
          </a>
          <a className="social-icon" href="https://drive.google.com/file/d/1IGXQcvBkKRyjOxHc9VnNUc96QZt1f67T/view?usp=drive_link">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </section>
  );
}