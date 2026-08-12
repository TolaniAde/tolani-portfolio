import "../styles/skills.css";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h4>My Skills</h4>

      <h2>Technologies & Expertise</h2>

      <p className="skills-description">
        I enjoy combining technical expertise with creativity to build
        user-friendly websites, write engaging technical content, and
        create digital solutions that solve real problems.
      </p>

      <div className="skills-container">

        {/* Frontend Skills */}
        <div className="skill-card">
          <h3>💻 Frontend Development</h3>

          <div className="skill-tags">
            {skills.frontend.map((skill, index) => (
              <span className="tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Content Skills */}
        <div className="skill-card">
          <h3>✍️ Content & Digital Skills</h3>

          <div className="skill-tags">
            {skills.content.map((skill, index) => (
              <span className="tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}