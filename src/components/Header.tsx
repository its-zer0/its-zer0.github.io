"use client";

import { useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const navRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navLinks = navRef.current;
    if (hamburger && navLinks) {
      const onClick = () => navLinks.classList.toggle("active");
      hamburger.addEventListener("click", onClick);
      return () => hamburger.removeEventListener("click", onClick);
    }
  }, []);

  useEffect(() => {
    const navLinks = navRef.current;
    if (!navLinks) return;
    const anchors = Array.from(
      navLinks.querySelectorAll<HTMLAnchorElement>("a")
    );
    const onClick = () => navLinks.classList.remove("active");
    anchors.forEach((a) => a.addEventListener("click", onClick));
    return () =>
      anchors.forEach((a) => a.removeEventListener("click", onClick));
  }, []);

  return (
    <header>
      <div className="container">
        <nav>
          <a
            href="#"
            className="logo"
            aria-label="Home"
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            Zero
            {/* <img
              src="/globe.svg"
              alt="Logo"
              width={28}
              height={28}
              style={{ display: "block" }}
            /> */}
          </a>
          <ul className="nav-links" ref={navRef}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              className="social-links"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <a
                href="https://github.com/eliya-it"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              <a
                href="https://www.linkedin.com/in/alitoman/"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V24h-4V8z" />
                </svg>
              </a>
            </div>
            <ThemeToggle />
            <div
              className="hamburger"
              ref={hamburgerRef}
              style={{ color: "var(--heading)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 6H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
