"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside aria-label="WhatsApp quick chat" className="floating-wa-wrapper">
      <a
        href={WHATSAPP_DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLead("floating_whatsapp")}
        className={`floating-wa-btn ${isScrolled ? "scrolled" : ""}`}
        aria-label="Chat with Adil Rahman on WhatsApp"
      >
        <div className="floating-wa-icon">
          <MessageCircle size={18} />
        </div>
        <span className="floating-wa-text">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
