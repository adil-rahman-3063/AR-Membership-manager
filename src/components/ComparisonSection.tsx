"use client";

import React from "react";
import { XCircle, CheckCircle2, ArrowRight, Zap, AlertTriangle } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

const comparisonPoints = [
  {
    category: "Due Date Tracking",
    manual: "Manual Excel sheets, color-coded cells that fall out of date, and missed renewals.",
    ar: "Automated cloud registry with real-time Active, Due Soon, and Overdue sorting.",
  },
  {
    category: "Sending Reminders",
    manual: "Awkward personal phone calls, typing manual WhatsApp texts, or chasing at the front desk.",
    ar: "Automatic 9:00 AM IST WhatsApp reminders through the official Meta Cloud API.",
  },
  {
    category: "Payment Verification",
    manual: "Begging for payment screenshots, deciphering bank SMS alerts, and manual UTR lookups.",
    ar: "Cashfree checkout with automatic transaction marking & instant renewal records.",
  },
  {
    category: "Renewal Calculations",
    manual: "Manually updating dates on calendars; expired members unfairly get old dates.",
    ar: "1-Click or automated +1 Month extension calculated from the actual payment date.",
  },
  {
    category: "Member Receipts & Trust",
    manual: "Forgot to send a confirmation or hand-writing paper receipts at reception.",
    ar: "Instant branded WhatsApp confirmation sent automatically to the member's chat.",
  },
  {
    category: "Data Safety & Backups",
    manual: "Stored on front desk computer; prone to crashes, lost files, or staff mistakes.",
    ar: "Private isolated database + live automatic sync to your personal Google Sheet.",
  },
];

export default function ComparisonSection() {
  return (
    <section className="sec" id="comparison">
      <div className="wrap">
        <div className="sec-header" style={{ textAlign: "center" }}>
          <div className="eyebrow">
            <Zap size={14} />
            <span>Why Switch To Autopilot?</span>
          </div>
          <h2 className="h" style={{ margin: "0 auto 16px" }}>
            Manual Spreadsheets vs. AR Membership Manager
          </h2>
          <p className="sub" style={{ margin: "0 auto" }}>
            See why forward-thinking gym owners, academy directors, and studio
            managers are ditching spreadsheets and manual WhatsApp chasing.
          </p>
        </div>

        <div className="comparison-grid">
          {/* Left Card: The Old Way (Muted/Red) */}
          <div className="comparison-card manual">
            <div className="comp-header">
              <div className="comp-badge manual">
                <AlertTriangle size={14} />
                <span>The Old Way</span>
              </div>
              <h3 className="comp-title">Spreadsheets & Manual Chasing</h3>
              <p className="comp-sub">
                Stressful, error-prone, and consumes 10–15 hours of staff time every week.
              </p>
            </div>

            <div className="comp-list">
              {comparisonPoints.map((item, idx) => (
                <div key={idx} className="comp-item manual">
                  <div className="comp-icon-box manual">
                    <XCircle size={18} color="#f87171" />
                  </div>
                  <div>
                    <div className="comp-item-title manual">{item.category}</div>
                    <div className="comp-item-desc">{item.manual}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: The AR Way (Lime Accent) */}
          <div className="comparison-card ar">
            <div className="comp-header">
              <div className="comp-badge ar">
                <Zap size={14} />
                <span>The AR Autopilot Way</span>
              </div>
              <h3 className="comp-title">AR Membership Manager</h3>
              <p className="comp-sub">
                Everything runs in the background. Members pay on time; you stay relaxed.
              </p>
            </div>

            <div className="comp-list">
              {comparisonPoints.map((item, idx) => (
                <div key={idx} className="comp-item ar">
                  <div className="comp-icon-box ar">
                    <CheckCircle2 size={18} color="var(--lime-accent)" />
                  </div>
                  <div>
                    <div className="comp-item-title ar">{item.category}</div>
                    <div className="comp-item-desc">{item.ar}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "24px" }}>
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ width: "100%" }}
              >
                <span>Upgrade To Autopilot Today</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
