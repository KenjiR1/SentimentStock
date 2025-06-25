
// Navigation bar

// Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="navbar" id="navbar-section">
        <Link to="/" className="logo">SentiStock</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}
