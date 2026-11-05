"use client";

import React from "react";
import { Check, MessageCircle, Info, ShieldCheck, Clock, Layers } from "lucide-react";
import { getWhatsAppPlanUrl } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

export default function Pricing() {
  const lifetimeFeatures = [
    "Full instance deployed directly to your own Cloudflare account",
    "Meta WhatsApp Cloud API set up in your official business account",
    "Cashfree payment gateway configured with 0% platform fee on first ₹20L",
    "Private isolated database & backup to Google Sheets",
    "Branded WhatsApp message templates with 1-tap instant UPI payment links",
    "Automated 9:00 AM renewal alerts, overdue reminders & instant receipts",
    "14 days of dedicated post-launch onboarding, staff training & handover",
    "Lifetime usage with zero recurring monthly or annual fees to us",
  ];

  const saasFeatures = [
    "Managed high-availability cloud hosting (we run and monitor the server for you)",
    "₹0 setup fee — we configure your Meta WhatsApp API & Cashfree for free",
    "Dedicated Meta WhatsApp API in your own account (never shared or pooled)",
    "Cashfree gateway in your own name — all payments settle directly to your bank",
    "Automated 9:00 AM renewal alerts, overdue notices & instant receipts",
    "Continuous software updates, new feature rollouts & automated backups",
    "Low upfront commitment with flexible cancel-anytime monthly billing",
    "Guaranteed locked-in early bird pricing for waitlist members",
  ];

  return (
    <section className="sec" id="pricing">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <span>Pricing options</span>
          </div>
          <h2 className="h">Two ways to power your membership dues</h2>
          <p className="sub">
            Own the complete system today with zero recurring fees, or join our early waitlist for the upcoming hosted monthly SaaS subscription.
          </p>
        </div>

        <div className="split">
          {/* Plan 1: Lifetime Subscription (Live & Active) */}
          <div
            className="plan"
            style={{
              position: "relative",
              border: "1px solid var(--border-active)",
              background: "var(--bg-card)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "24px",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-strong)",
                color: "var(--lime-accent)",
                fontSize: "12px",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "var(--radius-sm)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--lime-accent)", display: "inline-block" }} />
              <span>Available now · Lifetime subscription</span>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "4px",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 4px" }}>Lifetime Subscription</h3>
                  <p className="plan-sub">
                    Your own dedicated instance on your own infrastructure.{" "}
                    <span style={{ color: "var(--lime-accent)", fontWeight: 500 }}>Introductory price</span>
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(184, 245, 60, 0.08)",
                    border: "1px solid rgba(184, 245, 60, 0.2)",
                    padding: "3px 8px",
                    borderRadius: "var(--radius-xs)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--lime-accent)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>100% Code ownership</span>
                </div>
              </div>

              <div
                className="price"
                style={{
                  margin: "18px 0 8px",
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "var(--text-subtle)",
                    textDecoration: "line-through",
                    textDecorationColor: "#ef4444",
                  }}
                >
                  ₹20,000
                </span>
                <span style={{ fontSize: "38px", fontWeight: 700, color: "var(--text-primary)" }}>
                  ₹14,999
                </span>
                <span style={{ fontSize: "14.5px", fontWeight: 500, color: "var(--text-muted)" }}>
                  one-time
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    background: "rgba(184, 245, 60, 0.1)",
                    color: "var(--lime-accent)",
                    border: "1px solid rgba(184, 245, 60, 0.25)",
                    padding: "2px 7px",
                    borderRadius: "var(--radius-xs)",
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
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  padding: "5px 12px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  margin: "0 0 16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: "var(--lime-accent)", fontWeight: 600 }}>
                  + ₹500 one-time setup fee
                </span>
                <span style={{ color: "var(--text-subtle)" }}>•</span>
                <span>Complete Meta WhatsApp API & Cashfree gateway configuration</span>
              </div>

              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "0 0 18px" }}>
                Everything configured, verified, and handed over ready to collect payments.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  margin: "18px 0 24px",
                  padding: "16px",
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {lifetimeFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "13.5px",
                      color: "var(--text-primary)",
                      lineHeight: 1.45,
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "var(--radius-xs)",
                        background: "rgba(184, 245, 60, 0.12)",
                        color: "var(--lime-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check size={11} strokeWidth={2} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={getWhatsAppPlanUrl("Lifetime Subscription Plan ₹14,999 + ₹500 setup")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead("pricing_lifetime", { plan: "Lifetime Subscription", price: 14999 })}
                className="btn lg"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={18} />
                <span>Get Lifetime Subscription on WhatsApp</span>
              </a>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginTop: "12px",
                  fontSize: "12px",
                  color: "var(--text-subtle)",
                }}
              >
                <span>Ready in 48–72 hours</span>
                <span>•</span>
                <span>14 days handover support</span>
                <span>•</span>
                <span>Free member migration</span>
              </div>
            </div>
          </div>

          {/* Plan 2: SaaS Coming Soon (Monthly Subscription) */}
          <div
            className="plan"
            style={{
              position: "relative",
              border: "1px dashed var(--border-strong)",
              background: "var(--bg-surface)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "24px",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-strong)",
                color: "var(--text-muted)",
                fontSize: "12px",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "var(--radius-sm)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Clock size={13} color="var(--lime-accent)" />
              <span>Coming soon · Monthly subscription</span>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "4px",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 4px" }}>Cloud SaaS</h3>
                  <p className="plan-sub">
                    We host, monitor, and manage everything for you.{" "}
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Monthly billing</span>
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(244, 239, 230, 0.05)",
                    border: "1px solid var(--border-subtle)",
                    padding: "3px 8px",
                    borderRadius: "var(--radius-xs)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--text-subtle)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Layers size={14} />
                  <span>Fully managed</span>
                </div>
              </div>

              <div
                className="price"
                style={{
                  margin: "18px 0 8px",
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "34px", fontWeight: 700, color: "var(--text-primary)" }}>
                  Monthly Plan
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    background: "rgba(244, 239, 230, 0.08)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-subtle)",
                    padding: "2px 7px",
                    borderRadius: "var(--radius-xs)",
                  }}
                >
                  In development
                </span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--bg-main)",
                  border: "1px solid var(--border-subtle)",
                  padding: "5px 12px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  margin: "0 0 16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  Zero technical setup
                </span>
                <span style={{ color: "var(--text-subtle)" }}>•</span>
                <span>Simple pay-as-you-grow monthly subscription</span>
              </div>

              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "0 0 18px" }}>
                Designed for managers who want cloud hosting without maintaining infrastructure.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  margin: "18px 0 24px",
                  padding: "16px",
                  background: "var(--bg-main)",
                  borderRadius: "var(--radius-md)",
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
                      fontSize: "13.5px",
                      color: "var(--text-muted)",
                      lineHeight: 1.45,
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "var(--radius-xs)",
                        background: "rgba(244, 239, 230, 0.08)",
                        color: "var(--text-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check size={11} strokeWidth={2} />
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
                onClick={() => trackLead("pricing_saas_waitlist", { plan: "SaaS Waitlist" })}
                className="btn ghost lg"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={18} />
                <span>Join SaaS waitlist on WhatsApp</span>
              </a>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginTop: "12px",
                  fontSize: "12px",
                  color: "var(--text-subtle)",
                }}
              >
                <span>Zero setup fee</span>
                <span>•</span>
                <span>Early bird discount reserved</span>
                <span>•</span>
                <span>No payment required today</span>
              </div>

              <div
                style={{
                  marginTop: "14px",
                  padding: "10px 12px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg-main)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "12px",
                  color: "var(--text-subtle)",
                  lineHeight: 1.5,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <Info size={14} color="var(--lime-accent)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong style={{ color: "var(--text-muted)", fontWeight: 600 }}>Accounts & payments:</strong> ₹0 setup fee (we configure your Meta API & Cashfree for free). Meta WhatsApp fees are paid directly to Meta. Cashfree deposits all collections straight into your bank account, deducting standard gateway fees.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Note */}
        <div className="pricing-note">
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <Info size={18} color="var(--lime-accent)" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <strong style={{ color: "var(--text-primary)" }}>
                Third-party transparency (Lifetime & SaaS):
              </strong>{" "}
              In both Lifetime and SaaS, your Meta WhatsApp Cloud API and Cashfree gateway are configured directly in your own business accounts—never shared, pooled, or co-mingled with us. We configure both for you (₹500 for Lifetime, ₹0 for SaaS). You pay Meta directly for WhatsApp template messages at official utility rates (~₹0.35–₹0.80 per conversation). For Cashfree, all member payments settle directly into your bank account, and Cashfree deducts their standard gateway fee (with initial free processing tiers where eligible). AR never touches your funds.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
