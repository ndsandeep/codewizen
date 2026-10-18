import React from "react";
import { Link } from "react-router-dom";
import "../../components/common/PageHero/PageHero.css";
import "./AboutUs.css";

const stats = [
  { number: "6+", label: "Live Client Projects" },
  { number: "4+", label: "Apps on Play Store" },
  { number: "10+", label: "Partner Companies" },
  { number: "18K+", label: "Students Trained" },
];

const whoWeArePoints = [
  "Live online training by working industry professionals",
  "Real client projects through company collaborations",
  "Apps published on the Play Store and live websites",
  "Internship and placement support after real project experience",
];

const collaborationFeatures = [
  {
    icon: "👥",
    title: "Team Collaboration",
    description: "Students work in agile teams under tech leads, gaining genuine engineering team experience.",
  },
  {
    icon: "⏱️",
    title: "Real Deadlines",
    description: "Experience production delivery cycles, client sprint meetings, and milestone deliverables.",
  },
  {
    icon: "🌿",
    title: "Git & Code Reviews",
    description: "Write clean, enterprise-grade code subjected to peer reviews and continuous integration.",
  },
  {
    icon: "💼",
    title: "Paid Internships",
    description: "Eligible students access paid internship opportunities, with stipends set by partner companies.",
  },
];

const studentJourneySteps = [
  {
    step: "1",
    title: "Learn Live",
    description: "Live classes with industry professionals, daily coding practice, and strong fundamentals.",
  },
  {
    step: "2",
    title: "Build Your Own Projects",
    description: "Build complete projects with Git, code reviews, and cloud deployment.",
  },
  {
    step: "3",
    title: "Work on a Live Client Project",
    description: "Join a real project through our partner companies: apps for the Play Store and websites for real clients.",
  },
  {
    step: "4",
    title: "Resume & Interview Prep",
    description: "Your resume shows live links. Mock interviews help you explain your real work with confidence.",
  },
  {
    step: "5",
    title: "Internship & Placement Support",
    description: "Get connected with internship and placement opportunities. Stipend depends on the company.",
  },
];

const studentProjects = [
  {
    badge: "Play Store App",
    title: "Client Logistics & Delivery App",
    description: "Real-time dispatch, route tracking, and proof-of-delivery mobile app published on the Google Play Store for an active client.",
    tech: ["Android", "Kotlin", "Firebase", "REST APIs"],
  },
  {
    badge: "Live Client Website",
    title: "Retail E-Commerce & Inventory Portal",
    description: "Full-stack customer web store with integrated secure payments, admin order fulfillment, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    badge: "Live Web App",
    title: "Healthcare Clinic Management System",
    description: "Patient scheduling, digital health records, and doctor appointment workflow application used in daily operations.",
    tech: ["React", "Python", "PostgreSQL", "AWS"],
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* ── 1. ABOUT HERO SECTION ── */}
      <section className="about-hero">
        <div className="about-hero-dot-grid"></div>
        <div className="about-hero-container" data-aos="fade-up">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="separator">/</li>
              <li><Link to="/about-us">About Us</Link></li>
              <li className="separator">/</li>
              <li><span>About Institute</span></li>
            </ul>
          </nav>
          <span className="about-hero-label">About Codewizen</span>
          <h1>
            We Don't Just Teach Code.
            <br />
            <span className="about-orange">Our Students Build Apps That Go Live.</span>
          </h1>
          <p>
            Codewizen is a software training institute that connects learning with real work.
            Through our collaborations with companies, students work on real client projects:
            Android apps published on the Play Store and websites used by real customers.
            Our students leave with live projects they can show, along with a certificate.
          </p>
          <div className="about-hero-btns">
            <a href="#live-projects" className="about-btn-primary">
              See Live Student Projects
            </a>
            <Link to="/contact-us" className="about-btn-secondary about-btn-light">
              Talk to an Expert
            </Link>
          </div>
        </div>
        <div className="about-hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* ── 2. STATISTICS SECTION ── */}
      <section className="about-stats-bar">
        <div className="about-stats-container">
          {stats.map((s, i) => (
            <div className="about-stat" data-aos="fade-up" data-aos-delay={(i + 1) * 100} key={i}>
              <h2>{s.number}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. WHO WE ARE (Why Codewizen Exists) ── */}
      <section className="about-intro" id="who-we-are">
        <div className="about-intro-container">
          <div className="about-intro-image" data-aos="fade-right">
            <img 
              src="/instructor_guide.jpg" 
              alt="Instructor guiding a student while coding" 
              loading="lazy"
            />
            <div className="about-intro-badge">
              <span>🚀</span>
              <div>
                <strong>Skills First. Real Work Next.</strong>
                <span>Live Mentorship & Production Projects</span>
              </div>
            </div>
          </div>
          <div className="about-intro-content" data-aos="fade-left">
            <span className="section-eyebrow">WHO WE ARE</span>
            <h2>Why Codewizen Exists</h2>
            <p>
              Every year, lakhs of students finish courses and start asking for placements,
              but their resumes show no real projects. Interviewers ask “What have you built?”
              and students have nothing live to show.
            </p>
            <p>
              We started Codewizen to change that. Our idea is simple:{" "}
              <strong>skills first, real work next, placement after.</strong> Students learn live
              from working professionals, build their own projects, and then join real client projects
              through our partner companies. They do the actual work that goes to production.
            </p>
            <div className="about-intro-points">
              {whoWeArePoints.map((pt) => (
                <div className="about-point" key={pt}>
                  <span className="about-check">✓</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <div className="about-intro-actions">
              <Link to="/our-trainers" className="about-btn-primary">
                Meet Our Trainers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR COLLABORATIONS ── */}
      <section className="about-collab">
        <div className="about-collab-container">
          <div className="about-collab-header" data-aos="fade-up">
            <span className="section-eyebrow">OUR COLLABORATIONS</span>
            <h2>Real Companies. Real Clients. Real Projects.</h2>
            <p>
              Codewizen works with partner companies that need apps and websites built.
              Eligible students are assigned to these projects after their core training.
              They work in a team, follow real deadlines, use Git and code reviews, and see their work go live for real users.
            </p>
            <p className="about-collab-sub">
              Some of these opportunities include paid internships, depending on the partner company.
            </p>
          </div>

          <div className="about-collab-grid">
            {collaborationFeatures.map((feat, idx) => (
              <div className="collab-card" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} key={idx}>
                <div className="collab-icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MISSION AND VISION ── */}
      <section className="about-mv">
        <div className="about-mv-container">
          <div className="about-mv-card about-mission" data-aos="fade-up">
            <div className="mv-icon">🎯</div>
            <span className="section-eyebrow">OUR MISSION</span>
            <h3>Our Mission</h3>
            <p>
              “To make every student job-ready through real work, not just classes. We help students
              build real skills, work on live client projects, and enter interviews with experience they can prove.”
            </p>
          </div>
          <div className="about-mv-card about-vision" data-aos="fade-up" data-aos-delay="150">
            <div className="mv-icon">🔭</div>
            <span className="section-eyebrow">OUR VISION</span>
            <h3>Our Vision</h3>
            <p>
              “To become the institute where every student's resume includes a live app or website that real people use.”
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. STUDENT JOURNEY (SINGLE FIVE-STEP JOURNEY) ── */}
      <section className="about-journey" id="student-journey">
        <div className="about-journey-container">
          <div className="about-journey-header" data-aos="fade-up">
            <span className="section-eyebrow">YOUR JOURNEY WITH CODEWIZEN</span>
            <h2>From Student to Developer with Live Work</h2>
            <p>A proven, structured 5-step path connecting core learning directly to live production experience.</p>
          </div>

          <div className="about-journey-list">
            {studentJourneySteps.map((step) => (
              <div className="journey-step-item" data-aos="fade-up" key={step.step}>
                <div className="journey-step-badge">{step.step}</div>
                <div className="journey-step-details">
                  <h3>
                    Step {step.step}: {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LIVE PROJECT HIGHLIGHT ── */}
      <section className="about-projects" id="live-projects">
        <div className="about-projects-container">
          <div className="about-projects-header" data-aos="fade-up">
            <span className="section-eyebrow">LIVE PROJECT HIGHLIGHT</span>
            <h2>See What Our Students Have Built</h2>
            <p>Real apps on the Play Store and live websites, built by Codewizen students for real clients.</p>
          </div>

          <div className="about-projects-grid">
            {studentProjects.map((proj, i) => (
              <div className="about-project-card" data-aos="fade-up" data-aos-delay={(i + 1) * 100} key={i}>
                <div className="project-badge">{proj.badge}</div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="project-tech-stack">
                  {proj.tech.map((t) => (
                    <span className="tech-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="about-projects-cta" data-aos="fade-up">
            <Link to="/project-training" className="about-btn-primary">
              View Live Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CALL TO ACTION ── */}
      <section className="about-cta">
        <div className="about-cta-container" data-aos="zoom-in">
          <h2>Stop Asking for Placement. Start Building Real Work.</h2>
          <p>
            Join Codewizen, learn live, work on real client projects, and build a resume that interviewers take seriously.
          </p>
          <div className="about-cta-btns">
            <Link to="/contact-us" className="about-btn-primary about-cta-demo">
              Book Free Demo
            </Link>
            <Link to="/contact-us" className="about-btn-secondary about-btn-light">
              Get Free Counseling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
