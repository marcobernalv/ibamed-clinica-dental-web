import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-dental.jpg";

const WHATSAPP_URL = "https://wa.me/5216621359567?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Consultorio dental moderno en Hermosillo" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
    </div>

    <div className="relative z-10 container-narrow px-4 lg:px-8 pt-24 pb-16">
      <div className="max-w-2xl animate-fade-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
          📍 Hermosillo, Sonora — Plaza Navarrete
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          Cuidamos tu sonrisa con profesionalismo y confianza
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
          Tratamientos dentales de alta calidad para toda la familia. Desde limpiezas preventivas hasta ortodoncia y estética dental.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="whatsapp" size="lg" className="text-base px-8 py-6" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" /> Agendar por WhatsApp
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="px-8 py-6 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
            <a href="#contacto">Contáctanos</a>
          </Button>
        </div>
      </div>

      <a href="#nosotros" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 hover:text-primary-foreground">
        <ArrowDown className="w-6 h-6" />
      </a>
    </div>
  </section>
);

export default HeroSection;
