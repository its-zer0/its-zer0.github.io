export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card fade-in">
            <div className="project-header">
              <div className="project-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Starlo </h3>
            </div>
            <div className="project-content">
              <p>
                A booking API using MVC, with secure authentication, advanced
                search, and real-time review system. Enhanced performance
                through Redis caching and load balancing for smooth user
                experience.
              </p>
              <div className="project-tech">
                <span>Node.js</span>
                <span>TypeScript</span>
                <span>MongoDB</span>
                <span>Redis</span>
              </div>
              <div className="project-links">
                <a href="github.com/eliya-it/starlo" className="btn">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card project-card--active fade-in delay-1">
            <div className="project-header">
              <div className="project-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="16" r="1" fill="currentColor" />
                  <path
                    d="M7 11V7a5 5 0 0 1 10 0v4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Payment Gateway API</h3>
            </div>
            <div className="project-content">
              <p>
                PCI-DSS 3.4 and UAE SRR 4.2–compliant payment gateway backend
                with tokenization, AES-256-CBC encryption, and TOTP MFA. Built
                with Node.js & TypeScript, containerized in Docker, and deployed
                on AWS with audit logging, CI/CD security scans, and blue/green
                deployments.
              </p>
              <div className="project-tech">
                <span>Node.js</span>
                <span>TypeScript</span>
                <span>Docker</span>
                <span>AWS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/eliya-it/dubai-pci" className="btn">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card fade-in delay-2">
            <div className="project-header">
              <div className="project-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="3.27,6.96 12,12.01 20.73,6.96"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="12"
                    y1="22.08"
                    x2="12"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Dotshop </h3>
            </div>
            <div className="project-content">
              <p>
                Scalable e-commerce backend with role-based authentication,
                product/order management, and automated pricing. Built with
                service layer + DTOs for maintainability.
              </p>
              <div className="project-tech">
                <span>.NET Core</span>
                <span>EF</span>
                <span>SQL Server</span>
                <span>AutoMapper</span>
                <span>Swagger</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/eliya-it/dotshop" className="btn">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
