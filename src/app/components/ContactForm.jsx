"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import FormSuccess from "./FormSuccess";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Submit form to Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formspree.io/f/xnpabgkq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setFormData(initialFormData);
        setStatus("success");
      } else {
        console.error("Formspree error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  // Reset form
  const handleReset = () => {
    setStatus("idle");
  };

  // Show success message
  if (status === "success") {
    return <FormSuccess onReset={handleReset} />;
  }

  return (
    <div className="contact-form-wrapper">

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        {/* Name + Email */}
        <div className="form-row">

          <FormInput
            label="Your Name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
          />

          <FormInput
            label="Your Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
          />

        </div>

        {/* Subject */}
        <FormInput
          label="Subject"
          name="subject"
          type="text"
          placeholder="What would you like to discuss?"
          value={formData.subject}
          onChange={handleChange}
          disabled={status === "submitting"}
        />

        {/* Message */}
        <FormInput
          label="Message"
          name="message"
          textarea
          rows="6"
          placeholder="Tell me about your project or idea..."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "submitting"}
        />

        {/* Error */}
        {status === "error" && (
          <div className="form-error">
            Something went wrong while sending your
            message. Please try again.
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="contact-submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              Sending...
              <span className="submit-spinner"></span>
            </>
          ) : (
            <>
              Send Message
              <FaPaperPlane />
            </>
          )}
        </button>

      </form>

    </div>
  );
}


/* Reusable Input Component */
function FormInput({
  label,
  name,
  type = "text",
  textarea = false,
  ...props
}) {
  const InputElement = textarea ? "textarea" : "input";

  return (
    <div className="form-group">

      <label htmlFor={name}>
        {label}
      </label>

      <InputElement
        id={name}
        name={name}
        type={!textarea ? type : undefined}
        {...props}
      />

    </div>
  );
}