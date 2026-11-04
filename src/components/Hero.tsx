"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle2, ArrowRight, Zap, Check } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

interface HeroProps {
  onOpenDemo?: () => void;
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
    statusText: "Due in 3 days",
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
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="pulse-dot" />
              <span>Membership and dues management</span>
            </div>

            <h1 className="h">
              Stop chasing payments. <br />
              <span style={{ color: "var(--lime-accent)" }}>Let WhatsApp do it.</span>
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
                onClick={() => trackLead("hero_primary_button")}
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
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--lime-accent)", display: "inline-block" }} />
                <span>Live dispatch preview</span>
              </div>

              {/* Member Card */}
              <div className="member-card">
                <div className="member-header">
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <div className="avatar-box">{member.initials}</div>
                    <div>
                      <div className="member-name">{member.name}</div>
                      <div className="member-sub">
                        Member ID #{member.memberId} · {member.plan}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`chip ${isPaid ? "paid" : member.status === "overdue" ? "overdue" : "due-soon"}`}
                  >
                    {isPaid ? "Paid · Renewed" : member.statusText}
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
                    <span>WhatsApp Reminder (9:00 AM IST)</span>
                  </span>
                  <span className="wa-time">09:00 AM · Meta Verified ✓✓</span>
                </div>

                <div className="wa-bubble-body">
                  Hello <b>{member.name}</b>, your membership fee of{" "}
                  <b>{member.amount}</b> is due {member.daysLeft} (<b>{member.date}</b>).
                  Tap below to clear dues and confirm your renewal:
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
                      padding: "8px 12px",
                      background: "rgba(37, 211, 102, 0.15)",
                      border: "1px solid rgba(37, 211, 102, 0.25)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "#b8f53c",
                    }}
                  >
                    <Check size={15} />
                    <span>
                      Payment verified via Cashfree. Renewal confirmation dispatched.
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
                    bottom: "-20px",
                    left: "16px",
                    right: "16px",
                    background: "#0c271e",
                    border: "1px solid rgba(52, 211, 153, 0.35)",
                    color: "#f4efe6",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    zIndex: 10,
                  }}
                >
                  <CheckCircle2 size={16} color="#34d399" />
                  <div>
                    <strong>Payment received: {member.amount}</strong>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                      Cashfree auto-marked transaction. Ledger updated and member renewed for 1 month.
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
