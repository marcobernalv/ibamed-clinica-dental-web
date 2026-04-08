import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "María G.", text: "Excelente atención desde la primera consulta. Me explicaron todo el procedimiento con mucha paciencia y profesionalismo. Mis dientes quedaron increíbles después del blanqueamiento.", rating: 5 },
  { name: "Carlos R.", text: "Llevé a mi hijo por primera vez al dentista y la experiencia fue muy buena. El trato con los niños es extraordinario, lo hicieron sentir cómodo y tranquilo en todo momento.", rating: 5 },
  { name: "Ana L.", text: "Las instalaciones están impecables y el equipo es muy profesional. Me realizaron una endodoncia sin dolor y el seguimiento post-tratamiento fue excelente. Totalmente recomendados.", rating: 5 },
  { name: "Roberto M.", text: "Después de años buscando un dentista de confianza en Hermosillo, encontré Ibamed. La calidad del servicio y la atención personalizada hacen la diferencia. Mi sonrisa nunca se vio mejor.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonios" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Testimonios</span>
          <span className="w-8 h-px bg-primary" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Lo que dicen nuestros <em className="italic font-normal text-primary">pacientes</em>
        </h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground mt-3">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}</div>
          <span className="font-semibold text-foreground">5.0</span>
          <span className="text-sm">· 28+ reseñas en Google Maps</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="relative bg-card rounded-2xl p-8 border border-border/50 elegant-shadow hover:elegant-shadow-lg transition-all duration-300">
            <Quote className="w-8 h-8 text-accent mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-6 italic font-light">{t.text}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">Paciente verificado</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
