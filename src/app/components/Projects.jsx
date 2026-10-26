
"use client";

import Image from "next/image";
import "../styles/projects.css";

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio showcasing my skills, services, projects, and experience as a frontend developer.",
    image: "/projects/portfolio.png",
    imageAlt: "Screenshot of my personal portfolio website",
    technologies: ["Next.js", "React", "CSS"],
    liveUrl: "https://tolani-portfolio-seven.vercel.app/",
    githubUrl: "https://github.com/TolaniAde",
  },
  {
    number: "02",
    category: "Web Application",
    title: "Task Marketplace",
    description:
      "A platform concept designed to connect people who need tasks completed with individuals who can provide those services.",
    image: "/projects/task-marketplace.png",
    imageAlt: "Screenshot of the task marketplace project",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    number: "03",
    category: "Publishing Platform",
    title: "Research Publishing Platform",
    description:
      "A digital platform concept for presenting academic journals, sharing research information, and helping authors discover publication opportunities.",
    image: "/projects/publishing-platform.png",
    imageAlt: "Screenshot of the research publishing platform",
    technologies: ["React", "JavaScript", "Responsive Design"],
    liveUrl: "",
    githubUrl: "",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <header className="projects-heading">
          <span className="projects-eyebrow">
            MY PORTFOLIO
          </span>

          <h2>
            Projects I've <span>Built</span>
          </h2>

          <p>
            A selection of projects showcasing my skills,
            creativity, and passion for building useful
            digital experiences.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              {/* PROJECT SCREENSHOT */}
              <div className="project-preview">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 90vw,
                         (max-width: 1050px) 45vw,
                         30vw"
                  className="project-screenshot"
                />

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="project-card-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-live"
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
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

                  {!project.liveUrl && !project.githubUrl && (
                    <span className="project-coming-soon">
                      Project details coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <p>Have an idea for a project?</p>

          <a
            href="#contact"
            className="projects-contact-link"
          >
            Let's work together <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}