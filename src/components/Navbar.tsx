"use client";

import React, { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="nav-wrapper">
      <div className="wrap">
        <nav className="nav">
          <a href="#" className="logo">
            <img
              src="/ar-logo.png"
              alt="AR Logo"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 10px rgba(184, 245, 60, 0.3))",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.02em" }}>AR</span>
              <span style={{ fontSize: "10px", color: "var(--lime-accent)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Membership</span>
            </div>
          </a>

          <div className="links">
            <a href="#features">Features</a>
            <a href="#cadence">Cadence</a>
            <a href="#how">How it works</a>
            <a href="#calculator">Calculator</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="nav-actions">
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn sm"
              aria-label="Get a free demo"
            >
              <MessageCircle size={16} />
              <span>Free Demo</span>
            </a>

            <button
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu open">
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>
            Features
          </a>
          <a href="#cadence" onClick={() => setMobileMenuOpen(false)}>
            Cadence
          </a>
          <a href="#how" onClick={() => setMobileMenuOpen(false)}>
            How it works
          </a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>
            Revenue Calculator
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn"
            style={{ marginTop: "8px" }}
          >
            <MessageCircle size={16} />
            <span>Book a free demo</span>
          </a>
        </div>
      )}
    </header>
  );
}
