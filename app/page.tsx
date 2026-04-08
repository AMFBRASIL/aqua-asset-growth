"use client";

import HeroSection from "@/components/HeroSection";
import InvestmentSection from "@/components/InvestmentSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TimelapseSection from "@/components/TimelapseSection";
import GallerySection from "@/components/GallerySection";
import RevenueSection from "@/components/RevenueSection";
import ExtraRevenueSection from "@/components/ExtraRevenueSection";
import CDIComparisonSection from "@/components/CDIComparisonSection";
import SecuritySection from "@/components/SecuritySection";
import AppreciationSection from "@/components/AppreciationSection";
import SimulatorSection from "@/components/SimulatorSection";
import ClosingSection from "@/components/ClosingSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InvestmentSection />
      <TimelapseSection />
      <GallerySection />
      <RevenueSection />
      <ExtraRevenueSection />
      <CDIComparisonSection />
      <SecuritySection />
      <AppreciationSection />
      <SimulatorSection />
      <ClosingSection />
      <WhatsAppFloat />
    </div>
  );
}
