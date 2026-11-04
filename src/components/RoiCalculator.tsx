"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { trackLead, trackEvent } from "@/lib/analytics";

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
            <span>Revenue calculator</span>
          </div>
          <h2 className="h">How much revenue is delayed each month?</h2>
          <p className="sub">
            When members forget renewal dates, cashflow halts and staff spend hours
            typing manual messages. See what automated WhatsApp payment links recover:
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
                <div style={{ fontSize: "12px", color: "var(--text-subtle)", marginBottom: "2px" }}>Time saved</div>
                <div style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", fontVariantNumeric: "tabular-nums" }}>
                  ~{hoursSaved} hrs/mo
                </div>
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "var(--text-subtle)", marginBottom: "2px" }}>AR monthly fee</div>
                <div style={{ fontSize: "17px", fontWeight: 600, color: "var(--lime-accent)" }}>
                  ₹0 / mo (Lifetime)
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Adil, I tested the calculator for ${members} members (₹${fee}/mo dues, ~₹${recoveredRevenue.toLocaleString("en-IN")} delayed) and would like a live demo of AR Membership.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackLead("roi_calculator", {
                  members,
                  fee,
                  recovered_revenue: recoveredRevenue,
                })
              }
              className="btn"
              style={{ width: "100%" }}
            >
              <span>Book a free demo</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
