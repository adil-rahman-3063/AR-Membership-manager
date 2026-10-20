"use client";

import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom: "16px" }}>
          <span>Ready To Eliminate Chasing?</span>
        </div>
        <h2 className="h">See it running with your own members</h2>
        <p className="sub" style={{ margin: "0 auto 36px" }}>
          Message us on WhatsApp and we will walk you through a live 10-minute demo
          customized for your gym, tuition centre, or club.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn lg"
          >
            <MessageCircle size={20} />
            <span>Chat on WhatsApp</span>
          </a>
          <a href="#calculator" className="btn ghost lg">
            <span>Calculate Your Savings</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div
          style={{
            marginTop: "36px",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            color: "var(--text-subtle)",
            fontSize: "14px",
            flexWrap: "wrap",
          }}
        >
          <span>✓ Setup complete in 48–72 hours</span>
          <span>✓ No contracts or long-term lock-in</span>
          <span>✓ Free member migration assistance</span>
        </div>
      </div>
    </section>
  );
}
