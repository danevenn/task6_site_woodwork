import { getRecentProjects } from "@/data/projects";
import { ProjectCard } from "@/components/site/project-card";

export async function RecentProjects() {
  const projects = await getRecentProjects(3);
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
