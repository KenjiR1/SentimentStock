import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.target.reset();
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <svg className="contact-divider" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(5, 40, 68, 0.8)"
            d="M0,200 C360,100 720,300 1080,120 L1440,40 L1440,320 L0,320 Z"
          />
        </svg>
      </section>

      {/* Main Section: Info + Form */}
      <section className="contact-content">
        {/* Info Section */}
        <div className="contact-info">
          <div className="contact-banner"></div>
          <h2>We’d love to hear from you</h2>
          <p>
            For inquiries, bug reports, feature suggestions, or collaboration opportunities, don’t hesitate to reach out.
            Our team is always listening.
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:support@sentistock.com">support@sentistock.com</a>
          </p>
        </div>

        {/* Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Get in Touch</h2>

          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className="contact-button">Send Message</button>

          {submitted && (
            <p className="confirmation-message">✓ Your message was sent successfully!</p>
          )}
        </form>
      </section>
    </div>
  );
}
