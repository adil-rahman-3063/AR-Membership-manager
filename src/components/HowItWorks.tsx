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
            <span>Turnkey Onboarding</span>
          </div>
          <h2 className="h">Live in 2–3 days, with nothing for you to set up</h2>
          <p className="sub">
            We handle all the technical heavy lifting. You hand over a few details,
            and start managing members from a clean, ready-to-use system.
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
                  marginBottom: "8px",
                }}
              >
                <div className="n">{st.n}</div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--lime-accent)",
                    background: "rgba(184, 245, 60, 0.12)",
                    padding: "3px 10px",
                    borderRadius: "999px",
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
