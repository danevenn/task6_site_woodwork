import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group block focus:outline-none"
      aria-label={`Ver proyecto: ${project.title}`}
    >
      <Card className="overflow-hidden border-border/60 transition hover:border-accent hover:shadow-lg pt-0 gap-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`Imagen del proyecto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={project.blurDataURL}
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <Badge variant="secondary" className="font-normal">
              {project.category}
            </Badge>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-3 flex items-center justify-between gap-3 font-heading text-lg font-semibold leading-snug">
            <span>{project.title}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-accent" />
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {project.shortDescription}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
