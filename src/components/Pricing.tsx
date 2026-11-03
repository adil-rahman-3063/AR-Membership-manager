"use client";

import React from "react";
import { Check, MessageCircle, Info, Sparkles, ShieldCheck, Clock, Layers } from "lucide-react";
import { getWhatsAppPlanUrl } from "@/lib/constants";

export default function Pricing() {
  const outrightFeatures = [
    "Full instance deployed directly to your own Cloudflare account",
    "Meta WhatsApp Cloud API set up in your official business account",
    "Cashfree payment gateway configured with 0% platform fee on first ₹20L",
    "Private isolated database & real-time automatic backup to Google Sheets",
    "Branded WhatsApp message templates with 1-tap instant UPI payment links",
    "Automated 9:00 AM renewal alerts, overdue reminders & instant receipts",
    "14 days of dedicated post-launch onboarding, staff training & handover",
    "Lifetime usage with zero recurring monthly or annual fees to us",
  ];

  const saasFeatures = [
    "Managed high-availability cloud hosting (zero setup required)",
    "No Cloudflare, database, or technical configuration needed from you",
    "Official Meta WhatsApp Cloud API automated messaging included",
    "Automated 9:00 AM renewal alerts, overdue notices & payment receipts",
    "1-tap UPI payment links with automated ledger tracking",
    "Continuous software updates, new feature rollouts & automated backups",
    "Low upfront commitment with flexible cancel-anytime billing",
    "Guaranteed locked-in early bird pricing for waitlist members",
  ];

  return (
    <section className="sec" id="pricing">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <Sparkles size={14} />
            <span>Flexible Options</span>
          </div>
          <h2 className="h">Two ways to power your membership dues</h2>
          <p className="sub">
            Own the complete system today with zero recurring fees, or join our early waitlist for the upcoming hosted monthly SaaS subscription.
          </p>
        </div>

        <div className="split">
          {/* Plan 1: Buy Outright (Live & Active) */}
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
                left: "28px",
                background: "var(--lime-accent)",
                color: "var(--text-dark)",
                fontSize: "11.5px",
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
              <span>Available Now · Lifetime License</span>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "10px",
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
                    padding: "5px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--lime-accent)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <ShieldCheck size={15} />
                  <span>100% Code Ownership</span>
                </div>
              </div>

              <div
                className="price"
                style={{
                  margin: "20px 0 8px",
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "var(--text-subtle)",
                    textDecoration: "line-through",
                    textDecorationColor: "#ef4444",
                    textDecorationThickness: "2.5px",
                  }}
                >
                  ₹20,000
                </span>
                <span style={{ fontSize: "40px", fontWeight: 800, color: "var(--text-primary)" }}>
                  ₹14,999
                </span>
                <span style={{ fontSize: "15px", fontWeight: 500, color: "var(--text-muted)" }}>
                  one-time
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    background: "rgba(184, 245, 60, 0.15)",
                    color: "var(--lime-accent)",
                    border: "1px solid rgba(184, 245, 60, 0.3)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  Save ₹5,001
                </span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  margin: "0 0 16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: "var(--lime-accent)", fontWeight: 700 }}>
                  + ₹500 one-time setup fee
                </span>
                <span style={{ color: "var(--text-subtle)" }}>•</span>
                <span>For complete Meta WhatsApp Cloud API & Cashfree gateway setup</span>
              </div>

              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "0 0 20px" }}>
                Everything configured, verified, and handed over ready to collect payments.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: "12px",
                  margin: "20px 0 28px",
                  padding: "18px",
                  background: "rgba(10, 6, 4, 0.4)",
                  borderRadius: "14px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {outrightFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#e8dccf",
                      lineHeight: 1.45,
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
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
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={getWhatsAppPlanUrl("Buy Outright Plan ₹14,999 + ₹500 setup")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn lg"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={18} />
                <span>Buy Outright on WhatsApp (₹14,999 + ₹500 setup)</span>
              </a>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginTop: "14px",
                  fontSize: "12px",
                  color: "var(--text-subtle)",
                }}
              >
                <span>✓ Ready in 48–72 hours</span>
                <span>✓ 14 days handover support</span>
                <span>✓ Free member migration</span>
              </div>
            </div>
          </div>

          {/* Plan 2: SaaS Coming Soon (Monthly Subscription) */}
          <div
            className="plan"
            style={{
              position: "relative",
              border: "1px dashed rgba(255, 255, 255, 0.22)",
              background: "linear-gradient(180deg, rgba(28, 18, 13, 0.85) 0%, rgba(18, 11, 7, 0.95) 100%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-13px",
                left: "28px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "var(--text-primary)",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                fontSize: "11.5px",
                fontWeight: 800,
                padding: "4px 14px",
                borderRadius: "999px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backdropFilter: "blur(8px)",
              }}
            >
              <Clock size={13} color="var(--lime-accent)" />
              <span>Coming Soon · Monthly Subscription</span>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "6px",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 6px" }}>Cloud SaaS</h3>
                  <p className="plan-sub">
                    We host, monitor, and manage everything for you.{" "}
                    <b style={{ color: "var(--text-primary)" }}>Monthly billing.</b>
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-subtle)",
                    padding: "5px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Layers size={15} />
                  <span>Fully Managed</span>
                </div>
              </div>

              <div
                className="price"
                style={{
                  margin: "20px 0 8px",
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "36px", fontWeight: 800, color: "var(--text-primary)" }}>
                  Monthly Plan
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-subtle)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  In Development
                </span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  margin: "0 0 16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                  Zero technical setup
                </span>
                <span style={{ color: "var(--text-subtle)" }}>•</span>
                <span>Simple pay-as-you-grow monthly subscription</span>
              </div>

              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "0 0 20px" }}>
                Ideal for managers who want zero infrastructure setup and instant activation.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: "12px",
                  margin: "20px 0 28px",
                  padding: "18px",
                  background: "rgba(10, 6, 4, 0.4)",
                  borderRadius: "14px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {saasFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      color: "var(--text-muted)",
                      lineHeight: 1.45,
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.08)",
                        color: "var(--text-muted)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={getWhatsAppPlanUrl("SaaS Monthly Subscription Waitlist")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost lg"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={18} />
                <span>Join SaaS Waitlist on WhatsApp</span>
              </a>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginTop: "14px",
                  fontSize: "12px",
                  color: "var(--text-subtle)",
                }}
              >
                <span>✓ Guaranteed early bird discount</span>
                <span>✓ No payment required today</span>
                <span>✓ Priority launch access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Note */}
        <div className="pricing-note" style={{ maxWidth: "100%", margin: "28px auto 0" }}>
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
