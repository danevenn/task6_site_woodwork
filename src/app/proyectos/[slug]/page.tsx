import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Hammer, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Separator } from "@/components/ui/separator";
import { getAllProjects, getProjectBySlug } from "@/data/projects";

type Params = { slug: string };

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return { title: "Proyecto no encontrado" };
  }
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.image, alt: project.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProyectoDetallePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
      <ButtonLink href="/proyectos" variant="ghost" size="sm" className="mb-6">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Volver a la galería
      </ButtonLink>

      <header className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Badge variant="secondary" className="mb-3">
            {project.category}
          </Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            {project.shortDescription}
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-4 text-sm md:gap-6">
          <div>
            <dt className="text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Año
            </dt>
            <dd className="mt-1 font-semibold">{project.year}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground flex items-center gap-1">
              <Hammer className="h-3.5 w-3.5" /> Duración
            </dt>
            <dd className="mt-1 font-semibold">{project.durationWeeks} sem.</dd>
          </div>
          <div>
            <dt className="text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> Cliente
            </dt>
            <dd className="mt-1 font-semibold">{project.client}</dd>
          </div>
        </dl>
      </header>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={`Vista principal del proyecto ${project.title}`}
          fill
          sizes="(min-width: 1024px) 64rem, 100vw"
          placeholder="blur"
          blurDataURL={project.blurDataURL}
          priority
          className="object-cover"
        />
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
        <section>
          <h2 className="font-heading text-2xl font-semibold">
            Sobre el proyecto
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            {project.description}
          </p>
        </section>

        <aside>
          <h2 className="font-heading text-2xl font-semibold">
            Materiales utilizados
          </h2>
          <ul className="mt-4 space-y-2">
            {project.materials.map((m) => (
              <li
                key={m}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {m}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {project.gallery.length > 1 && (
        <>
          <Separator className="my-12" />
          <section>
            <h2 className="font-heading text-2xl font-semibold mb-6">
              Más imágenes
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.slice(1).map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — detalle ${i + 2}`}
                    fill
                    sizes="(min-width: 768px) 32rem, 100vw"
                    placeholder="blur"
                    blurDataURL={project.blurDataURL}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <div className="mt-16 rounded-xl bg-secondary/40 p-8 text-center">
        <h2 className="font-heading text-2xl font-semibold">
          ¿Tienes en mente un proyecto similar?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Hablemos sin compromiso. Estudiamos cada encargo con tiempo.
        </p>
        <ButtonLink href="/contacto" className="mt-5" size="lg">
          Solicitar presupuesto
        </ButtonLink>
      </div>
    </article>
  );
}
