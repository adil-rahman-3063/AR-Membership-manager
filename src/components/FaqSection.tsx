"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Do I need any coding or technical knowledge to run AR?",
    a: "None whatsoever. We handle 100% of the initial configuration, cloud database setup, Meta WhatsApp API verification, and Cashfree payment linking. You receive a ready-to-use dashboard that works on desktop, tablet, and mobile like any standard web app.",
  },
  {
    q: "Can I use my existing business WhatsApp number?",
    a: "Yes! You can use your existing phone number or a dedicated new SIM. We register it under the official Meta WhatsApp Cloud API so you get high delivery rates, official green tick compatibility, and zero risk of personal number bans.",
  },
  {
    q: "What if a member pays by cash or offline at the reception?",
    a: "Simply click 'Mark Paid' on their member card in your dashboard. You can choose to extend their membership +1 Month from today or from their original renewal date, and AR will automatically send them a branded WhatsApp confirmation confirming payment.",
  },
  {
    q: "How does payment tracking work? Does AR take a cut?",
    a: "AR never touches your funds. For Cashfree checkout payments, transactions and renewals are automatically marked in real-time. For direct 0% fee UPI QR or cash payments, you simply click 'Mark Paid' in one tap. All funds settle straight into your own bank account.",
  },
  {
    q: "Can I import our existing members from Excel or Google Sheets?",
    a: "Yes. We provide a 1-click CSV/Excel importer. If you send us your existing member list during setup, our onboarding team will format and upload all your members for you at no additional charge.",
  },
  {
    q: "What happens when an expired member renews late?",
    a: "With AR, late renewals are fair and automatic: an expired member renews from the day they actually pay, not the expired past date. You can also override or adjust this with custom billing dates at any time.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="sec alt" id="faq">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="h">Everything you need to know about AR</h2>
          <p className="sub">
            Got questions before getting started? Here are answers to the most common questions from gym owners, academy directors, and studio managers.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gap: "14px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: "var(--bg-card)",
                  border: isOpen ? "1px solid var(--lime-accent)" : "1px solid var(--border-subtle)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    textAlign: "left",
                    color: "var(--text-primary)",
                    fontSize: "17px",
                    fontWeight: 700,
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      color: isOpen ? "var(--lime-accent)" : "var(--text-subtle)",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px",
                      color: "var(--text-muted)",
                      fontSize: "15px",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
