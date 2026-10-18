import React from "react";
import "./Benefits.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const benefitsData = [
  { icon: "?????", title: "Dedicated & Personalized Training", description: "Focus on individual growth with tailored learning paths." },
  { icon: "??", title: "Industry-Oriented Curriculum", description: "Learn what the tech industry actually demands." },
  { icon: "??", title: "Expert Trainers", description: "Guidance from experienced IT professionals." },
  { icon: "??", title: "Placement Support", description: "Dedicated assistance for your tech career." },
  { icon: "??", title: "Interactive Learning", description: "Engaging classes with active participation." },
  { icon: "??", title: "AI Mock Interviews", description: "Prepare for interviews with AI-driven simulations." },
  { icon: "??", title: "Hands-on Assignments", description: "Practical tasks to solidify your understanding." },
  { icon: "??", title: "Live Projects", description: "Build real-world applications from scratch." }
];

function Benefits() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="benefits-section" ref={sectionRef}>
      <div className="benefits-container">
        <div className="section-header" data-animate>
          <span className="section-eyebrow">CODEWIZEN BENEFITS</span>
          <h2>Why students choose us</h2>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div
              className="benefit-card"
              key={index}
              data-animate
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
