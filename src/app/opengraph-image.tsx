import { ImageResponse } from "next/og";

export const alt = "AR Membership Manager – Dues on Autopilot";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#150c07",
          padding: "70px 80px",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(184, 245, 60, 0.22) 0%, rgba(21, 12, 7, 0) 70%)",
            display: "flex",
          }}
        />

        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundColor: "#b8f53c",
              color: "#150c07",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 900,
              marginRight: "20px",
            }}
          >
            AR
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f4efe6", fontSize: "28px", fontWeight: 800 }}>
              AR Membership
            </span>
            <span style={{ color: "#b8f53c", fontSize: "14px", fontWeight: 700, letterSpacing: "2px" }}>
              DUES ON AUTOPILOT
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
            <span style={{ color: "#f4efe6", fontSize: "56px", fontWeight: 900, lineHeight: 1.1 }}>
              Stop chasing payments.
            </span>
            <span style={{ color: "#b8f53c", fontSize: "56px", fontWeight: 900, lineHeight: 1.1 }}>
              Let WhatsApp do it.
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#d6c6b6", fontSize: "22px", maxWidth: "850px", lineHeight: 1.5 }}>
              Automated dues reminders, Cashfree instant renewals, and direct UPI collections.
            </span>
          </div>
        </div>

        {/* Footer Meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderTop: "1px solid #3d2a1e",
            paddingTop: "24px",
          }}
        >
          <span style={{ color: "#a89482", fontSize: "18px" }}>
            Engineered by Adil Rahman · adilrahman.cc
          </span>
          <span style={{ color: "#b8f53c", fontSize: "18px", fontWeight: 700 }}>
            WhatsApp Integration · +91 9207114070
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
