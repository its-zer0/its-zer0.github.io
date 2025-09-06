"use client";

import { useEffect } from "react";

export default function FadeInObserver() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll<HTMLElement>(".fade-in");
    const fadeInOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          obs.unobserve(entry.target);
        }
      });
    }, fadeInOptions);
    fadeElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transition = "opacity 0.5s ease-in-out";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}

