import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <span className="footer-logo">SentiStock</span>
        <div className="footer-socials">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 SentiStock. All rights reserved. This app is a prototype. No information displayed is real.
        </p>
      </div>
    </footer>
  );
}
