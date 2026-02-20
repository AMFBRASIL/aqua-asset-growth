import HeroSection from "@/components/HeroSection";
import InvestmentSection from "@/components/InvestmentSection";
import RevenueSection from "@/components/RevenueSection";
import CDIComparisonSection from "@/components/CDIComparisonSection";
import SecuritySection from "@/components/SecuritySection";
import AppreciationSection from "@/components/AppreciationSection";
import SimulatorSection from "@/components/SimulatorSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InvestmentSection />
      <RevenueSection />
      <CDIComparisonSection />
      <SecuritySection />
      <AppreciationSection />
      <SimulatorSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
