"use client";

import React from "react";
import { ExternalLink, Code2 } from "lucide-react";

export default function DeveloperSection() {
  return (
    <section className="sec alt" id="developer">
      <div className="wrap">
        <div className="dev-card">
          <div className="dev-left">
            <div className="dev-avatar">
              <img
                src="/ar-logo.png"
                alt="Adil Rahman Logo"
                style={{ width: "38px", height: "38px", objectFit: "contain" }}
              />
            </div>

            <div className="dev-info">
              <div className="dev-badge">
                <Code2 size={13} />
                <span>Developer</span>
              </div>

              <h3 className="dev-name">
                Adil Rahman
              </h3>

              <p className="dev-bio">
                Software developer building web applications and automated payment systems.
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
              <span>adilrahman.cc</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
