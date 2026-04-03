import { CheckCircle } from "lucide-react";
import alignersImg from "@/assets/ibamed-aligners.jpeg";

const benefits = [
  { title: "Atención cercana y profesional", desc: "Te escuchamos, entendemos tu caso y diseñamos un plan de tratamiento personalizado." },
  { title: "Tecnología dental moderna", desc: "Equipos de última generación para diagnósticos precisos y tratamientos más cómodos." },
  { title: "Ambiente cómodo y seguro", desc: "Instalaciones limpias, organizadas y pensadas para que te sientas tranquilo." },
  { title: "Para toda la familia", desc: "Atendemos a niños, jóvenes y adultos con el mismo nivel de dedicación y calidad." },
  { title: "Resultados comprobados", desc: "Calificación de 5.0 en Google con más de 28 reseñas de pacientes satisfechos." },
];

const BenefitsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">¿Por qué elegirnos?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">La mejor opción para el cuidado de tu sonrisa</h2>
          <div className="space-y-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={alignersImg} alt="Ortodoncia con alineadores en Ibamed Hermosillo" className="rounded-2xl shadow-xl w-full object-cover aspect-square" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
