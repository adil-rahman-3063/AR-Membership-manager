"use client";

import React from "react";
import { Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    n: "1",
    title: "Share your details",
    desc: "Your business name, admin email, WhatsApp business phone number, and UPI ID or merchant credentials.",
    badge: "10 Minutes",
  },
  {
    n: "2",
    title: "We set up your system",
    desc: "A private high-speed database and a continuous Google Sheets backup, both provisioned directly under your email.",
    badge: "Day 1",
  },
  {
    n: "3",
    title: "Connect WhatsApp & payments",
    desc: "We configure the Meta WhatsApp Cloud API and Cashfree gateway inside your accounts and get your official message templates approved by Meta.",
    badge: "Day 2",
  },
  {
    n: "4",
    title: "Add members, relax",
    desc: "Import existing members from Excel in 1 click. Reminders, payment tracking, and renewals run seamlessly on autopilot.",
    badge: "Day 3 (Go Live)",
  },
];

export default function HowItWorks() {
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <Wrench size={14} />
            <span>Setup process</span>
          </div>
          <h2 className="h">Ready in 2–3 days with full account handover</h2>
          <p className="sub">
            We handle the technical setup and verification in your own accounts,
            so you can start tracking members without managing infrastructure.
          </p>
        </div>

        <div className="steps">
          {steps.map((st, i) => (
            <div key={i} className="step">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div className="n">{st.n}</div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--lime-accent)",
                    background: "rgba(184, 245, 60, 0.08)",
                    border: "1px solid rgba(184, 245, 60, 0.2)",
                    padding: "2px 8px",
                    borderRadius: "var(--radius-xs)",
                  }}
                >
                  {st.badge}
                </span>
              </div>
              <h3>{st.title}</h3>
              <p>{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
