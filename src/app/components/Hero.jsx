import "../styles/hero.css";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaFacebookF
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-text">

        <span className="hero-tag">
          👋 Welcome to my Portfolio
        </span>

        <h1>
          Hi, I'm <span>Tolani Adepitan</span>
        </h1>

        <h2 className="hero-title">
          Frontend Developer
        </h2>

        <p>
          I create beautiful, responsive websites, develop web
          applications, and produce technology content that helps
          people learn and businesses grow online.
        </p>

        <div className="hero-buttons">

          <a
            href="#contact"
            className="primary-btn"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="secondary-btn"
          >
            View Projects
          </a>

        </div>

        {/* SOCIAL MEDIA ICONS */}
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


      {/* RIGHT SIDE */}
      <div className="hero-image">

        <div className="image-box">

          <Image
            src="/images/tolaniade.png"
            alt="Tolani Adepitan"
            width={400}
            height={500}
            priority
          />

        </div>

      </div>

    </section>
  );
}