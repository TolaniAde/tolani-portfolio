import {
  FaPhone,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const contactDetails = [
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+234 704 504 4286",
    href: "tel:+2347045044286",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "adepitantolani@gmail.com",
    href: "mailto:adepitantolani@gmail.com",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    value: "linkedin.com/in/tolani-adepitan",
    href: "https://www.linkedin.com/in/tolani-adepitan",
  },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/TolaniAde",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tolani-adepitan",
  },
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    href: "#",
  },
  {
    icon: <FaXTwitter />,
    label: "X",
    href: "https://x.com/iamtolani_a?s=11",
  },
];

export default function ContactInfo() {
  return (
    <div className="contact-info">

      <h3>Let's talk</h3>

      <p className="contact-intro">
        Whether you need a website, a web application,
        technical content, or simply want to discuss an
        idea, feel free to reach out.
      </p>

      {/* Contact Details */}
      {contactDetails.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="contact-item"
          target={
            item.label === "LinkedIn"
              ? "_blank"
              : undefined
          }
          rel={
            item.label === "LinkedIn"
              ? "noopener noreferrer"
              : undefined
          }
        >
          <div className="contact-icon">
            {item.icon}
          </div>

          <div>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        </a>
      ))}

      {/* Social Links */}
      <div className="contact-socials">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

    </div>
  );
}