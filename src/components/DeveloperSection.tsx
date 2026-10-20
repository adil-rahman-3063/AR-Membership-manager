"use client";

import React from "react";
import { ExternalLink, Code2 } from "lucide-react";

export default function DeveloperSection() {
  return (
    <section className="sec alt" id="developer">
      <div className="wrap">
        <div className="dev-card">
          {/* Subtle background glow */}
          <div className="dev-glow" />

          <div className="dev-left">
            <div className="dev-avatar">
              <img
                src="/ar-logo.png"
                alt="Adil Rahman Logo"
                style={{ width: "46px", height: "46px", objectFit: "contain" }}
              />
            </div>

            <div className="dev-info">
              <div className="dev-badge">
                <Code2 size={13} />
                <span>Developer & Product Architect</span>
              </div>

              <h3 className="dev-name">
                Adil Rahman
              </h3>

              <p className="dev-bio">
                Full-stack developer building modern web apps, high-conversion products,
                and seamless automation engines.
              </p>
            </div>
          </div>

          <div className="dev-actions">
            <a
              href="https://adilrahman.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span>Visit Portfolio</span>
              <ExternalLink size={16} />
            </a>

            <a
              href="https://adilrahman.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              <span>adilrahman.cc</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
