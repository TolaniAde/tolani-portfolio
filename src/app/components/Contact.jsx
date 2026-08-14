import "../styles/contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaXTwitter,
  FaPaperPlane,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Section Header */}
        <div className="contact-header">
          <span className="section-tag">GET IN TOUCH</span>

          <h2>
            Let's <span>Work Together</span>
          </h2>

          <p>
            Have a project, idea, or opportunity in mind?
            I'd love to hear from you. Let's create something
            useful and impactful together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-info">

            <h3>Let's talk</h3>

            <p className="contact-intro">
              Whether you need a website, a web application,
              technical content, or simply want to discuss an
              idea, feel free to reach out.
            </p>

            {/* Phone */}
            <a
              href="tel:+2347045044286"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaPhone />
              </div>

              <div>
                <span>Phone</span>
                <strong>+234 704 504 4286</strong>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:tprince2018@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>
                <strong>tprince2018@gmail.com</strong>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaLinkedinIn />
              </div>

              <div>
                <span>LinkedIn</span>
                <strong>linkedin.com/in/yourusername</strong>
              </div>
            </a>

            {/* Social Media */}
            <div className="contact-socials">

              <a
                href="#"
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
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>


          {/* Contact Form */}
          <div className="contact-form-wrapper">

            <form className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>


              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                />
              </div>


              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}