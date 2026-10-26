import { benefitsData } from '../data/benefitsData';

export default function WhySkillGenesis() {
  return (
    <section className="why-section" id="why-skillgenesis">
      <div className="container">
        
        <div className="why-header">
          <div className="why-eyebrow">
            <span className="editorial-label">Core Value Pillars · 03 // 11</span>
          </div>
          <h2 className="why-title">Why choose SkillGenesis?</h2>
          <p className="why-subtitle">
            A structured framework designed to transform academic potential into workplace capability and professional confidence.
          </p>
        </div>

        <div className="benefits-list">
          {benefitsData.map((item) => (
            <div key={item.number} className="benefit-item">
              <div className="benefit-badge">{item.number}</div>
              <div className="benefit-content">
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-text">{item.description}</p>
              </div>
              <div className="benefit-indicator-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
