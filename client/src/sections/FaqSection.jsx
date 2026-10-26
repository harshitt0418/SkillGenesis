import { useState } from 'react';
import { faqsData } from '../data/faqsData';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faqs-section" id="faqs">
      <div className="container">
        
        <div className="faqs-header">
          <div className="faqs-eyebrow">
            <span className="editorial-label">Common Inquiries · 10 // 11</span>
          </div>
          <h2 className="faqs-title">Frequently Asked Questions</h2>
          <p className="faqs-subtitle">
            Clear, transparent answers about the Career Accelerator program, eligibility, commitments, and outcomes.
          </p>
        </div>

        <div className="faq-accordion">
          {faqsData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={item.number}
                className={`faq-item ${isActive ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isActive}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="faq-question-wrap">
                    <span className="faq-number">{item.number}</span>
                    <span className="faq-question">{item.question}</span>
                  </div>
                  <div className="faq-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                <div className="faq-answer-panel">
                  <div className="faq-answer-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
