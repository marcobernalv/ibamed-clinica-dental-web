import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/526623623930?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-18 px-4 lg:px-8 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-primary tracking-tight">Ibamed</span>
          <span className="hidden sm:inline-block w-px h-6 bg-border mx-1" />
          <span className={`hidden sm:block text-xs font-medium tracking-[0.2em] uppercase ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
            Clínica Dental
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full ${
                scrolled ? "text-muted-foreground hover:text-primary" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+526623623930"
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              scrolled ? "text-muted-foreground hover:text-primary" : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
          >
            <Phone className="w-3.5 h-3.5" /> 662 362 3930
          </a>
          <Button variant="whatsapp" size="sm" className="rounded-full px-5" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border px-6 pb-6 animate-fade-up" style={{ animationDuration: '0.3s' }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border/50 last:border-0">
              {l.label}
            </a>
          ))}
          <div className="mt-4">
            <Button variant="whatsapp" size="sm" className="w-full rounded-full" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
