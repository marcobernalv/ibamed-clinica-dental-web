import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-narrow section-padding pb-8">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="font-serif text-xl font-bold mb-2">Ibamed</h3>
          <p className="text-sm opacity-70">Clínica Dental</p>
          <p className="text-sm opacity-60 mt-4 leading-relaxed">
            Cuidamos tu sonrisa con profesionalismo, tecnología y atención personalizada en Hermosillo, Sonora.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Limpieza dental</li>
            <li>Blanqueamiento dental</li>
            <li>Odontología estética</li>
            <li>Endodoncia</li>
            <li>Prótesis dentales</li>
            <li>Odontopediatría</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <div className="space-y-3 text-sm opacity-70">
            <a href="tel:+526621359567" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4" /> 662 135 9567
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Blvd. Navarrete 127, Plaza Navarrete, Hermosillo, Sonora</span>
            </div>
            <div className="flex gap-3 pt-2">
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
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Ibamed Clínica Dental. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
