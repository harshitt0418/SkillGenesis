import { modulesData } from '../data/modulesData';

function ModuleIcon({ type }) {
  switch (type) {
    case 'mentor':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case 'projects':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
      );
    case 'simulation':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      );
    case 'assignments':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      );
    case 'portfolio':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      );
    case 'confidence':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="12 6 12 12 16 14"></polygon>
        </svg>
      );
    default:
      return null;
  }
}

export default function PracticalSkills() {
  return (
    <section className="practical-section" id="skills">
      <div className="container">
        
        <div className="practical-header">
          <div className="practical-eyebrow">
            <span className="editorial-label">Experiential Methodology · 07 // 11</span>
          </div>
          <h2 className="practical-title">Practical learning built for the modern workplace.</h2>
          <p className="practical-subtitle">
            Every module is crafted to connect classroom learning with tangible workplace execution, portfolio evidence, and long-term career confidence.
          </p>
        </div>

        <div className="modules-grid">
          {modulesData.map((item) => (
            <div key={item.index} className="module-card">
              <div>
                <div className="module-top-row">
                  <div className="module-icon-box">
                    <ModuleIcon type={item.icon} />
                  </div>
                  <span className="module-index">{item.index}</span>
                </div>
                <h3 className="module-heading">{item.title}</h3>
                <p className="module-description">{item.description}</p>
              </div>
              <span className="module-corner-plus">+</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
