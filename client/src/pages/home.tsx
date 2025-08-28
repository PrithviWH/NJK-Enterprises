import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MissionSection from "@/components/mission-section";
import WhyUsSection from "@/components/why-us-section";
import ServicesSection from "@/components/services-section";
import CategoriesSection from "@/components/categories-section";
import ProcessSection from "@/components/process-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <WhyUsSection />
      <ServicesSection />
      <CategoriesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
