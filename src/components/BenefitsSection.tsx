import alignersImg from "@/assets/ibamed-aligners.jpeg";

const benefits = [
  { num: "01", title: "Atención cercana y profesional", desc: "Te escuchamos, entendemos tu caso y diseñamos un plan de tratamiento personalizado." },
  { num: "02", title: "Tecnología dental moderna", desc: "Equipos de última generación para diagnósticos precisos y tratamientos más cómodos." },
  { num: "03", title: "Ambiente cómodo y seguro", desc: "Instalaciones limpias, organizadas y pensadas para que te sientas tranquilo." },
  { num: "04", title: "Para toda la familia", desc: "Atendemos a niños, jóvenes y adultos con el mismo nivel de dedicación y calidad." },
  { num: "05", title: "Resultados comprobados", desc: "Calificación de 5.0 en Google con más de 28 reseñas de pacientes satisfechos." },
];

const BenefitsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">¿Por qué elegirnos?</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
            La mejor opción para el cuidado de tu <em className="italic font-normal text-primary">sonrisa</em>
          </h2>
          <div className="space-y-6">
            {benefits.map((b) => (
              <div key={b.num} className="flex gap-5 group">
                <span className="text-2xl font-serif font-bold text-border group-hover:text-primary transition-colors shrink-0">
                  {b.num}
                </span>
                <div className="border-l border-border pl-5 group-hover:border-primary transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/50 rounded-3xl rotate-2" />
          <img
            src={alignersImg}
            alt="Ortodoncia con alineadores en Ibamed Hermosillo"
            className="relative rounded-2xl w-full object-cover aspect-square elegant-shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
