import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Instagram, Facebook, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/526623623930?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", servicio: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, me interesa agendar una cita.

*Nombre:* ${form.nombre}

*Teléfono:* ${form.telefono}

*Email:* ${form.email}

*Servicio de interés:* ${form.servicio}

*Mensaje:* ${form.mensaje}`.trim();
    const url = `https://wa.me/526623623930?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    toast({ title: "¡Mensaje enviado!", description: "Te redirigimos a WhatsApp para completar tu consulta." });
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">Contacto</span>
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Listo para tu <em className="italic font-normal text-primary">cita</em>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Contáctanos por WhatsApp para una respuesta inmediata o completa el formulario.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <Button variant="whatsapp" size="lg" className="w-full text-base py-6 rounded-full mb-10" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> Enviar mensaje por WhatsApp
              </a>
            </Button>

            <div className="space-y-4">
              {[
                { href: "tel:+526623623930", icon: Phone, label: "Teléfono", value: "662 362 3930" },
                { href: "https://www.instagram.com/ibamed_clinicadental", icon: Instagram, label: "Instagram", value: "@ibamed_clinicadental" },
                { href: "https://www.facebook.com/share/1THbtmzCo9/?mibextid=wwXIfr", icon: Facebook, label: "Facebook", value: "Ibamed Clínica" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("tel") ? undefined : "_blank"}
                  rel={item.href.startsWith("tel") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-accent/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-2xl border border-border/50 elegant-shadow">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Nombre *</label>
              <Input required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} placeholder="Tu nombre completo" className="rounded-xl" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Teléfono</label>
                <Input type="tel" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} placeholder="662 000 0000" className="rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" className="rounded-xl" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Servicio de interés</label>
              <select
                value={form.servicio}
                onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
              <label className="text-sm font-medium text-foreground mb-2 block">Mensaje *</label>
              <Textarea required value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} placeholder="¿En qué podemos ayudarte?" rows={4} className="rounded-xl" />
            </div>
            <Button type="submit" size="lg" className="w-full py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Send className="w-4 h-4 mr-2" /> Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
