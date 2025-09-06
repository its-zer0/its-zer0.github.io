export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I care about building software that’s friendly for users and kind
              to future maintainers. My work emphasizes security, performance,
              and reliability, ensuring platforms stay fast as they grow.
            </p>
            <p>
              I partner with teams to clarify architecture, simplify complexity,
              and deliver stable solutions on Node.js, TypeScript, and AWS.
              Clear communication and thoughtful design guide every decision.
            </p>
            <p>
              If you value long-term stability, performance, and developer
              experience, we’ll work well together.
            </p>
          </div>
          <div className="about-stats fade-in delay-1">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">PCI-DSS</div>
              <div className="stat-label">Compliance</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Optimized</div>
              <div className="stat-label">Performance</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">APIs Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
