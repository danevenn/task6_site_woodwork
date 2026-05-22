import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/app/contacto/contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita un presupuesto o visita el taller de Carpintería Los Artesanos en Barcelona. Estudiamos cada encargo con detenimiento.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
      <header className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Hablemos
        </p>
        <h1 className="mt-3 font-heading text-4xl md:text-5xl font-bold">
          Cuéntanos tu proyecto
        </h1>
        <p className="mt-4 text-muted-foreground">
          Respondemos a todas las consultas en un máximo de 48 horas
          laborables. Para encargos a medida solemos pedir una primera visita
          al espacio.
        </p>
      </header>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <ContactForm />

        <aside className="space-y-6 rounded-xl border border-border/60 bg-secondary/30 p-6 h-fit">
          <div>
            <h2 className="font-heading text-lg font-semibold">Taller</h2>
            <ul className="mt-3 space-y-3 text-sm text-foreground/85">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <span>C/ del Ebanista 12 · 08001 Barcelona</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a
                  href="tel:+34933000000"
                  className="hover:text-accent transition-colors"
                >
                  +34 933 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a
                  href="mailto:hola@losartesanos.es"
                  className="hover:text-accent transition-colors"
                >
                  hola@losartesanos.es
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold">Horario</h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Lun – Vie · 9:00 – 18:00
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Sáb · solo con cita previa
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
