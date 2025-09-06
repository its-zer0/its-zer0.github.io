export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-category fade-in">
            <div className="skill-header">
              <div className="skill-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="8"
                    y1="21"
                    x2="16"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Backend</h3>
            </div>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Express.js</li>
              <li>NestJS</li>
              <li>GraphQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          <div className="skill-category fade-in delay-1">
            <div className="skill-header">
              <div className="skill-icon">
                <svg
                  width="24"
                  height="24"
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
              <h3>Cloud & DevOps</h3>
            </div>
            <ul className="skill-list">
              <li>AWS (EC2, S3, Lambda)</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>CI/CD Pipelines</li>
              <li>Serverless Architecture</li>
              <li>Terraform</li>
            </ul>
          </div>

          <div className="skill-category fade-in delay-2">
            <div className="skill-header">
              <div className="skill-icon">
                <svg
                  width="24"
                  height="24"
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
              <h3>Security</h3>
            </div>
            <ul className="skill-list">
              <li>PCI-DSS Compliance</li>
              <li>OWASP Standards</li>
              <li>JWT Authentication</li>
              <li>Encryption Techniques</li>
              <li>Security Auditing</li>
              <li>Vulnerability Testing</li>
            </ul>
          </div>

          <div className="skill-category fade-in delay-3">
            <div className="skill-header">
              <div className="skill-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="12"
                    cy="5"
                    rx="9"
                    ry="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Databases & Tools</h3>
            </div>
            <ul className="skill-list">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
              <li>Elasticsearch</li>
              <li>Git</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
