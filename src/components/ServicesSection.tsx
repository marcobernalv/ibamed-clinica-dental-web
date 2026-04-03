import { Sparkles, ShieldCheck, Smile, Stethoscope, CircleDot, Wrench, Baby, Search } from "lucide-react";

const services = [
  { icon: Sparkles, name: "Blanqueamiento dental", desc: "Recupera el brillo natural de tus dientes con técnicas seguras y resultados visibles.", benefit: "Sonrisa más blanca y radiante" },
  { icon: ShieldCheck, name: "Limpieza dental", desc: "Elimina sarro y placa bacteriana para prevenir enfermedades y mantener una boca saludable.", benefit: "Prevención y frescura" },
  { icon: Smile, name: "Odontología estética", desc: "Mejora la apariencia de tu sonrisa con resinas, carillas y tratamientos cosméticos.", benefit: "La sonrisa que siempre quisiste" },
  { icon: Stethoscope, name: "Endodoncia", desc: "Tratamiento de conducto para salvar piezas dentales dañadas, eliminando el dolor.", benefit: "Conserva tus dientes" },
  { icon: CircleDot, name: "Resinas dentales", desc: "Restauraciones estéticas del color de tus dientes para reparar caries o fracturas.", benefit: "Reparación natural" },
  { icon: Wrench, name: "Prótesis dentales", desc: "Devuelve funcionalidad y estética a tu boca con prótesis modernas y cómodas.", benefit: "Funcionalidad completa" },
  { icon: Baby, name: "Odontopediatría", desc: "Cuidado dental especializado para los más pequeños en un ambiente amigable.", benefit: "Atención para toda la familia" },
  { icon: Search, name: "Diagnóstico dental", desc: "Evaluación completa de tu salud bucal con tecnología moderna y precisa.", benefit: "Detección temprana" },
];

const ServicesSection = () => (
  <section id="servicios" className="section-padding bg-section-light">
    <div className="container-narrow">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Nuestros servicios</span>
          <span className="w-8 h-px bg-primary" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Soluciones completas para tu <em className="italic font-normal text-primary">salud bucal</em>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Ofrecemos una amplia gama de tratamientos preventivos, correctivos y estéticos en Hermosillo.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <div
            key={s.name}
            className="bg-card rounded-2xl p-6 elegant-shadow hover:elegant-shadow-lg transition-all duration-300 border border-border/50 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
              <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-2 text-lg">{s.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
            <span className="text-xs font-medium text-gold flex items-center gap-1.5">
              <span className="w-4 h-px bg-gold" /> {s.benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
