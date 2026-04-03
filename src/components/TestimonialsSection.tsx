import { Star } from "lucide-react";

const testimonials = [
  { name: "María G.", text: "Excelente atención desde la primera consulta. Me explicaron todo el procedimiento con mucha paciencia y profesionalismo. Mis dientes quedaron increíbles después del blanqueamiento.", rating: 5 },
  { name: "Carlos R.", text: "Llevé a mi hijo por primera vez al dentista y la experiencia fue muy buena. El trato con los niños es extraordinario, lo hicieron sentir cómodo y tranquilo en todo momento.", rating: 5 },
  { name: "Ana L.", text: "Las instalaciones están impecables y el equipo es muy profesional. Me realizaron una endodoncia sin dolor y el seguimiento post-tratamiento fue excelente. Totalmente recomendados.", rating: 5 },
  { name: "Roberto M.", text: "Después de años buscando un dentista de confianza en Hermosillo, encontré Ibamed. La calidad del servicio y la atención personalizada hacen la diferencia. Mi sonrisa nunca se vio mejor.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonios" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonios</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Lo que dicen nuestros pacientes</h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}</div>
          <span className="font-semibold text-foreground">5.0</span>
          <span>· 28+ reseñas en Google</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex gap-1 mb-3">
              {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
            <p className="font-semibold text-foreground text-sm">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
