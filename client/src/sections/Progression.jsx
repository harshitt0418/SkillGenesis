import { progressionData } from '../data/progressionData';

export default function Progression() {
  return (
    <section className="progression-section" id="how-it-works">
      <div className="container">
        
        <div className="progression-frame">
          <span className="frame-tag-dark">ED-TECH · ACCELERATOR</span>
          <span className="frame-corner-dark">06 // 11</span>

          <div className="progression-header">
            <h2 className="progression-title">
              Learn it at <em>industry level.</em>
            </h2>
            <p className="progression-subtitle">
              Skills built with industry expertise and real experience open the doors to jobs and placements.
            </p>
          </div>

          {/* Three-Level Staircase Visual */}
          <div className="staircase-grid">
            {progressionData.map((step) => (
              <div
                key={step.numeral}
                className={`staircase-card ${step.cardClass}`}
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
          <div className="progression-footer-bar">
            <span className="footer-bar-label">Career Progression Blueprint</span>
            <span className="footer-bar-line"></span>
          </div>

        </div>

      </div>
    </section>
  );
}
