export default function Footer() {
  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <a
              href="#"
              className="logo"
              aria-label="Home"
              style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
            >
              <span style={{ fontWeight: 700, color: "var(--heading)" }}>
                Zero
              </span>
            </a>
            <p style={{ marginTop: 10 }}>
              Building secure, reliable systems with a focus on clarity,
              performance, and long-term maintainability.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <div className="social-links" style={{ gap: 12 }}>
              <a href="#" aria-label="GitHub" title="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.6 5.6 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V24h-4V8z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" title="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.4 4.8c-.8.4-1.6.6-2.5.8.9-.6 1.6-1.4 1.9-2.5-.8.6-1.9 1-2.9 1.2C19.8 3.5 18.6 3 17.3 3c-2.6 0-4.6 2.1-4.6 4.6 0 .3 0 .7.1 1C8.4 8.4 4.9 6.5 2.6 3.6 2.2 4.3 2 5.1 2 5.9c0 1.6.8 3 2.1 3.8-.7 0-1.4-.2-2-.6v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.1-1.3.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.6 3.3-1.6 1.3-3.6 2.1-5.8 2.1H2c2.1 1.3 4.6 2 7.2 2 8.6 0 13.3-7.1 13.3-13.3v-.6c.9-.6 1.6-1.4 2.2-2.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Zero — Crafting reliable systems with
            care.
          </p>
        </div>
      </div>
    </footer>
  );
}
