"use client";

import "../styles/contact.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

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

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}