
"use client";

import "../styles/about.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-label">
          <span className="about-label-line"></span>
          <span>ABOUT ME</span>
          <span className="about-label-line"></span>
        </div>

        <h2 className="about-heading">
          I turn ideas into
          <br />
          <span>useful digital experiences.</span>
        </h2>

        <div className="about-description">
          <p>
            I enjoy turning ideas into useful digital experiences. My work
            combines creativity, technology, and problem-solving to build
            things that are simple and enjoyable to use.
          </p>

          <p>
            I am constantly learning, experimenting with new technologies,
            and improving my skills through real-world projects.
          </p>
        </div>

        <a href="#projects" className="about-button">
          Explore My Work
          <span aria-hidden="true">↗</span>
        </a>

        <div className="about-bottom-line">
          <span>CREATIVITY</span>
          <span className="about-bottom-dot"></span>
          <span>TECHNOLOGY</span>
          <span className="about-bottom-dot"></span>
          <span>PROBLEM-SOLVING</span>
        </div>
      </div>
    </section>
  );
}
