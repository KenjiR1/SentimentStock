
// Navigation bar

// Navbar.jsx
import "./Navbar.css";

export default function Navbar() {
    return (
        <header>
            <div className="navbar" id="navbar-section">
                <a href="#navbar-section" className="logo">SentiStock</a>

                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </header>
    );
}