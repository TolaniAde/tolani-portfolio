import "../styles/about.css";

export default function About() {
  const skills = [
    {
      icon: "💻",
      title: "Web Development",
      text: "Building responsive and user-friendly websites and web applications.",
    },
    {
      icon: "✍️",
      title: "Technical Writing",
      text: "Turning complex technical ideas into clear and useful content.",
    },
    {
      icon: "🚀",
      title: "Digital Solutions",
      text: "Creating practical digital solutions for real-world needs.",
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      text: "Exploring new technologies and improving my skills every day.",
    },
  ];

  const stats = [
    {
      number: "20+",
      label: "Projects & Ideas",
    },
    {
      number: "3+",
      label: "Years Learning & Building",
    },
    {
      number: "10+",
      label: "Technical Topics",
    },
    {
      number: "∞",
      label: "Curiosity to Learn",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <span className="section-label">About Me</span>

          <h2>
            Turning ideas into{" "}
            <span>useful digital experiences.</span>
          </h2>
        </div>

        {/* Main About Content */}
        <div className="about-content">

          {/* Left Side */}
          <div className="about-text">
            <h3>A little about me</h3>

            <p>
              I enjoy turning ideas into useful digital experiences.
              My work combines creativity, technology, and problem-solving
              to build things that are simple and enjoyable to use.
            </p>

            <p>
              I am constantly learning, experimenting with new technologies,
              and improving my skills through real-world projects.
            </p>

            <a href="#contact" className="about-button">
              Let&apos;s Work Together <span>→</span>
            </a>
          </div>

          {/* Right Side - Glass Skills */}
          <div className="about-skills">

            <div className="skills-header">
              <span>WHAT I WORK WITH</span>
              <div className="skills-line"></div>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="glass-skill" key={index}>

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <div className="skill-info">
                    <h4>{skill.title}</h4>
                    <p>{skill.text}</p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Currently Focused Section */}
        <div className="focus-card">

          <div className="focus-icon">
            ✨
          </div>

          <div className="focus-content">
            <span className="focus-label">
              CURRENTLY FOCUSED ON
            </span>

            <h3>
              Building better digital experiences with modern web technologies.
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}