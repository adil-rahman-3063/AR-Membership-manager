"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles, Check } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

interface HeroProps {
  onOpenDemo: () => void;
}

const mockMembers = [
  {
    id: "mem-1",
    name: "Anjali R",
    initials: "AR",
    plan: "Gym · Monthly Pro",
    memberId: "14",
    amount: "₹1,800",
    date: "25 Oct 2026",
    status: "due-soon",
    statusText: "Due soon",
    daysLeft: "in 3 days",
  },
  {
    id: "mem-2",
    name: "Rohan M",
    initials: "RM",
    plan: "Tuition · Physics Batch",
    memberId: "28",
    amount: "₹2,500",
    date: "22 Oct 2026",
    status: "due-today",
    statusText: "Due today",
    daysLeft: "today",
  },
  {
    id: "mem-3",
    name: "Vikram S",
    initials: "VS",
    plan: "Badminton Club · Gold",
    memberId: "09",
    amount: "₹1,200",
    date: "20 Oct 2026",
    status: "overdue",
    statusText: "1 day overdue",
    daysLeft: "yesterday",
  },
];

export default function Hero() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPaid, setIsPaid] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const member = mockMembers[selectedIdx];

  const handlePay = () => {
    setIsPaid(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  const handleSelectMember = (idx: number) => {
    setSelectedIdx(idx);
    setIsPaid(false);
    setShowToast(false);
  };

  return (
    <section className="hero-section">
      <div className="bg-glow-radial" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="pulse-dot" />
              <span>Membership and dues management</span>
            </div>

            <h1 className="h">
              Stop chasing payments. <br />
              <em>Let WhatsApp do it.</em>
            </h1>

            <p className="lead">
              AR Membership tracks every member's due date, sends the reminder with a
              direct UPI payment link on WhatsApp, and records the renewal when it
              arrives. Built specifically for gyms, tuition centres, sports clubs,
              and monthly subscription businesses.
            </p>

            <div className="hero-buttons">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn lg"
              >
                <MessageCircle size={18} />
                <span>Book a free demo</span>
              </a>
              <a href="#pricing" className="btn ghost lg">
                <span>See pricing</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="hero-guarantee">
              <span>
                <CheckCircle2 size={16} color="var(--lime-accent)" />
                Meta WhatsApp Cloud API
              </span>
              <span>
                <CheckCircle2 size={16} color="var(--lime-accent)" />
                Direct UPI + 0% Gateway Fee
              </span>
              <span>
                <CheckCircle2 size={16} color="var(--lime-accent)" />
                Live in 2–3 Days
              </span>
            </div>
          </div>

          <div className="hero-right">
            <div className="mock">
              <div className="mock-badge">
                <Sparkles size={12} />
                <span>Live Interactive Simulation</span>
              </div>

              {/* Member Card */}
              <div className="member-card">
                <div className="member-header">
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <div className="avatar-box">{member.initials}</div>
                    <div>
                      <div className="member-name">{member.name}</div>
                      <div className="member-sub">
                        Member ID {member.memberId} · {member.plan}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`chip ${isPaid ? "paid" : member.status === "overdue" ? "overdue" : "due-soon"}`}
                  >
                    {isPaid ? "✓ Paid · Renewed" : member.statusText}
                  </span>
                </div>

                <div className="due-row">
                  <div>
                    <div className="sm-label">Monthly dues</div>
                    <div className="big-val">{member.amount}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="sm-label">
                      {isPaid ? "Next renewal date" : "Due date"}
                    </div>
                    <div
                      className="big-val"
                      style={{ color: isPaid ? "var(--lime-accent)" : "inherit" }}
                    >
                      {isPaid ? "25 Nov 2026" : member.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Notification Bubble */}
              <div className="wa-container">
                <div className="wa-header">
                  <span className="wa-label">
                    <MessageCircle size={14} />
                    WhatsApp Reminder (Auto-sent at 9:00 AM)
                  </span>
                  <span className="wa-time">09:00 AM ✓✓</span>
                </div>

                <div className="wa-bubble-body">
                  Hello <b>{member.name}</b>, your membership fee of{" "}
                  <b>{member.amount}</b> is due {member.daysLeft} (<b>{member.date}</b>).
                  Pay in one tap to record your renewal automatically:
                </div>

                {!isPaid ? (
                  <button
                    onClick={handlePay}
                    className="pay-btn-interactive"
                    title="Click to simulate member tapping payment"
                  >
                    <Zap size={14} />
                    <span>Pay {member.amount} with UPI</span>
                  </button>
                ) : (
                  <div
                    style={{
                      marginTop: "12px",
                      padding: "8px 14px",
                      background: "rgba(37, 211, 102, 0.2)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "#b8f53c",
                    }}
                  >
                    <Check size={16} />
                    <span>
                      Payment verified via Cashfree. WhatsApp renewal confirmation sent.
                    </span>
                  </div>
                )}
              </div>

              {/* Simulation Switcher Controls */}
              <div className="mock-controls">
                {mockMembers.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => handleSelectMember(idx)}
                    className={`mock-tab ${selectedIdx === idx ? "active" : ""}`}
                  >
                    {m.name} ({m.statusText})
                  </button>
                ))}
              </div>

              {/* Simulated Toast Notification */}
              {showToast && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-24px",
                    left: "20px",
                    right: "20px",
                    background: "#064e3b",
                    border: "1px solid #10b981",
                    color: "#f4efe6",
                    padding: "12px 18px",
                    borderRadius: "12px",
                    fontSize: "13.5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                    zIndex: 10,
                  }}
                >
                  <CheckCircle2 size={18} color="#34d399" />
                  <div>
                    <strong>Payment Received: {member.amount}</strong>
                    <div style={{ fontSize: "12px", color: "#a7f3d0" }}>
                      Cashfree auto-marked transaction: Ledger updated & member renewed +1 Month!
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
