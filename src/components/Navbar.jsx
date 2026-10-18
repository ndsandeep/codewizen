import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <header className="site-header">
      <nav className={`main-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-container">

          <Link to="/" className="site-logo">
            <div className="logo-mark">C</div>
            <div className="logo-text">
              <strong>CODEWIZEN</strong>
            </div>
          </Link>

          <div className="nav-menu">

            <Link to="/" className={isActive("/")}>HOME</Link>

            <div className="nav-dropdown">
              <Link to="/about-us" className={isActive("/about-us")}>ABOUT US</Link>
              <div className="dropdown-menu">
                <Link to="/about-us">ABOUT INSTITUTE</Link>
                <Link to="/our-trainers">OUR TRAINERS</Link>
                <Link to="/why-choose-us">WHY CHOOSE US</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/courses" className={isActive("/courses")}>COURSES</Link>
              <div className="dropdown-menu">
                <Link to="/java-full-stack">JAVA FULL STACK</Link>
                <Link to="/python-full-stack">PYTHON FULL STACK</Link>
                <Link to="/data-analytics">DATA ANALYTICS</Link>
                <Link to="/software-testing">SOFTWARE TESTING</Link>
                <Link to="/courses">VIEW ALL COURSES</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/training" className={isActive("/training")}>TRAININGS</Link>
              <div className="dropdown-menu">
                <Link to="/classroom-training">CLASSROOM TRAINING</Link>
                <Link to="/online-training">ONLINE TRAINING</Link>
                <Link to="/corporate-training">CORPORATE TRAINING</Link>
                <Link to="/internship-program">INTERNSHIP PROGRAM</Link>
                <Link to="/project-training">PROJECT TRAINING</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/upcoming-batches" className={isActive("/upcoming-batches")}>NEW BATCHES</Link>
              <div className="dropdown-menu">
                <Link to="/upcoming-batches">UPCOMING BATCHES</Link>
                <Link to="/batch-schedule">BATCH SCHEDULE</Link>
                <Link to="/free-demo">FREE DEMO</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/enroll-now" className={isActive("/enroll-now")}>REGISTRATION</Link>
              <div className="dropdown-menu">
                <Link to="/enroll-now">ENROLL NOW</Link>
                <Link to="/free-demo">BOOK FREE DEMO</Link>
                <Link to="/course-registration">COURSE REGISTRATION</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/placement-assistance" className={isActive("/placement-assistance")}>PLACEMENTS</Link>
              <div className="dropdown-menu">
                <Link to="/placement-assistance">PLACEMENT ASSISTANCE</Link>
                <Link to="/placed-students">PLACED STUDENTS</Link>
                <Link to="/hiring-partners">HIRING PARTNERS</Link>
                <Link to="/career-support">CAREER SUPPORT</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/contact-us" className={isActive("/contact-us")}>CONTACT US</Link>
              <div className="dropdown-menu">
                <Link to="/contact-us">CONTACT US</Link>
                <Link to="/our-location">OUR LOCATION</Link>
                <Link to="/course-enquiry">COURSE ENQUIRY</Link>
              </div>
            </div>

          </div>

          <button className="mobile-menu-button" aria-label="Open menu">?</button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
