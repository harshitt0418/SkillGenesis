import Button from '../components/Button';

export default function Hero({ onOpenModal }) {
  const handleScrollToCourse = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#course-intro');
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="subtle-grid-bg"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container hero-grid">
        
        {/* Left: Hero Editorial Headline & CTAs */}
        <div className="hero-content">
          
          <div className="hero-eyebrow">
            <span className="editorial-label">Career Accelerator</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line-1">Don't Just Earn a Degree.</span>
            <span className="title-line-2">Build a Career.</span>
          </h1>

          <p className="hero-description">
            Your degree gives you knowledge. We help you turn that knowledge into practical skills, real-world experience, and career-ready confidence.
          </p>

          <div className="hero-actions">
            <Button
              variant="primary"
              className="hero-btn-primary"
              onClick={onOpenModal}
            >
              Join the Career Accelerator
            </Button>
            <a
              href="#course-intro"
              className="btn btn-outline hero-btn-secondary"
              onClick={handleScrollToCourse}
            >
              <span>Explore the Course</span>
              <span className="btn-icon-arrow">↓</span>
            </a>
          </div>

          <div className="hero-credibility">
            <span className="credibility-line-accent"></span>
            <div className="credibility-text">
              <span>Live mentor-led learning</span>
              <span className="credibility-dot"></span>
              <span>Real projects</span>
              <span className="credibility-dot"></span>
              <span>Career-ready portfolio</span>
            </div>
          </div>

        </div>

        {/* Right: Abstract Composition */}
        <div className="hero-visual-wrapper">
          
          {/* Outer Architectural Showcase Frame */}
          <div className="composition-frame">
            <span className="frame-label-tag">ED-TECH · ACCELERATOR</span>
            <span className="frame-corner-tag">01 // 11</span>

            {/* Rotating Seal Badge */}
            <div
              className="rotating-seal-badge"
              title="SkillGenesis - Thinking Beyond Degrees"
              onClick={onOpenModal}
            >
              <svg className="seal-svg-text" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text>
                  <textPath href="#circlePath" startOffset="0%">
                    ★ THINKING BEYOND DEGREES ★ SKILLGENESIS ·
                  </textPath>
                </text>
              </svg>
              <div className="seal-center-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>

            <div className="composition-content">
              
              {/* Live Sprint Simulation Card */}
              <div className="sprint-card">
                <div className="sprint-header">
                  <div className="sprint-badge">
                    <span className="sprint-live-dot"></span>
                    <span>Live Industry Project</span>
                  </div>
                  <span className="sprint-meta">Sprint 03</span>
                </div>
                
                <h3 className="sprint-title">Customer Churn Prediction Model</h3>
                
                <div className="progress-track">
                  <div className="progress-fill"></div>
                </div>

                <div className="progress-footer">
                  <span>Mentorship active</span>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>84% Completed</span>
                </div>
              </div>

              {/* 3-Level Progression Staircase (Foundation -> Applied -> Industry-Ready) */}
              <div className="staircase-preview">
                
                <div className="staircase-step step-1">
                  <span className="step-level-tag">Level 1</span>
                  <span className="step-name">Foundation</span>
                  <span className="step-numeral">01</span>
                </div>

                <div className="staircase-step step-2">
                  <span className="step-level-tag">Level 2</span>
                  <span className="step-name">Applied</span>
                  <span className="step-numeral">02</span>
                </div>

                <div className="staircase-step step-3">
                  <span className="step-level-tag">Level 3</span>
                  <span className="step-name">Industry-Ready</span>
                  <span className="step-numeral">03</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
