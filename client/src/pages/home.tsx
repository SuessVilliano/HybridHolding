import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import PortfolioSection from "@/components/portfolio-section";
import InvestorSection from "@/components/investor-section";
import LeadershipSection from "@/components/leadership-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <InvestorSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
