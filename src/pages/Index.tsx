import Navbar from "@/components/divorcio/Navbar";
import HeroSection from "@/components/divorcio/HeroSection";
import ValueProposition from "@/components/divorcio/ValueProposition";
import DivorceTypesSection from "@/components/divorcio/DivorceTypesSection";
import RequirementsSection from "@/components/divorcio/RequirementsSection";
import IntegralService from "@/components/divorcio/IntegralService";
import StatsSection from "@/components/divorcio/StatsSection";
import PricingSection from "@/components/divorcio/PricingSection";
import CTABanner from "@/components/divorcio/CTABanner";
import TestimonialsSection from "@/components/divorcio/TestimonialsSection";
import FAQSection from "@/components/divorcio/FAQSection";
import ContactForm from "@/components/divorcio/ContactForm";
import LocationSection from "@/components/divorcio/LocationSection";
import Footer from "@/components/divorcio/Footer";
import WhatsAppButton from "@/components/divorcio/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <DivorceTypesSection />
      <RequirementsSection />
      <IntegralService />
      <StatsSection />
      <PricingSection />
      <CTABanner />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
