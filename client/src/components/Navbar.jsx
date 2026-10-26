import { navLinks } from '../data/navLinks';
import Button from './Button';

export default function Navbar({
  isScrolled,
  activeSection,
  onOpenModal,
  isMobileMenuOpen,
  onToggleMobileMenu,
}) {
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
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div class="nav-container">
        
        {/* Left: Brand Identity */}
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

        {/* Center: Navigation Links */}
        <nav className="nav-menu" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Desktop CTA */}
        <div className="nav-actions">
          <Button
            variant="primary"
            className="btn-nav"
            onClick={onOpenModal}
          >
            Join the Accelerator
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-drawer"
          onClick={onToggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

      </div>
    </header>
  );
}
