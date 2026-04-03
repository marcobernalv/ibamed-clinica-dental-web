import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
