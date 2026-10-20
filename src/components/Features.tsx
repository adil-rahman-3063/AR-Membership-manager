"use client";

import React from "react";
import {
  Users,
  BellRing,
  Smartphone,
  CreditCard,
  Receipt,
  Bot,
  Megaphone,
  Laptop,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Members and membership tiers",
    desc: "Create your own custom tiers and fees. See Active, Due Soon and Overdue members at a single glance. Renew with +1 Month with a single click. An expired member renews from the day they pay, never from the stale past date.",
    tag: "Core Engine",
  },
  {
    icon: BellRing,
    title: "Automatic WhatsApp reminders",
    desc: "Reminders go out automatically at 9:00 AM IST through the official Meta WhatsApp Cloud API directly from your own verified business phone number. No manual intervention required.",
    tag: "Meta API",
  },
  {
    icon: Smartphone,
    title: "A Pay button inside the message",
    desc: "Members tap one button directly inside WhatsApp and land on an instant payment page. Supports Google Pay, PhonePe, Paytm, and dynamic UPI QR codes. Members never type amounts.",
    tag: "1-Tap UPI",
  },
  {
    icon: CreditCard,
    title: "Two ways to collect",
    desc: "Direct UPI directly into your bank account with 0% gateway fees (with 1-tap manual approval), or the Cashfree checkout gateway where transactions are marked and renewed automatically.",
    tag: "Flexible Payments",
  },
  {
    icon: Receipt,
    title: "WhatsApp confirmations & ledger",
    desc: "Paid members instantly receive a branded WhatsApp confirmation text message. Cashfree payments feature automatic transaction marking, updating your searchable ledger by day, week, month or year.",
    tag: "Cashfree Automation",
  },
  {
    icon: Bot,
    title: "Smart auto-replies",
    desc: "When a member replies with keywords like PAID, DUE, FEE or HELP, AR automatically answers with your business name, their dues breakdown, and renewal link. Rate-limited to prevent spam.",
    tag: "24/7 Bot",
  },
  {
    icon: Megaphone,
    title: "Campaign Studio",
    desc: "Build Meta-compliant WhatsApp broadcast templates, inspect live approval status, and broadcast festival offers or holiday notices to targeted groups of members.",
    tag: "Broadcasts",
  },
  {
    icon: Laptop,
    title: "Live chat console, synced everywhere",
    desc: "Chat with members directly from inside the AR dashboard. Changes and messages sync in real-time between the front desk desktop, manager tablet, and the owner's mobile phone.",
    tag: "Real-time Sync",
  },
  {
    icon: Download,
    title: "Installs like a native app",
    desc: "Progressive Web App (PWA) technology allows you to install AR straight onto your Windows desktop, Mac dock, taskbar, or iOS & Android home screen. Open and manage in one tap.",
    tag: "Desktop & Mobile",
  },
];

export default function Features() {
  return (
    <section className="sec alt" id="features">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <span>Built For Subscription Businesses</span>
          </div>
          <h2 className="h">
            Everything a subscription business needs to get paid on time
          </h2>
          <p className="sub">
            One unified dashboard for members, tiers, dues, payments, and WhatsApp
            automation. No messy spreadsheets to chase, no awkward manual calls.
          </p>
        </div>

        <div className="grid3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="ic">
                    <Icon size={24} />
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--lime-accent)",
                      background: "rgba(184, 245, 60, 0.1)",
                      padding: "4px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    {f.tag}
                  </span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
