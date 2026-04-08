import { MapPin, Clock, Navigation } from "lucide-react";

const LocationSection = () => (
  <section id="ubicacion" className="section-padding bg-section-light">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Ubicación</span>
          <span className="w-8 h-px bg-primary" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Encuéntranos <em className="italic font-normal text-primary">fácilmente</em>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Estamos ubicados en una zona estratégica de Hermosillo, con fácil acceso y estacionamiento.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden elegant-shadow-lg h-[400px]">
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

        <div className="space-y-8">
          {[
            {
              icon: MapPin,
              title: "Dirección",
              content: <p className="text-muted-foreground">Blvd. Navarrete 127, Dep. 9<br />Plaza Navarrete, 83249<br />Hermosillo, Sonora, México</p>,
            },
            {
              icon: Clock,
              title: "Horario de atención",
              content: (
                <div className="text-sm text-muted-foreground space-y-1.5">
                  <p><span className="font-medium text-foreground">Lunes a Viernes:</span> 9:30 – 13:00 y 15:00 – 19:00</p>
                  <p><span className="font-medium text-foreground">Sábado:</span> 9:30 – 14:00</p>
                  <p><span className="font-medium text-foreground">Domingo:</span> Cerrado</p>
                </div>
              ),
            },
            {
              icon: Navigation,
              title: "Zonas que atendemos",
              content: <p className="text-sm text-muted-foreground">Atendemos pacientes de todo Hermosillo y zonas aledañas, incluyendo colonias cercanas a Blvd. Navarrete, Centro, y áreas del norte y sur de la ciudad.</p>,
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
                {item.content}
              </div>
            </div>
          ))}

          <a
            href="https://www.google.com/maps/place/Ibamed+Cl%C3%ADnica+Dental"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm mt-2"
          >
            <MapPin className="w-4 h-4" /> Ver en Google Maps →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
