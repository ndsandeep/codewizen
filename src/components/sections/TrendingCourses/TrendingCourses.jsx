import React, { useRef } from "react";
import "./TrendingCourses.css";
import { Link, useNavigate } from "react-router-dom";
import useFirebaseData from '../../../hooks/useFirebaseData';

const resolveCourseLink = (course) => {
  if (!course) return "/generative-ai";
  const name = (course.name || "").toLowerCase();
  const link = (course.link || "").trim().toLowerCase();

  // If name or link refers to Generative AI / Gen AI / LLMs, or is the old fallback "/courses" for Gen AI
  if (
    name.includes("gen") || 
    name.includes("generative") || 
    name.includes("llm") || 
    (name.includes("ai") && !name.includes("chain") && !name.includes("data")) ||
    link.includes("gen-ai") || 
    link.includes("generative-ai") ||
    (link === "/courses" && name.includes("ai"))
  ) {
    return "/generative-ai";
  }

  if (name.includes("java")) return "/java-full-stack";
  if (name.includes("python")) return "/python-full-stack";
  if (name.includes("science")) return "/data-science";
  if (name.includes("analytics")) return "/data-analytics";
  if (name.includes("testing")) return "/software-testing";
  if (name.includes("react")) return "/react-js";
  if (name.includes("cloud")) return "/cloud-computing";
  if (name.includes("devops")) return "/devops-automation";
  if (name.includes("cyber")) return "/cyber-security";
  if (name.includes("ui") || name.includes("ux")) return "/ui-ux-design";
  if (name.includes("custom")) return "/contact-us";

  if (course.link && course.link !== "/courses" && course.link !== "#") {
    return course.link;
  }
  return "/generative-ai";
};

function TrendingCourses() {
  const navigate = useNavigate();
  const [courses] = useFirebaseData('codewizen_courses', [
    {
      id: 1,
      name: "Java Full Stack Development",
      category: "Enterprise Web",
      description: "Build scalable microservices and web applications with Java, Spring Boot, React, and AWS Cloud.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "/java-full-stack"
    },
    {
      id: 2,
      name: "Python Full Stack Development",
      category: "Full Stack & Cloud",
      description: "Master Python, Django, FastAPI, React JS, PostgreSQL, and scalable Docker deployments.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
      link: "/python-full-stack"
    },
    {
      id: 3,
      name: "Generative AI & LLMs",
      category: "Artificial Intelligence",
      description: "Master LLMs, LangChain, vector databases (Pinecone), RAG systems, and AI agent frameworks.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
      link: "/generative-ai"
    },
    {
      id: 4,
      name: "Data Science & Machine Learning",
      category: "Data & ML",
      description: "Learn Python, statistical modeling, machine learning, Pandas, and production model deployment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "/data-science"
    },
    {
      id: 5,
      name: "Custom Course (Tailored Track)",
      category: "Personalized Roadmap",
      description: "Design your custom tech stack and project architecture with 1-on-1 expert mentor guidance.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      link: "/contact-us"
    }
  ]);

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="trending-slider-section" id="trending">
      <div className="trending-slider-container">

        <div className="slider-header-wrapper" data-aos="fade-up">
          <div className="section-header">
            <span className="section-eyebrow">PROJECT-DRIVEN COURSES</span>
            <h2>Master Technologies with Real-Time Projects</h2>
          </div>

          <div className="slider-controls">
            <button className="slider-arrow" onClick={slideLeft} aria-label="Previous Course">
              &#8592;
            </button>
            <button className="slider-arrow" onClick={slideRight} aria-label="Next Course">
              &#8594;
            </button>
          </div>
        </div>

        <div className="courses-slider" ref={sliderRef} data-aos="fade-up" data-aos-delay="200">
          {courses.map((course, index) => {
            const courseUrl = resolveCourseLink(course);
            return (
              <div 
                className="slider-course-card" 
                key={course.id || index}
                onClick={() => navigate(courseUrl)}
                style={{ cursor: 'pointer' }}
              >
                <div className="slider-course-img">
                  <img src={course.image} alt={course.name} />
                  <div className="slider-course-category">{course.category}</div>
                </div>
                <div className="slider-course-content">
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <Link 
                    to={courseUrl} 
                    className="slider-course-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Course <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TrendingCourses;
