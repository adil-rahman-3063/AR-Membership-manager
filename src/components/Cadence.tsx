"use client";

import React, { useState } from "react";
import { Clock, Send, ShieldAlert, Sparkles, CheckCircle } from "lucide-react";

interface Stage {
  num: string;
  stageName: string;
  timeframe: string;
  desc: string;
  tone: string;
  sampleMessage: string;
}

const stages: Stage[] = [
  {
    num: "Stage 1",
    stageName: "3 days before",
    timeframe: "D - 3 Days",
    desc: "A friendly heads-up with the payment button so proactive members clear dues early.",
    tone: "Gentle & Courteous",
    sampleMessage:
      "Hi Anjali, your AR Fitness membership is coming up for renewal in 3 days (25 Oct). Tap here to renew early with UPI: [Pay ₹1,800]. Have an energetic workout!",
  },
  {
    num: "Stage 2",
    stageName: "2 days before",
    timeframe: "D - 2 Days",
    desc: "A polite follow-up reminder if they have not paid yet. Skipped if already marked paid.",
    tone: "Helpful Reminder",
    sampleMessage:
      "Hello Anjali, quick reminder that your monthly membership renews on 25 Oct. Keep your uninterrupted access by clearing dues here: [Pay ₹1,800]. Thank you!",
  },
  {
    num: "Stage 3",
    stageName: "Tomorrow",
    timeframe: "D - 1 Day",
    desc: "Expires tomorrow. Urges renewal before access pause.",
    tone: "Timely Alert",
    sampleMessage:
      "Hi Anjali, your membership expires tomorrow! Renew now in one tap via Google Pay or PhonePe to ensure continuous access: [Pay ₹1,800].",
  },
  {
    num: "Stage 4",
    stageName: "Due today",
    timeframe: "Due Date (9:00 AM)",
    desc: "Due today with the exact amount, invoice summary and direct UPI pay link.",
    tone: "Official Invoice",
    sampleMessage:
      "Good morning Anjali. Your membership is due today (25 Oct) for ₹1,800. Please complete payment using this secure link: [Pay ₹1,800 with UPI].",
  },
  {
    num: "Stage 5",
    stageName: "1 day overdue",
    timeframe: "D + 1 Day",
    desc: "An urgent renewal link. Expired members renew from the payment date, keeping records fair.",
    tone: "Urgent Renewal",
    sampleMessage:
      "Hi Anjali, your membership was due yesterday. To avoid service disruption or re-admission fees, please clear your outstanding dues: [Renew Now ₹1,800].",
  },
];

export default function Cadence() {
  const [activeStage, setActiveStage] = useState(0);
  const current = stages[activeStage];

  return (
    <section className="sec" id="cadence">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <Clock size={14} />
            <span>Smart Automation Sequence</span>
          </div>
          <h2 className="h">Five reminders. Zero chasing.</h2>
          <p className="sub">
            Every day at 9:00 AM IST, AR checks who is coming due and messages
            them at exactly the right moment. Anyone marked Paid is skipped
            automatically, so nobody ever gets an embarrassing overdue notice.
          </p>
        </div>

        <div className="five">
          {stages.map((s, idx) => (
            <div
              key={idx}
              className={`stage-card ${activeStage === idx ? "selected" : ""}`}
              onClick={() => setActiveStage(idx)}
            >
              <div className="stage-pill">
                <span>{s.num}</span>
                {activeStage === idx && (
                  <CheckCircle size={13} color="var(--lime-accent)" />
                )}
              </div>
              <h3>{s.stageName}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive message preview */}
        <div className="cadence-preview">
          <div className="cadence-preview-content">
            <h4>
              <Send size={16} />
              <span>
                {current.num} Dispatch Preview ({current.stageName})
              </span>
            </h4>
            <div style={{ marginBottom: "12px", fontSize: "13px", color: "var(--text-subtle)" }}>
              Dispatch Trigger: <strong style={{ color: "var(--text-primary)" }}>{current.timeframe}</strong> · Tone: <strong style={{ color: "var(--lime-accent)" }}>{current.tone}</strong>
            </div>
            <div className="cadence-message-box">
              {current.sampleMessage}
            </div>
          </div>

          <div
            style={{
              background: "rgba(21, 12, 7, 0.7)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "14px",
              padding: "18px 24px",
              maxWidth: "320px",
            }}
          >
            <div style={{ fontSize: "12px", color: "var(--text-subtle)", marginBottom: "4px" }}>
              Intelligent Safeguard
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
              Zero False Alarms
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              The moment Cashfree automatically marks a completed payment (or you 1-click mark paid for direct UPI), future reminder triggers are deactivated in 200ms.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
