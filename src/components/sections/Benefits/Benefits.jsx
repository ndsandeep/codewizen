import React, { useState, useEffect, useRef } from "react";
import "./Benefits.css";
import { FaTimes, FaCheck, FaLightbulb, FaExclamationCircle } from "react-icons/fa";

const CLOUD_SHAPE_PATH = 
  "M 288.3,50.2 C 285.5,50.7 279.3,51.4 274.9,53.4 C 270.4,55.3 265.7,58.8 261.7,61.9 C 257.7,64.9 254.7,70.5 250.7,71.7 C 246.8,72.9 242.3,70.3 238.0,69.0 C 233.6,67.6 229.1,65.3 224.6,63.8 C 220.1,62.4 215.6,61.3 211.2,60.4 C 206.7,59.5 202.2,58.5 197.8,58.5 C 193.3,58.5 188.8,59.6 184.4,60.4 C 179.9,61.1 175.4,61.7 170.9,62.9 C 166.5,64.1 162.0,65.5 157.5,67.5 C 153.1,69.4 148.5,71.8 144.1,74.7 C 139.8,77.5 135.3,80.8 131.4,84.6 C 127.5,88.3 123.8,93.0 120.7,97.3 C 117.6,101.6 115.0,105.9 112.7,110.3 C 110.5,114.6 108.8,118.9 107.3,123.2 C 105.9,127.6 104.7,131.9 104.2,136.2 C 103.6,140.5 103.9,144.9 103.9,149.2 C 103.9,153.5 104.9,157.9 104.2,162.2 C 103.6,166.4 102.8,170.7 100.0,174.5 C 97.1,178.3 91.3,181.2 87.2,185.1 C 83.0,189.0 78.4,193.6 75.3,197.8 C 72.2,202.1 70.2,206.5 68.3,210.8 C 66.5,215.1 65.1,219.5 64.3,223.8 C 63.6,228.1 63.6,232.4 63.7,236.8 C 63.8,241.1 64.1,245.4 65.0,249.7 C 66.0,254.1 67.5,258.4 69.3,262.7 C 71.2,267.0 73.1,271.4 76.1,275.7 C 79.1,280.0 83.1,284.8 87.2,288.4 C 91.3,292.0 96.1,295.1 100.6,297.5 C 105.0,299.8 109.5,301.4 114.0,302.6 C 118.4,303.9 122.9,304.4 127.4,304.8 C 131.8,305.2 136.3,305.1 140.8,304.8 C 145.2,304.5 150.4,302.6 154.1,303.2 C 157.9,303.8 161.3,305.4 163.3,308.4 C 165.4,311.4 165.1,316.8 166.6,321.1 C 168.0,325.4 169.7,329.7 171.8,334.1 C 174.0,338.4 176.0,342.9 179.2,347.0 C 182.4,351.1 186.9,355.3 191.1,358.7 C 195.3,362.0 200.0,364.8 204.5,367.1 C 208.9,369.4 213.4,371.1 217.9,372.5 C 222.3,373.9 226.8,375.2 231.3,375.6 C 235.8,376.0 240.2,375.6 244.7,374.9 C 249.2,374.3 253.6,373.1 258.1,371.5 C 262.6,370.0 267.0,368.1 271.5,365.6 C 276.0,363.1 280.5,358.9 284.9,356.7 C 289.3,354.4 294.1,351.1 298.1,352.1 C 302.1,353.2 305.1,359.2 309.0,363.2 C 313.0,367.3 317.4,372.0 321.8,376.2 C 326.1,380.4 330.7,385.0 335.2,388.6 C 339.7,392.1 344.1,394.9 348.6,397.7 C 353.1,400.5 357.6,403.0 362.0,405.4 C 366.5,407.7 371.9,410.9 375.3,411.7 C 378.7,412.6 382.5,412.9 382.5,410.7 C 382.4,408.6 377.8,403.0 375.0,398.9 C 372.2,394.8 368.3,390.3 365.4,385.9 C 362.6,381.6 360.2,377.3 357.8,373.0 C 355.5,368.6 353.2,364.3 351.3,360.0 C 349.5,355.7 347.0,350.6 346.7,347.0 C 346.4,343.5 347.0,338.8 349.6,338.4 C 352.1,338.1 357.7,343.2 362.0,345.1 C 366.3,347.0 370.9,348.8 375.4,349.6 C 379.9,350.5 384.4,350.6 388.8,350.2 C 393.3,349.8 397.8,349.5 402.2,347.3 C 406.7,345.2 411.6,341.1 415.4,337.2 C 419.2,333.4 421.6,328.0 425.1,324.4 C 428.5,320.8 431.8,317.2 435.8,315.5 C 439.8,313.9 444.7,315.1 449.2,314.5 C 453.6,314.0 458.1,313.6 462.6,312.4 C 467.0,311.1 471.5,309.4 476.0,307.2 C 480.4,304.9 485.2,301.9 489.3,298.8 C 493.4,295.6 497.2,292.3 500.7,288.4 C 504.1,284.6 507.4,280.0 510.1,275.7 C 512.8,271.4 515.0,267.0 516.8,262.7 C 518.6,258.4 519.8,254.1 520.8,249.7 C 521.8,245.4 522.6,241.1 522.8,236.8 C 523.1,232.4 522.9,228.1 522.3,223.8 C 521.6,219.5 520.4,215.1 519.1,210.8 C 517.8,206.5 516.5,202.2 514.4,197.8 C 512.4,193.5 509.9,189.1 506.8,184.9 C 503.7,180.6 500.0,176.1 496.0,172.5 C 492.0,168.9 487.1,166.0 482.7,163.3 C 478.2,160.5 473.6,158.0 469.3,155.9 C 465.0,153.8 459.6,153.2 456.8,150.5 C 454.1,147.7 453.5,143.4 452.6,139.4 C 451.6,135.5 452.2,130.8 451.2,126.5 C 450.1,122.2 448.4,117.8 446.5,113.5 C 444.5,109.2 442.6,104.8 439.7,100.5 C 436.8,96.3 433.0,91.8 429.0,88.2 C 425.0,84.6 420.1,81.7 415.6,79.1 C 411.2,76.5 406.7,74.1 402.2,72.9 C 397.8,71.6 393.3,71.6 388.8,71.4 C 384.4,71.1 379.9,71.2 375.4,71.4 C 370.9,71.5 366.5,71.1 362.0,72.0 C 357.5,73.0 353.0,75.7 348.6,77.2 C 344.3,78.7 339.4,82.2 335.9,81.3 C 332.4,80.3 330.6,74.9 327.6,71.3 C 324.6,67.8 321.9,62.9 318.2,59.9 C 314.4,56.9 309.5,54.8 305.0,53.2 C 300.6,51.5 294.4,50.4 291.6,49.9 C 288.8,49.4 291.1,49.6 288.3,50.2 Z";

function Benefits() {
  // Sequential pop-up states for the three "STUDENT THINKS" cloud bubbles
  const [showCloud1, setShowCloud1] = useState(false);
  const [showCloud2, setShowCloud2] = useState(false);
  const [showCloud3, setShowCloud3] = useState(false);

  // Modal insight trigger state if student wants more detail
  const [selectedInsight, setSelectedInsight] = useState(null);

  // Section reference for viewport entrance detection
  const sectionRef = useRef(null);
  const timer1Ref = useRef(null);
  const timer2Ref = useRef(null);
  const timer3Ref = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setShowCloud1(true);
      setShowCloud2(true);
      setShowCloud3(true);
      return;
    }

    const clearTimers = () => {
      if (timer1Ref.current) clearTimeout(timer1Ref.current);
      if (timer2Ref.current) clearTimeout(timer2Ref.current);
      if (timer3Ref.current) clearTimeout(timer3Ref.current);
    };

    const resetClouds = () => {
      clearTimers();
      isPlayingRef.current = false;
      setShowCloud1(false);
      setShowCloud2(false);
      setShowCloud3(false);
    };

    const startSequence = () => {
      if (isPlayingRef.current) return;
      isPlayingRef.current = true;
      clearTimers();

      // Reset first to ensure clean pop-in entrance
      setShowCloud1(false);
      setShowCloud2(false);
      setShowCloud3(false);

      // Pop-up 1 appears after 2 seconds of the user arriving at this section
      timer1Ref.current = setTimeout(() => {
        setShowCloud1(true);

        // Pop-up 2 appears 3.5 seconds after Pop-up 1
        timer2Ref.current = setTimeout(() => {
          setShowCloud2(true);

          // Pop-up 3 appears 3.5 seconds after Pop-up 2
          timer3Ref.current = setTimeout(() => {
            setShowCloud3(true);
          }, 3500);
        }, 3500);
      }, 2000);
    };

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      startSequence();
      return;
    }

    // Trigger every time the user comes to this section, and reset when they leave
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          startSequence();
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.05) {
          resetClouds();
        }
      },
      {
        threshold: [0, 0.05, 0.2, 0.35]
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      clearTimers();
    };
  }, []);

  const insightData = {
    ats: {
      title: "The ATS Resume Shock",
      tip: "Over 75% of resumes are automatically rejected in 6 seconds because they lack real production keywords.",
      fix: "Replace basic college projects (ToDo App, Calculator) with a live microservice architecture and direct GitHub commit links."
    },
    tutorial: {
      title: "The Tutorial Trap",
      tip: "Watching 50 hours of YouTube tutorials without writing architecture is NOT building skills.",
      fix: "Work in Agile sprints, resolve Git merge conflicts, write modular APIs, and containerize using Docker."
    },
    interview: {
      title: "The Live Code Test",
      tip: "Tech leads don't ask definition questions anymore. They want to see live deployed cloud projects.",
      fix: "Deploy your project live to AWS/Vercel with automated CI/CD and be ready to explain your database architecture."
    }
  };

  return (
    <section className="benefits-section" id="benefits" ref={sectionRef}>
      <div className="benefits-container">
        
        {/* Provocative Header That Makes Students Pause and Think */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">A 60-SECOND REALITY CHECK</span>
          <h2>15 Lakh Graduates. Zero Callbacks. Are You Making This Mistake?</h2>
          <p className="section-subtitle">
            Read this before you apply to another tech job.
          </p>
        </div>

        {/* Short, Gripping Narrative Story Card */}
        <div className="story-container-compact" data-aos="fade-up">
          
          <div className="compact-story-box">

            {/* Paragraph 1: The Numbers Problem (The initial 3 lines) */}
            <p className="story-p-short">
              Every year, over <strong className="glow-keyword">15 Lakh engineering students</strong> graduate in India. But for every single entry-level job opening, more than <strong>1,000 applicants</strong> fight for the seat. Most students send out 200+ applications on LinkedIn and Naukri — and receive nothing but dead silence.
            </p>

            {/* Automatic Thought Cloud Pop-up 1 (Exact Cloud Shape) */}
            <div className={`thought-cloud-wrapper ${showCloud1 ? "visible" : ""}`}>
              <div 
                className="thought-cloud-bubble-card cloud-theme-orange" 
                onClick={() => setSelectedInsight("ats")}
                title="Click for Reality Insight"
              >
                {/* Exact Cloud SVG Shape from User Reference */}
                <svg viewBox="0 0 600 480" className="cloud-svg-backdrop" preserveAspectRatio="xMidYMid meet">
                  <path d={CLOUD_SHAPE_PATH} fill="#ffffff" />
                </svg>

                <div className="cloud-content-overlay">
                  <div className="cloud-header">
                    <span className="cloud-title-badge badge-orange">
                      <span className="cloud-icon">💭</span> Think Once:
                    </span>
                    <span className="cloud-hint">Insight 💡</span>
                  </div>
                  <p className="cloud-query">
                    &ldquo;Wait... Does my resume even pass the 6-second ATS bot filter, or am I getting rejected automatically?&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Paragraph 2: The Real Reason (Down description stays as it is) */}
            <p className="story-p-short">
              Why? Because colleges only taught textbook definitions. Resumes are filled with the same copied YouTube clones — a <em>ToDo list</em>, a <em>Calculator</em>, or a <em>Weather app</em>. Automated ATS bots scan them and discard them in six seconds without a human ever reading them.
            </p>

            {/* Automatic Thought Cloud Pop-up 2 (Exact Cloud Shape) */}
            <div className={`thought-cloud-wrapper ${showCloud2 ? "visible" : ""}`}>
              <div 
                className="thought-cloud-bubble-card cloud-theme-blue" 
                onClick={() => setSelectedInsight("tutorial")}
                title="Click for Reality Insight"
              >
                {/* Exact Cloud SVG Shape from User Reference */}
                <svg viewBox="0 0 600 480" className="cloud-svg-backdrop" preserveAspectRatio="xMidYMid meet">
                  <path d={CLOUD_SHAPE_PATH} fill="#ffffff" />
                </svg>

                <div className="cloud-content-overlay">
                  <div className="cloud-header">
                    <span className="cloud-title-badge badge-blue">
                      <span className="cloud-icon">💭</span> Think Once:
                    </span>
                    <span className="cloud-hint">Insight 💡</span>
                  </div>
                  <p className="cloud-query">
                    &ldquo;Am I just stuck in tutorial hell watching videos, instead of building real production systems?&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Paragraph 3: The Interview Reality (Down description stays as it is) */}
            <p className="story-p-short">
              And if you reach a technical round, interviewers won't ask: <em>&ldquo;What is OOPs?&rdquo;</em>. They ask: <em>&ldquo;How did you resolve Git merge conflicts? What happens if your API crashes under 10k users? Show me your live deployed cloud code.&rdquo;</em> Rote learners freeze immediately.
            </p>

            {/* Automatic Thought Cloud Pop-up 3 (Exact Cloud Shape) */}
            <div className={`thought-cloud-wrapper ${showCloud3 ? "visible" : ""}`}>
              <div 
                className="thought-cloud-bubble-card cloud-theme-green" 
                onClick={() => setSelectedInsight("interview")}
                title="Click for Reality Insight"
              >
                {/* Exact Cloud SVG Shape from User Reference */}
                <svg viewBox="0 0 600 480" className="cloud-svg-backdrop" preserveAspectRatio="xMidYMid meet">
                  <path d={CLOUD_SHAPE_PATH} fill="#ffffff" />
                </svg>

                <div className="cloud-content-overlay">
                  <div className="cloud-header">
                    <span className="cloud-title-badge badge-green">
                      <span className="cloud-icon">💭</span> Think Once:
                    </span>
                    <span className="cloud-hint">Insight 💡</span>
                  </div>
                  <p className="cloud-query">
                    &ldquo;Can I actually write code live in front of a Senior Architect, or will I freeze under pressure?&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* The Pivot: Why Codewizen (Down description stays as it is) */}
            <div className="story-solution-highlight">
              <h3>🚀 The Codewizen Shift: 100% Real-Time Projects</h3>
              <p>
                This is why students choose us. We skip outdated theory. You join <strong>100% Live Online cohorts</strong>, write enterprise code in <strong>Agile Jira sprints</strong>, resolve Git PRs, and deploy live microservices to <strong>AWS Cloud</strong>. In interviews, you don't sound like a fresher — you talk with the authority of an active software engineer.
              </p>
            </div>

          </div>

          {/* Quick Reality Stats Strip */}
          <div className="reality-stats-strip">
            <div className="rss-item">
              <strong>15 Lakh+</strong>
              <span>Yearly Grads in India</span>
            </div>
            <div className="rss-item">
              <strong style={{ color: '#ea580c' }}>75%+</strong>
              <span>Resumes Rejected by ATS</span>
            </div>
            <div className="rss-item">
              <strong style={{ color: '#10b981' }}>100%</strong>
              <span>Real-Time Live Projects</span>
            </div>
          </div>

        </div>

      </div>

      {/* Quick Insight Mini-Modal when student clicks a cloud */}
      {selectedInsight && (
        <div className="insight-modal-overlay" onClick={() => setSelectedInsight(null)}>
          <div className="insight-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="imc-header">
              <div className="imc-badge"><FaLightbulb /> REALITY INSIGHT</div>
              <button className="imc-close" onClick={() => setSelectedInsight(null)}><FaTimes /></button>
            </div>
            <h4>{insightData[selectedInsight].title}</h4>
            <div className="imc-block alert">
              <FaExclamationCircle className="imc-icon" />
              <p><strong>The Trap:</strong> {insightData[selectedInsight].tip}</p>
            </div>
            <div className="imc-block success">
              <FaCheck className="imc-icon" />
              <p><strong>The Fix with Codewizen:</strong> {insightData[selectedInsight].fix}</p>
            </div>
            <button className="imc-btn" onClick={() => setSelectedInsight(null)}>Got it, back to story</button>
          </div>
        </div>
      )}

    </section>
  );
}

export default Benefits;
