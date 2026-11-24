
"use client";

import Image from "next/image";
import "../styles/projects.css";

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "Personal Portfolio",
    description:
      "A responsive portfolio showcasing my skills, services, and work as a web developer.",
    image: "/images/portfolio.png",
    imageAlt: "Screenshot of my personal portfolio website",
    technologies: ["Next.js", "React", "CSS"],
    liveUrl: "https://tolani-portfolio-seven.vercel.app/",
    githubUrl: "https://github.com/TolaniAde",
  },
  {
    number: "02",
    category: "Web Development",
    title: "Zobot Resources",
    description:
      "Zobot Resources Limited is a registered indigenous Nigerian company operating in the Energy, Engineering and Infrastructure sectors.",
    image: "/images/zobot-resources.png",
    imageAlt: "Screenshot of the Zobot Resources website",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://zobot-resources.vercel.app/",
    githubUrl: "https://github.com/TolaniAde/Zobot-Resources",
  },
  {
    number: "03",
    category: "Web Development",
    title: "Amaraaba Vocational Training Center",
    description:
      "Amaraaba VTC is a free community initiative dedicated to equipping young people, adolescent mothers, and vulnerable groups with employable skills.",
    image: "/images/amaraaba-vtc.png",
    imageAlt: "Screenshot of the Amaraaba Vocational Training Center website",
    technologies: ["React", "JavaScript", "Responsive Design"],
    liveUrl: "https://preview.amaraaba-vtc.com/",
    githubUrl: "https://github.com/TolaniAde/Amaraaba",
  },
];

const allProjectsUrl =
  "https://github.com/TolaniAde?tab=repositories";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <header className="projects-heading">
          <span className="projects-eyebrow">MY WORK</span>

          <h2>
            Projects I've <span>Built</span>
          </h2>

          <p>
            A few things I've created with code, creativity,
            and a focus on solving real problems.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.number}
              style={{ "--project-index": index }}
            >
              <div className="project-preview">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1050px) 45vw, 30vw"
                  className="project-screenshot"
                />

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

                <div className="project-image-overlay" />
              </div>

              <div className="project-card-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-title-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div
                  className="project-technologies"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-live"
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-status">
                      In progress
                    </span>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-github"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-view-all">
          <p>Want to see more of my work?</p>

          <a
            href={allProjectsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-view-all-link"
          >
            View All Projects
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="projects-footer">
          <div>
            <h3>Have an idea in mind?</h3>
            <p>Let's turn it into something useful.</p>
          </div>

          <a href="#contact" className="projects-contact-link">
            Let's Work Together
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
