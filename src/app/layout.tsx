import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://membership-saas.adilrahman.cc"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "hBJiyQxySFWZkCT1PZoRgy7C99jBIhfKLsGXkk",
  },
  title: "WhatsApp Membership Dues & Payment Reminders | AR Manager",
  description:
    "Automate membership dues with scheduled 9:00 AM WhatsApp reminders and 1-tap UPI links for gyms, studios, and academies. 0% cuts. Book a 10-minute live demo.",
  keywords: [
    "membership dues",
    "WhatsApp payment reminder",
    "UPI recurring billing",
    "gym membership software",
    "tuition fee management",
    "badminton club membership software",
    "dance studio fee management",
    "AR Membership",
    "Adil Rahman",
  ],
  authors: [{ name: "Adil Rahman", url: "https://adilrahman.cc" }],
  creator: "Adil Rahman",
  publisher: "Adil Rahman",
  openGraph: {
    title: "WhatsApp Membership Dues & Payment Reminders | AR Manager",
    description:
      "Automate membership dues with scheduled 9:00 AM WhatsApp reminders and 1-tap UPI links for gyms, studios, and academies. 0% cuts.",
    type: "website",
    locale: "en_IN",
    url: "https://membership-saas.adilrahman.cc",
    siteName: "AR Membership Manager",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Membership Dues & Payment Reminders | AR Manager",
    description:
      "Automate membership dues with scheduled 9:00 AM WhatsApp reminders and 1-tap UPI links for gyms, studios, and academies.",
    creator: "@adilrahman",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "AR Membership Manager",
      "operatingSystem": "Web, Windows, macOS, Android, iOS (PWA)",
      "applicationCategory": "BusinessApplication",
      "url": "https://membership-saas.adilrahman.cc",
      "description":
        "Automated membership dues tracking and renewal system with WhatsApp reminders and 1-tap UPI payment links.",
      "offers": [
        {
          "@type": "Offer",
          "name": "Lifetime Subscription Plan",
          "price": "14999",
          "priceCurrency": "INR",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
        },
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
        "bestRating": "5",
      },
      "author": {
        "@type": "Person",
        "name": "Adil Rahman",
        "url": "https://adilrahman.cc",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need any coding or technical knowledge to run AR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "None whatsoever. We handle 100% of the initial configuration, cloud database setup, Meta WhatsApp API verification, and Cashfree payment linking. You receive a ready-to-use dashboard that works on desktop, tablet, and mobile like any standard web app.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I use my existing business WhatsApp number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. You can use your existing phone number or a dedicated new SIM. We register it under the official Meta WhatsApp Cloud API so you get high delivery rates, official green tick compatibility, and zero risk of personal number bans.",
          },
        },
        {
          "@type": "Question",
          "name": "What if a member pays by cash or offline at the reception?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Simply click 'Mark Paid' on their member card in your dashboard. You can choose to extend their membership +1 Month from today or from their original renewal date, and AR will automatically send them a branded WhatsApp confirmation confirming payment.",
          },
        },
        {
          "@type": "Question",
          "name": "How does payment tracking work? Does AR take a cut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "AR never touches your funds. For Cashfree checkout payments, transactions and renewals are automatically marked in real-time. For direct 0% fee UPI QR or cash payments, you simply click 'Mark Paid' in one tap. All funds settle straight into your own bank account.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I import our existing members from Excel or Google Sheets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We provide a 1-click CSV/Excel importer. If you send us your existing member list during setup, our onboarding team will format and upload all your members for you at no additional charge.",
          },
        },
        {
          "@type": "Question",
          "name": "What happens when an expired member renews late?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "With AR, late renewals are fair and automatic: an expired member renews from the day they actually pay, not the expired past date. You can also override or adjust this with custom billing dates at any time.",
          },
        },
      ],
    },
  ],
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLMs Context" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full Knowledge Bundle" />
        <link rel="pricing" type="text/markdown" href="/pricing.md" title="Machine-Readable Pricing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZ7KMY06FS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CZ7KMY06FS');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
