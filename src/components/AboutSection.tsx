import aboutImg from "@/assets/ibamed-kids.jpeg";
import { Shield, Heart, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "Tecnología moderna", desc: "Equipos de última generación para diagnósticos precisos" },
  { icon: Heart, title: "Atención personalizada", desc: "Cada paciente recibe un plan de tratamiento único" },
  { icon: Award, title: "Profesionalismo", desc: "Equipo capacitado y comprometido con tu salud bucal" },
];

const AboutSection = () => (
  <section id="nosotros" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <img src={aboutImg} alt="Atención dental para niños en Ibamed Hermosillo" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg hidden md:block">
            <p className="text-3xl font-bold font-serif">5.0</p>
            <p className="text-sm opacity-90">★★★★★ en Google</p>
            <p className="text-xs opacity-75 mt-1">28+ reseñas</p>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Sobre nosotros</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Tu clínica dental de confianza en Hermosillo</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            En Ibamed Clínica Dental nos dedicamos a cuidar tu sonrisa con profesionalismo, tecnología y atención personalizada. Nuestro objetivo es ofrecer tratamientos dentales de alta calidad que mejoren tanto la salud como la estética de cada paciente.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Contamos con un equipo comprometido en brindar un servicio cercano, seguro y confiable, atendiendo a niños, jóvenes y adultos en un ambiente cómodo y moderno. Tu sonrisa es nuestra prioridad.
          </p>

          <div className="grid gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
