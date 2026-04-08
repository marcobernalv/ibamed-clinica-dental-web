import { Sparkles, ShieldCheck, Smile, Stethoscope, CircleDot, Wrench, Baby, Search } from "lucide-react";

const services = [
  { icon: Sparkles, name: "Ortodoncia", desc: "Alinea tus dientes con tratamientos modernos y cómodos.", benefit: "Mejora tu sonrisa y confianza" },
  { icon: ShieldCheck, name: "Ortopedia maxilar", desc: "Corrige el desarrollo de los maxilares desde temprana edad.", benefit: "Evita problemas futuros" },
  { icon: Smile, name: "Endodoncia", desc: "Elimina infecciones y salva tu diente sin necesidad de extraerlo.", benefit: "Alivio inmediato del dolor" },
  { icon: Stethoscope, name: "Cirugía maxilofacial", desc: "Solución segura para problemas complejos de boca y mandíbula.", benefit: "Resultados precisos y seguros" },
  { icon: CircleDot, name: "Rehabilitación oral", desc: "Recupera la función y estética de tu sonrisa con tratamientos personalizados.", benefit: "Vuelve a sonreír con seguridad" },
  { icon: Wrench, name: "Odontología general", desc: "Atención completa para mantener tu salud bucal en óptimas condiciones.", benefit: "Prevención y cuidado continuo" },
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

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
