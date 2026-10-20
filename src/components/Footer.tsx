"use client";

import React from "react";
import { Heart, MessageCircle, Mail, ExternalLink } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="foot-wrapper">
      <div className="wrap">
        <div className="foot">
          <div className="foot-left">
            <div className="logo" style={{ fontSize: "20px" }}>
              <img
                src="/ar-logo.png"
                alt="AR Logo"
                style={{
                  width: "28px",
                  height: "28px",
                  objectFit: "contain",
                }}
              />
              <span>AR</span>
            </div>
            <span style={{ color: "var(--border-strong)" }}>|</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              Engineered by{" "}
              <a
                href="https://adilrahman.cc"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--lime-accent)",
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <span>Adil Rahman</span>
                <ExternalLink size={12} />
              </a>
            </span>
          </div>

          <div className="foot-links">
            <a
              href="https://adilrahman.cc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "var(--text-muted)",
              }}
            >
              <span>adilrahman.cc</span>
            </a>
            <a href="mailto:hello@adilrahman.cc" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Mail size={15} color="var(--lime-accent)" />
              <span>hello@adilrahman.cc</span>
            </a>
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <MessageCircle size={15} color="var(--lime-accent)" />
              <span>WhatsApp Us</span>
            </a>
            <span>© 2026 AR. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
