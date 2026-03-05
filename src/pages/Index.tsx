import HeroSection from "@/components/divorcio/HeroSection";
import ValueProposition from "@/components/divorcio/ValueProposition";
import RequirementsSection from "@/components/divorcio/RequirementsSection";
import IntegralService from "@/components/divorcio/IntegralService";
import FAQSection from "@/components/divorcio/FAQSection";
import ContactForm from "@/components/divorcio/ContactForm";
import Footer from "@/components/divorcio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <RequirementsSection />
      <IntegralService />
      <FAQSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
