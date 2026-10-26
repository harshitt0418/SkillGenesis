export default function CourseIntro() {
  const handleScrollToWhy = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#why-skillgenesis');
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
    <section className="course-intro-section" id="course-intro">
      <div className="container">
        
        <div className="editorial-frame-light" data-reveal="scale">
          <span className="frame-tag-light">The Industry-Education Gap</span>
          <span className="frame-corner-light">02 // 11</span>

          <div className="course-intro-grid">
            
            {/* Left: Headline, Editorial Copy & CTA */}
            <div className="intro-content">
              <h2 className="intro-headline" data-reveal="clip-up">
                Don't Just Earn a Degree. <span className="highlight-badge-gold">Build a Career.</span>
              </h2>

              <p className="intro-lead-tag" data-reveal data-delay="1">
                Introducing the SkillGenesis Career Accelerator — Thinking Beyond Degrees.
              </p>

              <div className="intro-body-copy" data-reveal data-delay="2">
                <p>
                  Your degree gives you knowledge. We help you turn that knowledge into practical skills, real-world experience, and career-ready confidence.
                </p>
                <p>
                  In a world where employers value what you can do as much as what you know, classroom learning alone may not be enough. The SkillGenesis Career Accelerator bridges the gap between academic learning and industry expectations through <strong>live mentor-led sessions, hands-on projects, AI-powered tools, business simulations, and practical assignments.</strong>
                </p>
              </div>

              <div className="intro-actions" data-reveal data-delay="3">
                <a
                  href="#why-skillgenesis"
                  className="btn btn-dark"
                  onClick={handleScrollToWhy}
                >
                  <span>Explore the Course</span>
                  <span className="btn-icon-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Right: Feature Spotlight Card */}
            <div className="intro-spotlight" data-reveal="scale" data-delay="2">
              <div className="gap-bridge-card">
                <div className="gap-bridge-header">
                  <span className="gap-bridge-eyebrow">Program Architecture</span>
                  <h3 className="gap-bridge-title">Bridging Academia & Industry</h3>
                </div>

                <div className="pillar-chips-list">
                  <div className="pillar-chip" data-reveal data-delay="1">
                    <div className="pillar-icon-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <span className="pillar-text">Live mentor-led sessions</span>
                  </div>

                  <div className="pillar-chip" data-reveal data-delay="2">
                    <div className="pillar-icon-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                      </svg>
                    </div>
                    <span className="pillar-text">Hands-on projects</span>
                  </div>

                  <div className="pillar-chip" data-reveal data-delay="3">
                    <div className="pillar-icon-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                      </svg>
                    </div>
                    <span className="pillar-text">AI-powered tools</span>
                  </div>

                  <div className="pillar-chip" data-reveal data-delay="4">
                    <div className="pillar-icon-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                    <span className="pillar-text">Business simulations</span>
                  </div>

                  <div className="pillar-chip" data-reveal data-delay="5">
                    <div className="pillar-icon-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <span className="pillar-text">Practical assignments</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
