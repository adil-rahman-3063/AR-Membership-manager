"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

export default function RoiCalculator() {
  const [members, setMembers] = useState(150);
  const [fee, setFee] = useState(1500);
  const [delayPercent, setDelayPercent] = useState(14);

  // Calculations
  const totalMonthlyBilling = members * fee;
  const delayedRevenue = Math.round((totalMonthlyBilling * delayPercent) / 100);
  const recoveredRevenue = Math.round(delayedRevenue * 0.88); // ~88% collection rate on WhatsApp
  const hoursSaved = Math.round((members * 0.25) + 8); // Chasing, reconciling, messaging

  return (
    <section className="sec alt" id="calculator">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <Calculator size={14} />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="h">How much revenue are you losing to delayed dues?</h2>
          <p className="sub">
            When members forget their renewal date, cashflow halts and staff waste
            hours sending manual messages. See what AR Membership recovers for you each month:
          </p>
        </div>

        <div className="calc-card">
          <div className="calc-inputs">
            {/* Control 1: Member Count */}
            <div className="calc-control">
              <div className="calc-label-row">
                <span>Active Paying Members</span>
                <span style={{ color: "var(--lime-accent)" }}>{members} members</span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={members}
                onChange={(e) => setMembers(Number(e.target.value))}
                className="calc-slider"
              />
            </div>

            {/* Control 2: Average Monthly Fee */}
            <div className="calc-control">
              <div className="calc-label-row">
                <span>Average Monthly Fee</span>
                <span style={{ color: "var(--lime-accent)" }}>₹{fee.toLocaleString("en-IN")} / mo</span>
              </div>
              <input
                type="range"
                min="300"
                max="10000"
                step="100"
                value={fee}
                onChange={(e) => setFee(Number(e.target.value))}
                className="calc-slider"
              />
            </div>

            {/* Control 3: Delay/Churn Rate */}
            <div className="calc-control">
              <div className="calc-label-row">
                <span>Estimated Delayed / Uncollected Rate</span>
                <span style={{ color: "var(--lime-accent)" }}>{delayPercent}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={delayPercent}
                onChange={(e) => setDelayPercent(Number(e.target.value))}
                className="calc-slider"
              />
            </div>

            <div style={{ marginTop: "24px", fontSize: "13.5px", color: "var(--text-subtle)", display: "flex", gap: "12px", alignItems: "center" }}>
              <TrendingUp size={16} color="var(--lime-accent)" />
              <span>Total Monthly Dues Under Management: <strong style={{ color: "var(--text-primary)" }}>₹{totalMonthlyBilling.toLocaleString("en-IN")}</strong></span>
            </div>
          </div>

          <div className="calc-result-box">
            <span className="calc-tag">Estimated Monthly Recovery</span>
            <div className="calc-result-val">
              ₹{recoveredRevenue.toLocaleString("en-IN")}
            </div>
            <div style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
              Recovered back into your bank account on day 1 with automated WhatsApp reminders
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                padding: "14px",
                background: "var(--bg-main)",
                borderRadius: "12px",
                marginBottom: "24px",
                textAlign: "left",
              }}
            >
              <div>
                <div style={{ fontSize: "11px", color: "var(--text-subtle)" }}>Time Saved</div>
                <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
                  ~{hoursSaved} hrs/mo
                </div>
              </div>
              <div>
                <div style={{ fontSize: "11px", color: "var(--text-subtle)" }}>AR Cost</div>
                <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--lime-accent)" }}>
                  Only ₹599/mo
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ width: "100%" }}
            >
              <span>Get A Free Demo</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
