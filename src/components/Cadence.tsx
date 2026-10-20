"use client";

import React, { useState } from "react";
import { Clock, Send, CheckCircle } from "lucide-react";

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
    stageName: "1 day before",
    timeframe: "D - 1 Day (Tomorrow)",
    desc: "A friendly heads-up reminder giving members advance notice so they can renew early.",
    tone: "Friendly Heads-up",
    sampleMessage:
      "Hi Anjali, your AR Fitness membership expires tomorrow (25 Oct). Tap here to renew early with UPI: [Pay ₹1,800]. Keep up your great momentum!",
  },
  {
    num: "Stage 2",
    stageName: "On due date",
    timeframe: "Due Date (9:00 AM IST)",
    desc: "Official renewal message sent at 9:00 AM with the exact dues breakdown and 1-tap payment link.",
    tone: "Official Due Notice",
    sampleMessage:
      "Good morning Anjali. Your membership fee of ₹1,800 is due today (25 Oct). Please complete payment using this secure link: [Pay ₹1,800 with UPI].",
  },
  {
    num: "Stage 3",
    stageName: "1 day overdue",
    timeframe: "D + 1 Day (Overdue)",
    desc: "An urgent follow-up renewal link. Expired members renew from their payment date, keeping records fair.",
    tone: "Urgent Renewal",
    sampleMessage:
      "Hi Anjali, your membership was due yesterday. To avoid service disruption, please clear your outstanding dues here: [Renew Now ₹1,800].",
  },
];

export default function Cadence() {
  const [activeStage, setActiveStage] = useState(1); // default to 'On due date'
  const current = stages[activeStage];

  return (
    <section className="sec" id="cadence">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <Clock size={14} />
            <span>Smart Automation Sequence</span>
          </div>
          <h2 className="h">Three timely reminders. Zero chasing.</h2>
          <p className="sub">
            Every day at 9:00 AM IST, AR automatically checks who needs a message:
            1 day before, on their due date, and 1 day overdue. Anyone already
            marked Paid is skipped automatically, so nobody ever gets an unwanted reminder.
          </p>
        </div>

        <div className="three-cadence">
          {stages.map((s, idx) => (
            <div
              key={idx}
              className={`stage-card ${activeStage === idx ? "selected" : ""}`}
              onClick={() => setActiveStage(idx)}
            >
              <div className="stage-pill">
                <span>{s.num}</span>
                {activeStage === idx && (
                  <CheckCircle size={14} color="var(--lime-accent)" />
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
