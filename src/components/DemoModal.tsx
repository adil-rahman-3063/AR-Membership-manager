"use client";

import React, { useState } from "react";
import { X, MessageCircle, Send, CheckCircle2, Sparkles } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export default function DemoModal({ isOpen, onClose, selectedPlan }: DemoModalProps) {
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("Gym / Fitness Centre");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const query = encodeURIComponent(
      `Hi AR team! I would like a live demo of AR Membership.\n\nBusiness Name: ${businessName || "My Business"}\nCategory: ${category}\nPhone: ${phone || "Not specified"}\nInterested Plan: ${selectedPlan || "Monthly (₹599/mo)"}`
    );
    window.open(`https://wa.me/919876543210?text=${query}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(10, 6, 4, 0.82)",
        backdropFilter: "blur(8px)",
        display: "grid",
        placeItems: "center",
        zIndex: 999,
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-strong)",
          borderRadius: "24px",
          width: "100%",
          maxWidth: "480px",
          padding: "32px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.8)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "var(--text-subtle)",
            padding: "6px",
            borderRadius: "8px",
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--lime-accent)", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>
              <Sparkles size={14} />
              <span>Live Demonstration & Walkthrough</span>
            </div>

            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "26px", fontWeight: 800, margin: "0 0 8px" }}>
              Book Your AR Demo
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "24px", lineHeight: 1.5 }}>
              See how automatic WhatsApp reminders and 1-tap UPI payments work for your business in 10 minutes.
            </p>

            <form onSubmit={handleLaunchWhatsApp}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
                  Business / Club Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Iron Pulse Gym"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "var(--bg-main)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "14.5px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
                  Business Type
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "var(--bg-main)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "14.5px",
                    outline: "none",
                  }}
                >
                  <option value="Gym / Fitness Centre">Gym / Fitness Centre</option>
                  <option value="Tuition / Coaching Class">Tuition / Coaching Class</option>
                  <option value="Sports Academy / Badminton Club">Sports Academy / Badminton Club</option>
                  <option value="Dance / Music / Yoga Studio">Dance / Music / Yoga Studio</option>
                  <option value="Co-working / Subscription Business">Co-working / Subscription Business</option>
                </select>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
                  Your WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "var(--bg-main)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "14.5px",
                    outline: "none",
                  }}
                />
              </div>

              <button type="submit" className="btn lg" style={{ width: "100%" }}>
                <MessageCircle size={18} />
                <span>Continue on WhatsApp</span>
              </button>
            </form>

            <div style={{ textAlign: "center", marginTop: "14px", fontSize: "12px", color: "var(--text-subtle)" }}>
              No spam. We will only send you a live preview link and setup guide.
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(184, 245, 60, 0.15)",
                color: "var(--lime-accent)",
                display: "grid",
                placeItems: "center",
                margin: "0 auto 16px",
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", marginBottom: "8px" }}>
              WhatsApp Chat Launched!
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "14.5px", marginBottom: "24px", lineHeight: 1.5 }}>
              Check your WhatsApp window to send the demo request. Our onboarding team typically replies within 15 minutes.
            </p>
            <button onClick={onClose} className="btn ghost" style={{ width: "100%" }}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
