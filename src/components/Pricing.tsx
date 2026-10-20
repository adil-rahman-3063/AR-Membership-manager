"use client";

import React from "react";
import { Check, MessageCircle, Info } from "lucide-react";
import { getWhatsAppPlanUrl } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="sec" id="pricing">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <span>Transparent Pricing</span>
          </div>
          <h2 className="h">Two simple ways to get AR Membership</h2>
          <p className="sub">
            Introductory pricing. Pay monthly and we run everything for you, or
            pay once and own your independent copy. Meta WhatsApp Cloud API and
            Cashfree setup in your own accounts is fully included in both.
          </p>
        </div>

        <div className="split">
          {/* Plan 1: Monthly (Hot) */}
          <div className="plan hot">
            <span className="plan-badge">Most Popular</span>
            <div>
              <h3>Monthly</h3>
              <p className="plan-sub">
                We host, maintain, and monitor everything for you.{" "}
                <b>Introductory price.</b>
              </p>

              <div className="price">
                ₹599 <span>/ month</span>
              </div>

              <ul>
                <li>
                  Meta WhatsApp API & Cashfree set up in your own accounts, included
                </li>
                <li>Private database & Google Sheets backup created on your email</li>
                <li>Managed high-availability cloud hosting & automated monitoring</li>
                <li>Ready to collect in 2–3 days, zero lock-in, cancel anytime</li>
                <li>Continuous software updates & priority WhatsApp support</li>
              </ul>
            </div>

            <a
              href={getWhatsAppPlanUrl("Monthly Plan ₹599/mo")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ width: "100%" }}
            >
              <MessageCircle size={16} />
              <span>Start Monthly Plan</span>
            </a>
          </div>

          {/* Plan 2: Pay Once */}
          <div className="plan">
            <div>
              <h3>Pay once</h3>
              <p className="plan-sub">
                Your own copy, on your own infrastructure.{" "}
                <b style={{ color: "var(--lime-accent)" }}>Introductory price.</b>
              </p>

              <div className="price">
                ₹15,000 <span>one time</span>
              </div>

              <ul>
                <li>
                  Meta WhatsApp API & Cashfree set up in your own accounts, included
                </li>
                <li>
                  Deployed directly to your own Cloudflare account on your email
                </li>
                <li>Your own isolated database & Google Sheets real-time backup</li>
                <li>14 days of dedicated post-launch onboarding & handover support</li>
                <li>Lifetime usage with zero recurring subscription fees to us</li>
              </ul>
            </div>

            <a
              href={getWhatsAppPlanUrl("Pay Once Plan ₹15,000")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
              style={{ width: "100%" }}
            >
              <MessageCircle size={16} />
              <span>Buy Outright (One-Time)</span>
            </a>
          </div>
        </div>

        {/* Transparent Note */}
        <div className="pricing-note">
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
