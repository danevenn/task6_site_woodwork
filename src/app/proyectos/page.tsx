import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllProjects } from "@/data/projects";
import { ProjectCard } from "@/components/site/project-card";
import { ProjectCardSkeleton } from "@/components/site/project-card-skeleton";

export const metadata: Metadata = {
  title: "Galería de Proyectos",
  description:
    "Selección de muebles a medida, restauraciones y carpintería estructural realizados por Carpintería Los Artesanos.",
};

export const revalidate = 3600;

async function ProjectsGrid() {
  const projects = await getAllProjects();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={idx < 3}
        />
      ))}
    </div>
  );
}

export default function ProyectosPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Galería
        </p>
        <h1 className="mt-3 font-heading text-4xl md:text-5xl font-bold">
          Proyectos realizados
        </h1>
        <p className="mt-4 text-muted-foreground">
          Una pequeña muestra del trabajo salido del taller en los últimos
          años. Pasa el cursor sobre cualquier proyecto para abrir su ficha
          detallada.
        </p>
      </header>

      <div className="mt-12">
        <Suspense
          fallback={
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <ProjectsGrid />
        </Suspense>
      </div>
    </div>
  );
}
