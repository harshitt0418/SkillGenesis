import { useState, useEffect, useRef } from 'react';
import Button from './Button';

export default function JoinAcceleratorModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    interest: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Manage body overflow and focus on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
      // Reset form on close
      setTimeout(() => {
        setIsSuccess(false);
        setIsLoading(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          college: '',
          year: '',
          interest: '',
          message: '',
        });
        setErrors({});
      }, 300);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key & Tab trapping
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = true;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = true;
    }

    if (!formData.college.trim()) newErrors.college = true;
    if (!formData.year) newErrors.year = true;
    if (!formData.interest) newErrors.interest = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Start short loading state
    setIsLoading(true);

    // TODO: Connect this form to the Express + MongoDB API during the MERN backend phase.
    console.info('[SkillGenesis MERN-Ready Client] Form payload captured in state:', {
      ...formData,
      submittedAt: new Date().toISOString(),
    });

    // Simulate realistic asynchronous network submission before showing success UI
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      id="enquiry-modal"
      aria-hidden={!isOpen}
      role="dialog"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-dialog" ref={modalRef}>
        
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          id="modal-close-trigger"
          aria-label="Close dialog"
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Form Container */}
        {!isSuccess && (
          <div id="modal-form-container">
            <div className="modal-header">
              <span className="modal-badge">Career Accelerator</span>
              <h2 className="modal-title" id="modal-title">
                Start Your Career Accelerator Journey
              </h2>
              <p className="modal-desc">
                Tell us a little about yourself and we’ll help you take the next step.
              </p>
            </div>

            <form className="modal-form" id="enquiry-form" noValidate onSubmit={handleSubmit}>
              
              {/* Full Name */}
              <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
                <label htmlFor="fullName" className="form-label">
                  Full Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  ref={firstInputRef}
                  className="form-control"
                  placeholder="e.g. Alex Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <span className="form-error-msg">Please enter your full name.</span>
              </div>

              {/* Email & Phone */}
              <div className="form-row">
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="alex@university.edu"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="form-error-msg">Please enter a valid email address.</span>
                </div>

                <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <span className="form-error-msg">Please enter a valid phone number.</span>
                </div>
              </div>

              {/* College & Year */}
              <div className="form-row">
                <div className={`form-group ${errors.college ? 'has-error' : ''}`}>
                  <label htmlFor="college" className="form-label">
                    College / University <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="college"
                    className="form-control"
                    placeholder="Institution name"
                    value={formData.college}
                    onChange={handleChange}
                    required
                  />
                  <span className="form-error-msg">Please enter your college/university.</span>
                </div>

                <div className={`form-group ${errors.year ? 'has-error' : ''}`}>
                  <label htmlFor="year" className="form-label">
                    Current Year of Study <span className="required-star">*</span>
                  </label>
                  <select
                    id="year"
                    className="form-control"
                    value={formData.year}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year / Final Year">4th Year / Final Year</option>
                    <option value="Recent Graduate">Recent Graduate</option>
                  </select>
                  <span className="form-error-msg">Please select your current year.</span>
                </div>
              </div>

              {/* Preferred Area of Interest */}
              <div className={`form-group ${errors.interest ? 'has-error' : ''}`}>
                <label htmlFor="interest" className="form-label">
                  Preferred Area of Interest <span className="required-star">*</span>
                </label>
                <select
                  id="interest"
                  className="form-control"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Choose an area of focus</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Data & Business Problem-Solving">Data & Business Problem-Solving</option>
                  <option value="Sales & Growth Strategy">Sales & Growth Strategy</option>
                  <option value="Digital Marketing & Product">Digital Marketing & Product</option>
                  <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                </select>
                <span className="form-error-msg">Please choose an area of interest.</span>
              </div>

              {/* Optional Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Optional Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Share your career goals or specific questions..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
                disabled={isLoading}
              >
                <span>{isLoading ? 'Recording Application...' : 'Submit Application'}</span>
                <span className="btn-icon-arrow">{isLoading ? '⏳' : '→'}</span>
              </button>

              <p className="form-disclaimer">
                SkillGenesis values your privacy. Your details will only be used to guide your career accelerator journey.
              </p>

            </form>
          </div>
        )}

        {/* Success Confirmation State */}
        {isSuccess && (
          <div className="modal-success-state active" id="modal-success-state">
            <div className="success-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="success-title">Application Received</h3>
            <p className="success-message">
              Thanks — your interest has been recorded. We’ll be in touch soon.
            </p>
            <Button
              variant="primary"
              id="success-done-btn"
              onClick={onClose}
              arrow={false}
            >
              Done
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
