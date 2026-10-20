import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AR – Membership dues on autopilot",
  description: "Membership dues management with automatic WhatsApp reminders and UPI payment links. Made for gyms, tuition centres, clubs and monthly subscription businesses.",
  keywords: ["membership dues", "WhatsApp payment reminder", "UPI recurring billing", "gym membership software", "tuition fee management", "AR Membership"],
  authors: [{ name: "Adil Rahman" }],
  openGraph: {
    title: "AR – Membership dues on autopilot",
    description: "Stop chasing payments. Let WhatsApp do it. Automatic reminders, UPI links, and instant ledger records.",
    type: "website",
    locale: "en_IN",
    siteName: "AR Membership",
  },
  twitter: {
    card: "summary_large_image",
    title: "AR – Membership dues on autopilot",
    description: "Membership dues management with automatic WhatsApp reminders and UPI payment links.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
