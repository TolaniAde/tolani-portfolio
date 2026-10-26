
"use client";

import "../styles/skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "VS Code", icon: FaCode, color: "#007ACC" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
];

function SkillItem({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="skill-item">
      <Icon
        className="skill-icon"
        style={{ color: skill.color }}
        aria-hidden="true"
      />
      <span>{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <span className="skills-eyebrow">WHAT I WORK WITH</span>
        <h2>My Skills</h2>
        <p>
          The tools and technologies I use to build digital experiences.
        </p>
      </div>

      <div
        className="skills-marquee"
        aria-label="Skills and technologies"
      >
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <SkillItem
              key={`${skill.name}-${index}`}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
