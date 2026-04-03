import img1 from "@/assets/ibamed-smile.jpeg";
import img2 from "@/assets/ibamed-clinic.jpeg";
import img3 from "@/assets/ibamed-kids.jpeg";
import img4 from "@/assets/hero-dental.jpg";

const images = [
  { src: img1, alt: "Sonrisa saludable - Ibamed Clínica Dental Hermosillo" },
  { src: img2, alt: "Procedimiento dental profesional en Hermosillo" },
  { src: img3, alt: "Atención dental para niños en Ibamed" },
  { src: img4, alt: "Consultorio dental moderno en Plaza Navarrete" },
];

const GallerySection = () => (
  <section id="galeria" className="section-padding bg-section-light">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Galería</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Conoce nuestras instalaciones</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Un espacio moderno, limpio y diseñado para tu comodidad en Hermosillo.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl aspect-square group">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
