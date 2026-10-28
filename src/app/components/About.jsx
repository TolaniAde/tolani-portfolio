
"use client";

import "../styles/about.css";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaSass,
  FaBootstrap,
} from "react-icons/fa6";

const technologies = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#F8FAFC" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "Sass", icon: FaSass, color: "#CC6699" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
];

function TechnologyItems() {
  return technologies.map(({ name, icon: Icon, color }) => (
    <div className="technology-card" key={name}>
      <Icon
        className="technology-icon"
        style={{ color }}
        aria-hidden="true"
      />
      <span>{name}</span>
    </div>
  ));
}

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section label */}
        <div className="about-label">
          <span className="about-label-line" />
          <span>ABOUT ME</span>
          <span className="about-label-line" />
        </div>

        {/* Introduction */}
        <h2 className="about-heading">
          Turning ideas into
          <br />
          <span>useful digital experiences.</span>
        </h2>

        <div className="about-description">
          <p>
            I enjoy combining creativity, technology, and
            problem-solving to build responsive websites and
            digital experiences that are simple and enjoyable
            to use.
          </p>

          <p>
            I keep learning, exploring new tools, and improving
            my skills through practical projects and experimentation.
          </p>
        </div>

        <a href="#projects" className="about-button">
          <span>Explore My Work</span>
          <span className="about-button-arrow" aria-hidden="true">
            ↗
          </span>
        </a>

        {/* Technology showcase */}
        <div className="about-tech">
          <div className="tech-heading">
            <span className="tech-heading-line" />
            <p>TOOLS &amp; TECHNOLOGIES</p>
            <span className="tech-heading-line" />
          </div>

          <p className="tech-subtitle">
            The tools I use to bring ideas to life
          </p>

          <div className="technology-marquee">
            <div className="technology-track">
              <div className="technology-group">
                <TechnologyItems />
              </div>

              {/* Duplicate items for seamless scrolling */}
              <div
                className="technology-group"
                aria-hidden="true"
              >
                <TechnologyItems />
              </div>
            </div>
          </div>

          <p className="tech-footer">
            Always learning. Always building.
          </p>
        </div>

        {/* Core values */}
        <div className="about-bottom-line">
          <span>CREATIVITY</span>
          <span className="about-bottom-dot" />
          <span>TECHNOLOGY</span>
          <span className="about-bottom-dot" />
          <span>PROBLEM-SOLVING</span>
        </div>
      </div>
    </section>
  );
}
