"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Cadence from "@/components/Cadence";
import HowItWorks from "@/components/HowItWorks";
import DataOwnership from "@/components/DataOwnership";
import RoiCalculator from "@/components/RoiCalculator";
import Pricing from "@/components/Pricing";
import FaqSection from "@/components/FaqSection";
import DeveloperSection from "@/components/DeveloperSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pg">
      <Navbar />
      <Hero />
      <Features />
      <Cadence />
      <RoiCalculator />
      <HowItWorks />
      <DataOwnership />
      <Pricing />
      <FaqSection />
      <DeveloperSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
