"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/lib/constants";

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
        className={`floating-wa-btn ${isScrolled ? "scrolled" : ""}`}
        aria-label="Chat with Adil Rahman on WhatsApp"
      >
        <span className="floating-wa-pulse" />
        <div className="floating-wa-icon">
          <MessageCircle size={22} />
        </div>
        <span className="floating-wa-text">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
