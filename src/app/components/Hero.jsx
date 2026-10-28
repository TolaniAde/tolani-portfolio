
import "../styles/hero.css";
import Image from "next/image";

import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
  FaBriefcase,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background decorations */}
      <div
        className="hero-bg-circle hero-bg-circle-1"
        aria-hidden="true"
      />
      <div
        className="hero-bg-circle hero-bg-circle-2"
        aria-hidden="true"
      />

      {/* Hero text */}
      <div className="hero-text">
        <span className="hero-tag">
          <span aria-hidden="true">👋</span>
          Welcome to my Portfolio
        </span>

        <h1>
          Hi, I&apos;m
          <span className="hero-name">Tolani Adepitan</span>
        </h1>

        <h2 className="hero-title">
          Web Developer{" "}
          <span className="title-divider">|</span>{" "}
          Freelancer
        </h2>

        <p>
          I build beautiful, responsive web
          applications, and produce technology content that helps
          people learn and businesses grow online.
        </p>

        {/* Action buttons */}
        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">
            <FaBriefcase aria-hidden="true" />
            <span>Hire Me</span>
          </a>

          <a href="#projects" className="secondary-btn">
            <span>View Projects</span>
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </div>

        {/* Social links */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/tolani-adepitan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/TolaniAde"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/iamtolani_a?s=11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Portrait and decorative effects */}
      <div className="hero-image">
        <div className="hero-image-glow" aria-hidden="true" />

        <div className="image-ring ring-one" aria-hidden="true" />
        <div className="image-ring ring-two" aria-hidden="true" />
        <div className="image-ring ring-three" aria-hidden="true" />

        <div className="image-box">
          <Image
            src="/images/AdepitanTolani.png"
            alt="Tolani Adepitan"
            width={600}
            height={600}
            priority
            sizes="(max-width: 480px) 64vw, (max-width: 900px) 40vw, 320px"
            className="hero-person"
          />
        </div>
      </div>
    </section>
  );
}
