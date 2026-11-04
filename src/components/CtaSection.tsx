"use client";

import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

export default function CtaSection() {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom: "16px" }}>
          <span>Live walkthrough</span>
        </div>
        <h2 className="h">See it running with your own members</h2>
        <p className="sub" style={{ margin: "0 auto 32px" }}>
          Message us on WhatsApp for a live 10-minute walkthrough
          customized for your gym, tuition centre, or sports academy.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead("bottom_cta")}
            className="btn lg"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
          <a href="#calculator" className="btn ghost lg">
            <span>Calculate recovery</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            color: "var(--text-subtle)",
            fontSize: "13.5px",
            flexWrap: "wrap",
          }}
        >
          <span>Setup complete in 48–72 hours</span>
          <span>•</span>
          <span>Zero recurring platform lock-in</span>
          <span>•</span>
          <span>Free member migration assistance</span>
        </div>
      </div>
    </section>
  );
}
