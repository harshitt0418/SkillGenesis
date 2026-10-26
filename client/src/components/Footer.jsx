import Button from './Button';

export default function Footer({ onOpenModal }) {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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
    <footer className="site-footer">
      {/* Large Background Brand Watermark */}
      <div className="footer-watermark">Beyond Degrees</div>

      <div className="container">
        <div className="footer-top">
          
          {/* Brand Column */}
          <div className="footer-brand">
            <a
              href="#hero"
              className="brand-link"
              aria-label="SkillGenesis Home"
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              <div className="brand-wrapper">
                <div className="brand-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <span className="brand-name">Skill<span className="accent">Genesis</span></span>
              </div>
              <span className="brand-tagline">THINKING BEYOND DEGREES</span>
            </a>
            <p className="footer-brand-desc">
              Transforming academic knowledge into practical industry skills, real-world project portfolios, and career-ready confidence.
            </p>
            <div className="footer-social-row">
              <a href="#" className="social-pill" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-pill" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-pill" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-pill" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="footer-column-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Home</a></li>
              <li><a href="#why-skillgenesis" onClick={(e) => handleNavClick(e, '#why-skillgenesis')}>Why SkillGenesis</a></li>
              <li><a href="#course-intro" onClick={(e) => handleNavClick(e, '#course-intro')}>The Course</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>How It Works</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills & Modules</a></li>
              <li><a href="#faqs" onClick={(e) => handleNavClick(e, '#faqs')}>FAQs</a></li>
            </ul>
          </div>

          {/* Pathways Column */}
          <div>
            <h4 className="footer-column-title">Tracks & Focus</h4>
            <ul className="footer-links">
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Applied AI Systems</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Data & Problem-Solving</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Growth & Strategy</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Digital Product Delivery</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Full-Stack Engineering</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer-column-title">Contact</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>admissions@skillgenesis.edu</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Innovation Campus, Tech District</span>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Button
                variant="outline"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.82rem' }}
                onClick={onOpenModal}
              >
                Apply Now
              </Button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>&copy; 2026 SkillGenesis. All rights reserved.</span>
          </div>
          <div className="footer-bottom-tagline">
            Thinking Beyond Degrees
          </div>
        </div>
      </div>
    </footer>
  );
}
