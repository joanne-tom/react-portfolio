export default function Education() {
  return (
    <div>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Sree Chithra Thirunal College of Engineering</h3>
              <div className="subheading mb-3">Bachelor of Engineering</div>
              <div>
                In Computer Science with AI and ML
              </div>
              <p>CGPA - 8.88</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Oct 2022 - Apr 2026</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                St Thomas Central School
              </h3>
              <div className="subheading mb-3">
                Higher Secondary(Computer-Maths)
              </div>
              <p>Percentage: 95.2</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">2020-2022</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                St Thomas Residential School
              </h3>
              <div className="subheading mb-3">
                High School 1st - 10th
              </div>
              <p>Percentage: 95.2</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">2010-2020</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}