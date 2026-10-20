import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adilrahman.cc"),
  title: "AR – Membership dues on autopilot",
  description: "Membership dues management with automatic WhatsApp reminders and UPI payment links. Created by Adil Rahman.",
  keywords: [
    "membership dues",
    "WhatsApp payment reminder",
    "UPI recurring billing",
    "gym membership software",
    "tuition fee management",
    "AR Membership",
    "Adil Rahman",
  ],
  authors: [{ name: "Adil Rahman", url: "https://adilrahman.cc" }],
  creator: "Adil Rahman",
  publisher: "Adil Rahman",
  openGraph: {
    title: "AR – Membership dues on autopilot",
    description: "Stop chasing payments. Let WhatsApp do it. Automatic reminders, UPI links, and instant ledger records.",
    type: "website",
    locale: "en_IN",
    siteName: "AR Membership Manager",
  },
  twitter: {
    card: "summary_large_image",
    title: "AR – Membership dues on autopilot",
    description: "Membership dues management with automatic WhatsApp reminders and UPI payment links.",
    creator: "@adilrahman",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AR Membership Manager",
  "operatingSystem": "Web, Windows, macOS, Android, iOS (PWA)",
  "applicationCategory": "BusinessApplication",
  "description": "Automated membership dues tracking and renewal system with WhatsApp reminders and 1-tap UPI payment links.",
  "offers": [
    {
      "@type": "Offer",
      "name": "Monthly Plan",
      "price": "599",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "599",
        "priceCurrency": "INR",
        "unitText": "MONTH"
      }
    },
    {
      "@type": "Offer",
      "name": "Pay Once Plan",
      "price": "15000",
      "priceCurrency": "INR"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Adil Rahman",
    "url": "https://adilrahman.cc"
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
