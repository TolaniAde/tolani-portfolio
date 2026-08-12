import "../styles/hero.css";
import Image from "next/image";

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
            href="#"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href="#"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="#"
            aria-label="Twitter"
          >
            X
          </a>

          <a
            href="#"
            aria-label="Facebook"
          >
            f
          </a>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="hero-image">

        <div className="image-box">

          <Image
            src="/images/tolani.jpg"
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