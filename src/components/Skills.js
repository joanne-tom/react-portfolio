export default function Skills() {
  return (
    <div>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react" />
            </li>
            <li className="list-inline-item">
              <i className="fa-solid fa-flask" />
            </li>
            <li className="list-inline-item">
              <i className="fa-brands fa-python" />
            </li>
            <li className="list-inline-item">
              <i className="fas fa-database" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java" />
            </li>
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
             AI and ML
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Web Development
            </li>
            {/*<li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Cross Functional Teams
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Agile Development &amp; Scrum
            </li>*/}
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}