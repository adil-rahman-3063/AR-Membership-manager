"use client";

import React from "react";
import { MessageCircle, Mail, ExternalLink } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="foot-wrapper">
      <div className="wrap">
        <div className="foot">
          <div className="foot-left">
            <div className="logo" style={{ fontSize: "18px" }}>
              <img
                src="/ar-logo.png"
                alt="AR Logo"
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain",
                }}
              />
              <span>AR</span>
            </div>
            <span style={{ color: "var(--border-strong)" }}>|</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              Engineered by{" "}
              <a
                href="https://adilrahman.cc"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--lime-accent)",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <span>Adil Rahman</span>
                <ExternalLink size={12} />
              </a>
            </span>
          </div>

          <div className="foot-links">
            <a
              href="https://adilrahman.cc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "var(--text-muted)",
              }}
            >
              <span>adilrahman.cc</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=adilrahman3063@gmail.com&su=Requesting+Demo+-+AR+Membership+Software&body=Hi+Adil,%0A%0AI+came+across+your+AR+Membership+software+and+would+love+to+see+a+quick+demo+to+learn+more+about+how+it+works.%0A%0APlease+let+me+know+your+availability+for+a+brief+call+or+walkthrough.%0A%0AThanks!"
              onClick={() => trackLead("footer_gmail")}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <Mail size={15} color="var(--lime-accent)" />
              <span>adilrahman3063@gmail.com</span>
            </a>
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLead("footer_whatsapp")}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <MessageCircle size={15} color="var(--lime-accent)" />
              <span>WhatsApp</span>
            </a>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-subtle)", fontSize: "13px" }}>
              <span>llms.txt</span>
            </a>
            <a href="/pricing.md" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-subtle)", fontSize: "13px" }}>
              <span>pricing.md</span>
            </a>
            <span>© 2026 AR. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
