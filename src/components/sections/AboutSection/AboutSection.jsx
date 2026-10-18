import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

const codewizenSteps = [
  {
    step: "1",
    title: "Learn Live",
    description:
      "Live online classes with working industry professionals. Daily practice and real coding, not just theory.",
  },
  {
    step: "2",
    title: "Build Real Projects",
    description:
      "Build enterprise-style projects with Git, code reviews, and cloud deployment. Every project goes on your resume with a live link.",
  },
  {
    step: "3",
    title: "Work on Live Client Projects",
    description:
      "Through our company collaborations, eligible students are assigned to real client projects: apps going to the Play Store and websites used by real customers. This is real work for real clients, not a practice exercise.",
  },
  {
    step: "4",
    title: "Internship & Placement Support",
    description:
      "With real skills and real project experience on your resume, you're ready for internships and placement opportunities. Some internships are paid, and the stipend depends on the partner company.",
  },
];

function AboutSection() {
  return (
    <section className="about-section codewizen-way-section" id="about">
      {/* Decorative background elements */}
      <div className="about-decor decor-top-left"></div>
      <div className="about-decor decor-bottom-right"></div>

      <div className="about-container">
        {/* TOP CONTENT */}
        <div className="about-content">
          <div className="about-label-wrapper">
            <span className="about-label-line"></span>
            <span className="about-label">THE CODEWIZEN WAY</span>
            <span className="about-label-line"></span>
          </div>

          <h2 className="codewizen-way-title">
            Skills First. Placement Next.
          </h2>

          <h3 className="codewizen-way-subtitle">
            Don't Ask for Placement. Become Placement-Ready.
          </h3>

          <p className="about-text codewizen-way-desc">
            Many students ask for placements before they have real skills. Their resumes list only course names, with no projects, no live links, and nothing to show an interviewer. Companies don't hire certificates. They hire people who can build. At Codewizen, you first learn, then build, then work on real client projects. Placement becomes the natural next step.
          </p>
        </div>

        {/* FOUR-STEP LEARNING PROCESS */}
        <div className="way-steps-container">
          <div className="way-steps-grid">
            {codewizenSteps.map((item) => (
              <div className="way-step-card" key={item.step}>
                <div className="way-step-number">{item.step}</div>
                <div className="way-step-body">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HIGHLIGHT STATEMENT */}
        <div className="way-highlight-statement">
          <p>
            “Your resume won't say ‘completed a course.’ It will say ‘worked on a live client project.’”
          </p>
        </div>

        {/* BUTTON */}
        <div className="way-cta-wrapper">
          <Link to="/free-demo" className="way-btn-primary">
            Book Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;