import React from "react";
import "./TrendingCourses.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const trendingCoursesData = [
  {
    name: "Generative AI",
    category: "Artificial Intelligence",
    description: "Master LLMs, prompt engineering, and building AI applications with modern frameworks.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Data Science",
    category: "Data & Analytics",
    description: "Learn Python, statistics, and machine learning to become a professional Data Scientist.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Data Analytics",
    category: "Data & Analytics",
    description: "Transform raw data into actionable insights using SQL, Excel, and Power BI/Tableau.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Multi DevOps",
    category: "Cloud & Automation",
    description: "Automate deployments and manage infrastructure using Docker, Kubernetes, and CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Java Full Stack",
    category: "Web Development",
    description: "Build scalable enterprise web applications using core Java, Spring Boot, and React/Angular.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Python Full Stack",
    category: "Web Development",
    description: "Create robust web apps end-to-end with Python, Django, and modern frontend technologies.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
  }
];

function TrendingCourses() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="trending-section" id="trending" ref={sectionRef}>
      <div className="trending-container">
        <div className="section-header" data-animate>
          <span className="section-eyebrow">TRENDING COURSES</span>
          <h2>Learn the skills that matter</h2>
        </div>

        <div className="trending-grid">
          {trendingCoursesData.map((course, index) => (
            <div
              className="t-course-card"
              key={index}
              data-animate
              style={{ "--delay": `${index * 0.12}s` }}
            >
              <div className="t-course-image">
                <img src={course.image} alt={course.name} />
                <span className="t-course-category">{course.category}</span>
              </div>
              <div className="t-course-content">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <a href="#courses" className="t-course-btn">View Course</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingCourses;
