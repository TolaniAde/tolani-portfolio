"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";  // WhatsApp icon
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <a href="#">
          Tolani<span>A.</span>
        </a>
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="nav-links">

          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={closeMenu}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#services"
              className={activeSection === "services" ? "active" : ""}
              onClick={closeMenu}
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>

        </ul>
      </nav>

      <a 
        href="https://wa.me/2347045044286?text=Hello%20Tolani%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%2Fopportunity%20with%20you."
        target="_blank"
        rel="noopener noreferrer" 
        className="hire-btn" download>
        <FaWhatsapp /> Let's Talk
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}