import "../styles/projects.css";

export default function Projects() {
  const projects = [
    {
      title: "ChyberrPort",
      category: "Freelance Marketplace",
      description:
        "A platform that connects businesses with talented professionals through task-based opportunities.",
      technologies: ["Next.js", "React", "JavaScript"],
      image: "/images/chyberrport.jpg",
      demo: "#",
      github: "#",
      featured: true,
    },

    {
      title: "Glintplus Journals",
      category: "Academic Publishing",
      description:
        "A journal publishing platform that supports researchers with manuscript submission and publication.",
      technologies: ["WordPress", "SEO", "Publishing"],
      image: "/images/glintplus.jpg",
      demo: "#",
      github: "#",
      featured: true,
    },

    {
      title: "Researchment Academy",
      category: "Learning Platform",
      description:
        "A platform that helps researchers improve their academic writing and publishing skills.",
      technologies: ["WordPress", "Education", "Research"],
      image: "/images/researchment.jpg",
      demo: "#",
      github: "#",
      featured: true,
    },

    {
      title: "Personal Portfolio",
      category: "Web Development",
      description:
        "My personal portfolio built with Next.js and React to showcase my skills, projects, and services.",
      technologies: ["Next.js", "React", "CSS"],
      image: "/images/portfolio.jpg",
      demo: "#",
      github: "#",
      featured: false,
    },
  ];

  return (
    <section className="projects" id="projects">
      <h4>Featured Projects</h4>

      <h2>Things I've Built</h2>

      <p className="projects-intro">
        Here are some of the projects I've worked on. Each one reflects my
        passion for building practical solutions and creating meaningful digital
        experiences.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              {project.featured && (
                <span className="featured-badge">
                  ⭐ Featured
                </span>
              )}

              <h3>{project.title}</h3>

              <small>{project.category}</small>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.demo}>Live Demo</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}