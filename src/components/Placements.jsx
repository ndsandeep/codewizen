import React from "react";
import "./Placements.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const recentPlacements = [
  { name: "[Student Name]", course: "[Course Name]", company: "[Company Name]", role: "[Job Role]", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" },
  { name: "[Student Name]", course: "[Course Name]", company: "[Company Name]", role: "[Job Role]", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" },
  { name: "[Student Name]", course: "[Course Name]", company: "[Company Name]", role: "[Job Role]", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80" },
  { name: "[Student Name]", course: "[Course Name]", company: "[Company Name]", role: "[Job Role]", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" },
  { name: "[Student Name]", course: "[Course Name]", company: "[Company Name]", role: "[Job Role]", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" },
  { name: "[Student Name]", course: "[Course Name]", company: "[Company Name]", role: "[Job Role]", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" }
];

function Placements() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="placements-section" id="placements" ref={sectionRef}>
      <div className="placements-container">
        <div className="section-header" data-animate>
          <span className="section-eyebrow">SUCCESS STORIES</span>
          <h2>Recent Placements</h2>
        </div>

        <div className="placements-grid">
          {recentPlacements.map((student, index) => (
            <div
              className="placement-card"
              key={index}
              data-animate
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className="placement-header">
                <img src={student.image} alt="Student" className="placement-avatar" />
                <div className="placement-info">
                  <h3>{student.name}</h3>
                  <span className="placement-course">{student.course}</span>
                </div>
              </div>
              <div className="placement-details">
                <p>Placed at <strong>{student.company}</strong></p>
                <p className="placement-role">{student.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Placements;
