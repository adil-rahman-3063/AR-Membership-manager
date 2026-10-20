"use client";

import React from "react";
import { Database, FileSpreadsheet, DownloadCloud, Lock } from "lucide-react";

const items = [
  {
    icon: Database,
    title: "Private database per business",
    desc: "Your members, payment histories, and WhatsApp conversations live in an isolated database provisioned under your own account. Data is never shared or co-mingled.",
    tag: "Isolated Tenant",
  },
  {
    icon: FileSpreadsheet,
    title: "Google Sheets cold archive",
    desc: "Older transaction logs and chat records archive directly into your private Google Drive spreadsheet with a visual storage meter, keeping active lookups ultra-fast.",
    tag: "Zero Lock-In",
  },
  {
    icon: DownloadCloud,
    title: "Export and restore anytime",
    desc: "Download your entire member registry and ledger as CSV or Excel at any moment. Restore any inactive or archived member back to active status with a single click.",
    tag: "1-Click Export",
  },
];

export default function DataOwnership() {
  return (
    <section className="sec alt" id="security">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">
            <Lock size={14} />
            <span>Absolute Data Sovereignty</span>
          </div>
          <h2 className="h">Your data stays in your accounts, not ours</h2>
          <p className="sub">
            Each business gets its own independent database. Chats, members, and
            payments are never mixed with anyone else's or locked behind proprietary walls.
          </p>
        </div>

        <div className="grid3">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div key={idx} className="card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
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
                    {it.tag}
                  </span>
                </div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
