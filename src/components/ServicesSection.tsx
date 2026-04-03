import { Sparkles, ShieldCheck, Smile, Stethoscope, CircleDot, Wrench, Baby, Search } from "lucide-react";

const services = [
  { icon: Sparkles, name: "Blanqueamiento dental", desc: "Recupera el brillo natural de tus dientes con técnicas seguras y resultados visibles desde la primera sesión.", benefit: "Sonrisa más blanca y radiante" },
  { icon: ShieldCheck, name: "Limpieza dental", desc: "Elimina sarro y placa bacteriana para prevenir enfermedades y mantener una boca saludable.", benefit: "Prevención y frescura" },
  { icon: Smile, name: "Odontología estética", desc: "Mejora la apariencia de tu sonrisa con resinas, carillas y tratamientos cosméticos personalizados.", benefit: "La sonrisa que siempre quisiste" },
  { icon: Stethoscope, name: "Endodoncia", desc: "Tratamiento de conducto para salvar piezas dentales dañadas, eliminando el dolor y preservando tu diente natural.", benefit: "Conserva tus dientes" },
  { icon: CircleDot, name: "Resinas dentales", desc: "Restauraciones estéticas del color de tus dientes para reparar caries o fracturas de forma invisible.", benefit: "Reparación natural" },
  { icon: Wrench, name: "Prótesis dentales", desc: "Devuelve funcionalidad y estética a tu boca con prótesis modernas, cómodas y de apariencia natural.", benefit: "Funcionalidad completa" },
  { icon: Baby, name: "Odontopediatría", desc: "Cuidado dental especializado para los más pequeños, en un ambiente amigable que genera confianza.", benefit: "Atención para toda la familia" },
  { icon: Search, name: "Diagnóstico dental", desc: "Evaluación completa de tu salud bucal con tecnología moderna para detectar y prevenir problemas a tiempo.", benefit: "Detección temprana" },
];

const ServicesSection = () => (
  <section id="servicios" className="section-padding bg-section-light">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Nuestros servicios</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Soluciones completas para tu salud bucal</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Ofrecemos una amplia gama de tratamientos preventivos, correctivos y estéticos en Hermosillo.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.name} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border group">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.name}</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{s.desc}</p>
            <span className="text-xs font-medium text-primary">✓ {s.benefit}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
