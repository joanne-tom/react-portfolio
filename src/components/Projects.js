export default function Projects() {
  return (
    <div>
      <section className="resume-section" id="projects">
        <div className="resume-section-content projects">
          <h2 className="mb-1">Projects</h2>
          <div className="subheading mb-2">Frontend projects</div>
          <div className="d-flex row">
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "14rem" }}
            >
            <div className="card-body">
                <h5 className="card-title">Memoir- AI powered memory recaller diary</h5>
                <a
                  href="https://github.com/joanne-tom/AI-memory-recaller-diary"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                {/*<a
                  href="https://generateadvice.netlify.app/"
                  target="_blank"
                  className="btn btn-secondary"
                >
                </a>*/}
              </div>
            </div>
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "16rem" }}
            >
             <div className="card-body">
                <h5 className="card-title">Naive Bayes Classifier Website</h5>
                <a
                  href="https://github.com/joanne-tom/naivebayes_flask"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                {/*<a
                  href="https://stories-feed-app.netlify.app/"
                  target="_blank"
                  className="btn btn-secondary"
                >
                </a>*/}
              </div>
            </div>
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "14rem" }}
            >
             <div className="card-body">
                <h5 className="card-title">Email Spam Classification</h5>
                <a
                  href="https://github.com/joanne-tom/Email_spam_checking-ML"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                {/*
            <a
                  href="https://id-card-generator-2021.netlify.app/"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Demo
                </a>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interests*/}
      {/*<section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. On weekdays I go for walks daily. During the weekends I
            attend latin dance classes and technical meetups. I also enjoy
            trekking, exploring local cuisines and blogging.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring blogger, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>*/}
      <hr className="m-0" />
    </div>
  );
}