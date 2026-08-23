import { FaPaperPlane } from "react-icons/fa6";

export default function FormSuccess({ onReset }) {
  return (
    <div className="form-success">

      <div className="success-icon">
        ✓
      </div>

      <h3>
        Message Sent!
      </h3>

      <p>
        Thank you for reaching out. Your message has
        been received. You'll hear from me soon.
      </p>

      <button
        type="button"
        className="contact-submit"
        onClick={onReset}
      >
        Send Another Message
        <FaPaperPlane />
      </button>

    </div>
  );
}