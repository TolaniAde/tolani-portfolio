import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* SECTION HEADER */}
        <div className="about-header">

          <span className="section-tag">
            About Me
          </span>

          <h2>
            Turning ideas into
            <span> useful digital experiences.</span>
          </h2>

          <p>
            I'm Tolani Adepitan, a frontend developer, technical
            writer, and technology enthusiast who enjoys turning
            complex ideas into simple, useful experiences.
          </p>

        </div>


        {/* MAIN CONTENT */}
        <div className="about-grid">

          {/* ABOUT STORY */}
          <div className="about-story">

            <h3>
              A little about me
            </h3>

            <p>
              I’m a Frontend Developer and Technical Writer
              focused on building clean, responsive websites
              and creating useful technology content.
            </p>

            <p>
              I enjoy turning ideas into simple digital
              experiences that are functional, easy to use,
              and visually engaging.
            </p>

            <a
              href="#contact"
              className="about-btn"
            >
              Let's Work Together →
            </a>

          </div>


          {/* HIGHLIGHTS */}
          <div className="about-highlights">

            <div className="highlight-card">

              <div className="highlight-icon">
                💻
              </div>

              <div>
                <h4>
                  Web Development
                </h4>

                <p>
                  Building responsive and user-friendly
                  websites and web applications.
                </p>
              </div>

            </div>


            <div className="highlight-card">

              <div className="highlight-icon">
                ✍️
              </div>

              <div>
                <h4>
                  Technical Writing
                </h4>

                <p>
                  Turning complex technical ideas into
                  clear and engaging content.
                </p>
              </div>

            </div>


            <div className="highlight-card">

              <div className="highlight-icon">
                🚀
              </div>

              <div>
                <h4>
                  Digital Solutions
                </h4>

                <p>
                  Creating practical digital solutions
                  that solve real-world problems.
                </p>
              </div>

            </div>


            <div className="highlight-card">

              <div className="highlight-icon">
                📚
              </div>

              <div>
                <h4>
                  Continuous Learning
                </h4>

                <p>
                  Exploring new technologies and improving
                  my skills every day.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* STATS */}
        <div className="about-stats">

          <div className="stat">
            <strong>20+</strong>
            <span>Projects & Ideas</span>
          </div>

          <div className="stat">
            <strong>3+</strong>
            <span>Years Learning & Building</span>
          </div>

          <div className="stat">
            <strong>10+</strong>
            <span>Technical Topics</span>
          </div>

          <div className="stat">
            <strong>∞</strong>
            <span>Curiosity to Learn</span>
          </div>

        </div>


        {/* CURRENT FOCUS */}
        <div className="about-focus">

          <div className="focus-icon">
            ✨
          </div>

          <div className="focus-content">

            <span>
              CURRENTLY FOCUSED ON
            </span>

            <h3>
              Building better digital experiences
              with modern web technologies.
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}