import { progressionData } from '../data/progressionData';

export default function Progression() {
  return (
    <section className="progression-section" id="how-it-works">
      <div className="container">
        
        <div className="progression-frame" data-reveal="scale">
          <span className="frame-tag-dark">ED-TECH · ACCELERATOR</span>
          <span className="frame-corner-dark">06 // 11</span>

          <div className="progression-header">
            <h2 className="progression-title" data-reveal="clip-up">
              Learn it at <em>industry level.</em>
            </h2>
            <p className="progression-subtitle" data-reveal data-delay="1">
              Skills built with industry expertise and real experience open the doors to jobs and placements.
            </p>
          </div>

          {/* Three-Level Staircase Visual */}
          <div className="staircase-grid">
            {progressionData.map((step, index) => (
              <div
                key={step.numeral}
                className={`staircase-card ${step.cardClass}`}
                data-reveal
                data-delay={index + 1}
              >
                <div className="card-top">
                  <span className="card-level-eyebrow">{step.level}</span>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-desc">{step.description}</p>
                </div>
                <div className="card-numeral">{step.numeral}</div>
              </div>
            ))}
          </div>

          {/* Editorial Accent Bar */}
          <div className="progression-footer-bar" data-reveal>
            <span className="footer-bar-label">Career Progression Blueprint</span>
            <span className="footer-bar-line" data-reveal="line-draw" data-delay="2"></span>
          </div>

        </div>

      </div>
    </section>
  );
}
