import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

declare global {
  // Add type for the custom element
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        background?: string;
        colors?: string;
        speed?: string | number;
        style?: React.CSSProperties;
        loop?: boolean;
        autoplay?: boolean;
      };
    }
  }
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <div className="tagline">Backend Developer</div>
          <h1>Building Scalable & Secure Digital Foundations</h1>
          <p>
            Backend engineer with 4+ years of expertise in Node.js, TypeScript,
            AWS, and microservices. I design systems that are secure, resilient,
            and built to perform at scale.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn">
              Hire Me
            </a>
            <a
              href="/downloads/resume.pdf"
              download={true}
              className="btn btn-alt"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="hero-image fade-in delay-1">
          <div className="hero-icon">
            <Player
              src={"/animations/hero.json"}
              background="transparent"
              speed={1}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
              }}
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
}
