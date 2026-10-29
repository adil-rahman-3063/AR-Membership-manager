"use client";

import React from "react";
import { Check, MessageCircle, Info, Sparkles, ShieldCheck } from "lucide-react";
import { getWhatsAppPlanUrl } from "@/lib/constants";

export default function Pricing() {
  const features = [
    "Meta WhatsApp Cloud API set up in your own official business account",
    "Cashfree payment gateway configured with 0% platform fee on first ₹20L",
    "Deployed directly to your own Cloudflare account on your email",
    "Private isolated database & real-time automatic backup to Google Sheets",
    "Branded WhatsApp message templates with 1-tap instant UPI payment links",
    "Automated 9:00 AM renewal alerts, overdue reminders & instant receipts",
    "14 days of dedicated post-launch onboarding, staff training & handover",
    "Lifetime usage with zero recurring monthly or annual fees to us",
  ];

  return (
    <section className="sec" id="pricing">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <Sparkles size={14} />
            <span>Outright Ownership</span>
          </div>
          <h2 className="h">Buy once. Own it forever.</h2>
          <p className="sub">
            No monthly subscriptions, no per-member fees, and zero vendor lock-in.
            Pay once and own your independent copy deployed directly to your own infrastructure.
            Full Meta WhatsApp Cloud API and Cashfree setup in your own accounts is included.
          </p>
        </div>

        <div style={{ maxWidth: "760px", margin: "24px auto 0" }}>
          <div
            className="plan"
            style={{
              position: "relative",
              border: "1px solid rgba(184, 245, 60, 0.4)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.45), 0 0 30px rgba(184, 245, 60, 0.08)",
              background: "linear-gradient(180deg, rgba(38, 24, 16, 0.95) 0%, rgba(22, 14, 9, 0.98) 100%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-13px",
                left: "32px",
                background: "var(--lime-accent)",
                color: "var(--text-dark)",
                fontSize: "12px",
                fontWeight: 800,
                padding: "4px 14px",
                borderRadius: "999px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Sparkles size={13} />
              <span>Lifetime License · One-Time Payment</span>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginTop: "6px",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 6px" }}>Buy Outright</h3>
                  <p className="plan-sub">
                    Your own dedicated instance on your own infrastructure.{" "}
                    <b style={{ color: "var(--lime-accent)" }}>Introductory price.</b>
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(184, 245, 60, 0.1)",
                    border: "1px solid rgba(184, 245, 60, 0.25)",
                    padding: "6px 14px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--lime-accent)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <ShieldCheck size={16} />
                  <span>100% Data & Code Ownership</span>
                </div>
              </div>

              <div
                className="price"
                style={{
                  margin: "24px 0 8px",
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "26px",
                    fontWeight: 600,
                    color: "var(--text-subtle)",
                    textDecoration: "line-through",
                    textDecorationColor: "#ef4444",
                    textDecorationThickness: "2.5px",
                  }}
                >
                  ₹15,000
                </span>
                <span style={{ fontSize: "44px", fontWeight: 800, color: "var(--text-primary)" }}>
                  ₹10,599
                </span>
                <span style={{ fontSize: "16px", fontWeight: 500, color: "var(--text-muted)" }}>
                  one-time license
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    background: "rgba(184, 245, 60, 0.15)",
                    color: "var(--lime-accent)",
                    border: "1px solid rgba(184, 245, 60, 0.3)",
                    padding: "3px 9px",
                    borderRadius: "6px",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  Save ₹4,401
                </span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "13.5px",
                  color: "var(--text-muted)",
                  margin: "0 0 20px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: "var(--lime-accent)", fontWeight: 700 }}>
                  + ₹500 one-time setup fee
                </span>
                <span style={{ color: "var(--text-subtle)" }}>•</span>
                <span>Includes complete Meta WhatsApp Cloud API, Cloudflare & Cashfree deployment</span>
              </div>

              <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: "0 0 24px" }}>
                Everything configured, verified, and handed over ready to collect payments.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "14px 20px",
                  margin: "24px 0 32px",
                  padding: "20px",
                  background: "rgba(10, 6, 4, 0.4)",
                  borderRadius: "16px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {features.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14.5px",
                      color: "#e8dccf",
                      lineHeight: 1.45,
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(184, 245, 60, 0.15)",
                        color: "var(--lime-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={getWhatsAppPlanUrl("Buy Outright Plan ₹10,599 + ₹500 setup")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn lg"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={18} />
                <span>Buy Outright on WhatsApp (₹10,599 + ₹500 setup)</span>
              </a>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "18px",
                  flexWrap: "wrap",
                  marginTop: "16px",
                  fontSize: "12.5px",
                  color: "var(--text-subtle)",
                }}
              >
                <span>✓ Ready to collect in 48–72 hours</span>
                <span>✓ 14 days dedicated handover support</span>
                <span>✓ Free member migration assistance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Note */}
        <div className="pricing-note" style={{ maxWidth: "760px", margin: "24px auto 0" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <Info size={20} color="var(--lime-accent)" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <strong style={{ color: "var(--text-primary)" }}>
                Direct third-party transparency:
              </strong>{" "}
              Third-party API charges are separate and paid directly by you without
              any markup. Meta bills official WhatsApp conversation rates directly
              to your card (approx. ~₹0.80 per conversation window). Cashfree
              offers 0% platform fee on your first ₹20 lakh of collections, then
              standard gateway rates (~1.95% + GST). You retain 100% legal ownership
              of your Meta, Google, and Cashfree credentials.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
