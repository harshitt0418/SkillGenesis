import Button from '../components/Button';

export default function FinalCta({ onOpenModal }) {
  return (
    <section className="final-cta-section">
      <div className="cta-radial-glow"></div>
      
      <div className="container">
        <div className="final-cta-frame" data-reveal="scale">
          
          <div className="final-cta-badge" data-reveal>
            <span>Career Accelerator · 11 // 11</span>
          </div>

          <h2 className="final-cta-headline" data-reveal="clip-up">
            Your Future Needs More Than a Certificate.
          </h2>

          <div className="final-cta-content" data-reveal data-delay="2">
            <p>
              It needs skills. It needs initiative. It needs the confidence to turn opportunities into achievements.
            </p>
            <p>
              At SkillGenesis, we believe every student deserves the opportunity to move beyond theoretical knowledge and discover what they are capable of achieving.
            </p>
            <p className="cta-editorial-italic">
              Learn smarter. Build practical skills. Become career-ready.
            </p>
            <p className="cta-tagline-punch">
              SkillGenesis — Thinking Beyond Degrees.
            </p>
            <p className="cta-journey-start">
              Your journey from learning to doing starts here.
            </p>
          </div>

          <div className="final-cta-btn-wrap" data-reveal data-delay="3">
            <Button
              variant="primary"
              className="btn-cta-large"
              onClick={onOpenModal}
            >
              Join the Career Accelerator
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
