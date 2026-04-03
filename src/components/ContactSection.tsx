import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/526621359567?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", servicio: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.nombre}. ${form.servicio ? `Me interesa: ${form.servicio}. ` : ""}${form.mensaje}`.trim();
    const url = `https://wa.me/526621359567?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    toast({ title: "¡Mensaje enviado!", description: "Te redirigimos a WhatsApp para completar tu consulta." });
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">¿Listo para tu cita?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Contáctanos por WhatsApp para una respuesta inmediata o completa el formulario y nos pondremos en contacto contigo.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Button variant="whatsapp" size="lg" className="w-full text-base py-6 mb-8" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> Enviar mensaje por WhatsApp
              </a>
            </Button>

            <div className="space-y-4">
              <a href="tel:+526621359567" className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-accent transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Teléfono</p>
                  <p className="text-muted-foreground text-sm">+52 662 135 9567</p>
                </div>
              </a>
              <a href="https://www.instagram.com/ibamed_clinicadental" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Instagram</p>
                  <p className="text-muted-foreground text-sm">@ibamed_clinicadental</p>
                </div>
              </a>
              <a href="https://www.facebook.com/IbamedClinica" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Facebook</p>
                  <p className="text-muted-foreground text-sm">Ibamed Clínica</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nombre *</label>
              <Input required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} placeholder="Tu nombre completo" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Teléfono</label>
                <Input type="tel" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} placeholder="662 000 0000" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Servicio de interés</label>
              <select
                value={form.servicio}
                onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Seleccionar servicio</option>
                <option>Limpieza dental</option>
                <option>Blanqueamiento dental</option>
                <option>Resinas dentales</option>
                <option>Endodoncia</option>
                <option>Prótesis dentales</option>
                <option>Odontología estética</option>
                <option>Revisión y diagnóstico</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Mensaje *</label>
              <Textarea required value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} placeholder="¿En qué podemos ayudarte?" rows={4} />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full py-6">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
