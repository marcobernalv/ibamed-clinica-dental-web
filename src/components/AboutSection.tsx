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
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/50 rounded-3xl -rotate-3" />
          <img
            src={aboutImg}
            alt="Atención dental para niños en Ibamed Hermosillo"
            className="relative rounded-2xl w-full object-cover aspect-[4/5] elegant-shadow-lg"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-card rounded-2xl p-5 elegant-shadow-lg border border-border">
            <p className="text-3xl font-serif font-bold text-primary">5.0</p>
            <p className="text-sm text-gold font-medium">★★★★★</p>
            <p className="text-xs text-muted-foreground mt-1">28+ reseñas en Google</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Sobre nosotros</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Tu clínica dental de<br />
            <em className="italic font-normal text-primary">confianza</em> en Hermosillo
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            En Ibamed Clínica Dental nos dedicamos a cuidar tu sonrisa con profesionalismo, tecnología y atención personalizada. Nuestro objetivo es ofrecer tratamientos dentales de alta calidad que mejoren tanto la salud como la estética de cada paciente.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Contamos con un equipo comprometido en brindar un servicio cercano, seguro y confiable, atendiendo a niños, jóvenes y adultos en un ambiente cómodo y moderno. Tu sonrisa es nuestra prioridad.
          </p>

          <div className="space-y-5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start group">
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
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
