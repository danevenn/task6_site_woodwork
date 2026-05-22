import Image from "next/image";
import { Suspense } from "react";
import { ArrowRight, Hammer, Scroll, Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentProjects } from "@/components/site/recent-projects";
import { ProjectCardSkeleton } from "@/components/site/project-card-skeleton";

const SERVICES = [
  {
    icon: Hammer,
    title: "Muebles a medida",
    description:
      "Mesas, librerías, vestidores y cocinas diseñados pieza a pieza para integrarse con la arquitectura de tu hogar.",
  },
  {
    icon: Scroll,
    title: "Restauración",
    description:
      "Recuperamos muebles antiguos respetando técnicas tradicionales: marquetería, goma laca, dorados y herrajes originales.",
  },
  {
    icon: Compass,
    title: "Carpintería estructural",
    description:
      "Estructuras de madera para porches, altillos y rehabilitaciones, dimensionadas según normativa y ejecutadas con ensambles tradicionales.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1567361808960-dec9cb578182?auto=format&fit=crop&w=2000&q=80"
            alt="Taller de carpintería con virutas de madera y herramientas tradicionales"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-36">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Taller artesanal desde 1962
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight md:text-6xl">
            La madera{" "}
            <span className="text-accent">contada con las manos</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            Diseñamos y construimos muebles únicos, restauramos piezas con
            historia y levantamos estructuras de madera que duran generaciones.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/proyectos" size="lg">
              Ver galería de proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contacto" variant="outline" size="lg">
              Solicitar presupuesto
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold md:text-4xl">
            Servicios destacados
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tres especialidades, una misma filosofía: cuidar la madera y el
            tiempo que merece.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.title} className="border-border/60">
              <CardHeader>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <service.icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-4 font-heading text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="font-heading text-3xl font-semibold md:text-4xl">
                Proyectos recientes
              </h2>
              <p className="mt-2 text-muted-foreground">
                Una selección de los últimos encargos salidos del taller.
              </p>
            </div>
            <ButtonLink href="/proyectos" variant="ghost">
              Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </ButtonLink>
          </div>

          <Suspense
            fallback={
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
              </div>
            }
          >
            <RecentProjects />
          </Suspense>
        </div>
      </section>
    </>
  );
}
