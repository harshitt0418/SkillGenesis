import { useEffect } from 'react';
import { navLinks } from '../data/navLinks';
import Button from './Button';

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  onOpenModal,
}) {
  // Prevent body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
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

  const handleModalOpen = () => {
    onClose();
    onOpenModal();
  };

  return (
    <>
      <div
        className={`mobile-nav-backdrop ${isOpen ? 'open' : ''}`}
        id="mobile-backdrop"
        onClick={onClose}
      />
      <aside
        className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
        id="mobile-drawer"
        aria-label="Mobile Navigation"
      >
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
            >
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-footer">
          <Button
            variant="primary"
            style={{ width: '100%' }}
            onClick={handleModalOpen}
          >
            Join the Accelerator
          </Button>
          <span className="mobile-tagline-note">
            SkillGenesis · Thinking Beyond Degrees
          </span>
        </div>
      </aside>
    </>
  );
}
