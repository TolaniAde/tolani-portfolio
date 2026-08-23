"use client";

import "../styles/footer.css";

import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaXTwitter,
  FaArrowUp,
} from "react-icons/fa6";

export default function Footer() {

  const scrollToTop = () => {
    console.log("Back to top clicked");

    window.scrollTo(0, 0);
};

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* TOP FOOTER */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">

            <a href="#" className="footer-logo">
              Tolani<span>A.</span>
            </a>

            <p>
              Frontend Developer, Technical Writer and
              Tech Content Creator building useful digital
              experiences.
            </p>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-links">

            <h3>Quick Links</h3>

            <ul>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>

          </div>


          {/* SOCIALS */}
          <div className="footer-social">

            <h3>Connect With Me</h3>

            <div className="footer-social-icons">

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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://x.com/iamtolani_a?s=11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

        </div>


        {/* DIVIDER */}
        <div className="footer-divider"></div>


        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Tolani Adepitan.
            All rights reserved.
          </p>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}