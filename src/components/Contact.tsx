export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let&apos;s Connect</h2>
        <div className="contact-container">
          <div className="contact-info fade-in">
            <p>
              I love partnering with teams to ship resilient, secure systems
              that drive real business impact. If you&apos;re exploring an idea,
              scaling a product, or need a second set of eyes on architecture,
              I&apos;d be glad to help.
            </p>
            <p>
              The best way to reach me is by email. Share a little context about
              your goals and timeline — I&apos;ll reply with concrete next
              steps.
            </p>
            <ul className="skill-list" style={{ marginTop: 10 }}>
              <li>System design and architecture reviews</li>
              <li>Performance, reliability, and security improvements</li>
              <li>API and platform development (Node.js, TypeScript, AWS)</li>
            </ul>
            <div className="hero-btns" style={{ marginTop: 16 }}>
              <a className="btn" href="mailto:AliToman@proton.me">
                Email Me
              </a>
              <a className="btn btn-alt" href="#projects">
                View Projects
              </a>
            </div>
            <p style={{ marginTop: 12 }}>
              Typical response time: within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
