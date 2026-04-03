import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-narrow section-padding pb-8">
      <div className="grid md:grid-cols-3 gap-10 mb-14">
        <div>
          <h3 className="font-serif text-2xl font-bold mb-1">Ibamed</h3>
          <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-5">Clínica Dental</p>
          <p className="text-sm opacity-60 leading-relaxed">
            Cuidamos tu sonrisa con profesionalismo, tecnología y atención personalizada en Hermosillo, Sonora.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-5 text-sm tracking-wide uppercase opacity-70">Servicios</h4>
          <ul className="space-y-2.5 text-sm opacity-60">
            <li>Limpieza dental</li>
            <li>Blanqueamiento dental</li>
            <li>Odontología estética</li>
            <li>Endodoncia</li>
            <li>Prótesis dentales</li>
            <li>Odontopediatría</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-5 text-sm tracking-wide uppercase opacity-70">Contacto</h4>
          <div className="space-y-3 text-sm opacity-60">
            <a href="tel:+526623623930" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4" /> 662 362 3930
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Blvd. Navarrete 127, Plaza Navarrete, Hermosillo, Sonora</span>
            </div>
            <div className="flex gap-4 pt-3">
              <a href="https://www.instagram.com/ibamed_clinicadental" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/IbamedClinica" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs opacity-40 gap-2">
        <span>© {new Date().getFullYear()} Ibamed Clínica Dental</span>
        <span>Todos los derechos reservados</span>
      </div>
    </div>
  </footer>
);

export default Footer;
