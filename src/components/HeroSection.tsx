import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-dental.jpg";

const WHATSAPP_URL = "https://wa.me/526623623930?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Consultorio dental moderno en Hermosillo" className="w-full h-full object-cover scale-105" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/65 to-foreground/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
    </div>

    <div className="relative z-10 container-narrow px-4 lg:px-8 pt-28 pb-20">
      <div className="max-w-2xl">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-gold" />
            <span className="text-sm font-medium tracking-[0.25em] uppercase gold-accent">
              Hermosillo, Sonora
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.15] mb-6">
            Cuidamos tu sonrisa
            <span className="block mt-1">
              con <em className="italic font-normal gold-accent">profesionalismo</em>
            </span>
            <span className="block mt-1">y confianza</span>
          </h1>
        </div>

        <div className="animate-fade-up-delay">
          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 leading-relaxed max-w-lg font-light">
            Tratamientos dentales de alta calidad para toda la familia. Desde limpiezas preventivas hasta estética dental avanzada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="whatsapp" size="lg" className="text-base px-8 py-6 rounded-full" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> Agendar cita
              </a>
            </Button>
            <Button
              size="lg"
              className="px-8 py-6 rounded-full bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
              asChild
            >
              <a href="#contacto">Conocer más</a>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <a href="#nosotros" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/40 hover:text-primary-foreground transition-colors">
      <ArrowDown className="w-5 h-5" />
    </a>
  </section>
);

export default HeroSection;
