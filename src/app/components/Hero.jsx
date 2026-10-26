import "../styles/hero.css";
import Image from "next/image";

import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="hero">

      {/* =========================================
          HERO BACKGROUND DECORATIONS
      ========================================= */}

      <div className="hero-bg-circle hero-bg-circle-1"></div>
      <div className="hero-bg-circle hero-bg-circle-2"></div>
      <div className="hero-bg-dot hero-bg-dot-1"></div>
      <div className="hero-bg-dot hero-bg-dot-2"></div>


      {/* =========================================
          LEFT SIDE — HERO TEXT
      ========================================= */}

      <div className="hero-text">

        {/* Welcome badge */}
        <span className="hero-tag">
          👋 Welcome to my Portfolio
        </span>


        {/* Main heading */}
        <h1>
          Hi, I'm{" "}
          <span className="hero-name">
            Tolani Adepitan
          </span>
        </h1>


        {/* Job title */}
        <h2 className="hero-title">
          Frontend Developer | Freelancer
        </h2>


        {/* Description */}
        <p>
          I create beautiful, responsive websites, develop web
          applications, and produce technology content that helps
          people learn and businesses grow online.
        </p>


        {/* Buttons */}
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


        {/* =========================================
            SOCIAL MEDIA ICONS
        ========================================= */}

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


      {/* =========================================
          RIGHT SIDE — HERO IMAGE
      ========================================= */}

      <div className="hero-image">

        {/* Outer glow */}
        <div className="hero-image-glow"></div>


        {/* Decorative rings */}
        <div className="image-ring ring-one"></div>
        <div className="image-ring ring-two"></div>
        <div className="image-ring ring-three"></div>


        {/* Small decorative dots */}
        <span className="image-dot image-dot-one"></span>
        <span className="image-dot image-dot-two"></span>


        {/* Circular image */}
        <div className="image-box">

          <Image
            src="/images/AdepitanTolani.png"
            alt="Tolani Adepitan"
            width={600}
            height={600}
            priority
            className="hero-person"
          />

        </div>

      </div>

    </section>
  );
}