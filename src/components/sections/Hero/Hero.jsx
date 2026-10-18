import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      {/* ── Background Patterns ── */}
      <div className="hero-bg-map"></div>
      <div className="hero-dot-pattern top-left"></div>
      <div className="hero-dot-pattern top-right"></div>

      {/* Floating Plus Sign */}
      <div className="hero-plus-icon">+</div>

      <div className="hero-container">

        {/* ══════════════ LEFT SIDE ══════════════ */}
        <div className="hero-left" data-aos="fade-right" data-aos-duration="1000">

          {/* Eyebrow */}
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow">THE CODEWIZEN WAY</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Skills First.<br />
            <span className="hero-headline-accent">Placement Next.</span>
          </h1>

          <h2 className="hero-subheadline">
            Don't Ask for Placement. Become Placement-Ready.
          </h2>

          {/* Description */}
          <p className="hero-desc">
            Many students ask for placements before they have real skills. Their resumes list only course names, with no projects, no live links, and nothing to show an interviewer. Companies don't hire certificates. They hire people who can build. At Codewizen, you first learn, then build, then work on real client projects. Placement becomes the natural next step.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <Link to="/contact-us" className="hero-btn hero-btn-primary">
              Book Free Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </Link>
            <Link to="/about-us#live-projects" className="hero-btn hero-btn-secondary">
              See Live Student Projects <span>→</span>
            </Link>
          </div>

          {/* 4-Step Trust Indicators */}
          <div className="hero-trust-indicators">
            <div className="hero-trust-item">
              <div className="trust-icon-box">1</div>
              <span>Learn<br />Live</span>
            </div>

            <div className="trust-divider"></div>

            <div className="hero-trust-item">
              <div className="trust-icon-box">2</div>
              <span>Build Real<br />Projects</span>
            </div>

            <div className="trust-divider"></div>

            <div className="hero-trust-item">
              <div className="trust-icon-box trust-icon-active">3</div>
              <span>Work on Live<br />Client Projects</span>
            </div>

            <div className="trust-divider"></div>

            <div className="hero-trust-item">
              <div className="trust-icon-box">4</div>
              <span>Internship &<br />Placement</span>
            </div>
          </div>

        </div>

        {/* ══════════════ RIGHT SIDE ══════════════ */}
        <div className="hero-right" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">

          <div className="hero-image-wrapper">

            {/* Dark Blue organic background shape */}
            <div className="hero-image-backdrop" data-aos="zoom-in" data-aos-delay="400"></div>

            {/* Orange decorative line */}
            <div className="hero-orange-line"></div>

            {/* Decorative circle outline */}
            <div className="hero-circle-outline"></div>

            {/* Main Image */}
            <div className="hero-img-container">
              <img
                src="/hero_image.jpg"
                alt="Students building live client projects"
                className="hero-main-img"
              />
            </div>

            {/* Practical Learning Card with Highlight Statement */}
            <div className="hero-practical-card hero-highlight-card" data-aos="fade-up" data-aos-delay="600">
              <div className="practical-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.5 2.5a3.5 3.5 0 0 0-5 0L2.5 8.5a3.5 3.5 0 0 0 0 5l6 6a3.5 3.5 0 0 0 5 0l6-6a3.5 3.5 0 0 0 0-5z" /><path d="M8.5 14.5L12 11l3.5 3.5" /><path d="M12 11v8" />
                </svg>
              </div>
              <div className="practical-content">
                <strong>The Codewizen Promise</strong>
                <span>“Your resume won't say ‘completed a course.’ It will say ‘worked on a live client project.’”</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── Bottom Wave Transition ── */}
      <div className="hero-bottom-wave" data-aos="fade-up" data-aos-duration="1200">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C320,100 420,-20 720,40 C1020,100 1120,-20 1440,40 L1440,120 L0,120 Z" fill="#eef2ff" opacity="0.5" />
          <path d="M0,80 C320,140 420,20 720,80 C1020,140 1120,20 1440,80 L1440,120 L0,120 Z" fill="#0b2059" />
        </svg>
      </div>

    </section>
  );
}

export default Hero;
