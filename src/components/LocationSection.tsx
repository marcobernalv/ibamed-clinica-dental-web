import { MapPin, Clock, Navigation } from "lucide-react";

const LocationSection = () => (
  <section id="ubicacion" className="section-padding bg-section-light">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Ubicación</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Encuéntranos fácilmente</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Estamos ubicados en una zona estratégica de Hermosillo, con fácil acceso y estacionamiento.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.1!2d-110.990507!3d29.0892169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce8441e8bfffff%3A0x0!2sIbamed+Cl%C3%ADnica+Dental!5e0!3m2!1ses-419!2smx!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Ibamed Clínica Dental en Hermosillo"
          />
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
              <p className="text-muted-foreground">Blvd. Navarrete 127, Dep. 9<br />Plaza Navarrete, 83249<br />Hermosillo, Sonora, México</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Horario de atención</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><span className="font-medium text-foreground">Lunes a Viernes:</span> 9:30 – 13:00 y 15:00 – 19:00</p>
                <p><span className="font-medium text-foreground">Sábado:</span> 9:00 – 14:00</p>
                <p><span className="font-medium text-foreground">Domingo:</span> Cerrado</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <Navigation className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Zonas que atendemos</h3>
              <p className="text-sm text-muted-foreground">Atendemos pacientes de todo Hermosillo y zonas aledañas, incluyendo colonias cercanas a Blvd. Navarrete, Centro, y áreas del norte y sur de la ciudad.</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/Ibamed+Cl%C3%ADnica+Dental"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
          >
            <MapPin className="w-4 h-4" /> Ver en Google Maps →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
