import { ArrowUpRight, ShoppingBag, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectShot } from "@/components/ui/project-shot";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects, type Project } from "@/lib/site";

export function Portfolio() {
  return (
    <section id="portfolio" className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title="Proyek yang Sudah Dikerjakan"
          description="Setiap proyek dibangun dengan fokus pada performa, pengalaman pengguna, dan kesiapan produksi."
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group grid overflow-hidden rounded-2xl lg:grid-cols-[1.1fr_1fr]">
      {/* Mockup proyek */}
      <div className="relative border-b border-border/70 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-6 lg:border-b-0 lg:border-r">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative">
          <div className="mx-auto max-w-sm overflow-hidden rounded-xl border border-border/70 bg-background/80 shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-border/70 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="relative aspect-[16/10]">
              <ProjectShot
                src={project.image}
                alt={`Tampilan ${project.title} — ${project.category}`}
                fallback={
                  <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      <ShoppingBag className="h-7 w-7" />
                    </span>
                    <span className="text-sm font-semibold tracking-wide">
                      {project.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.category}
                    </span>
                    <div className="mt-1 grid w-full grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-14 rounded-lg border border-border/70 bg-card/70"
                        />
                      ))}
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Detail proyek */}
      <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="success">Featured</Badge>
          <span className="text-xs text-muted-foreground">{project.category}</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge tone="muted">{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-3">
          {project.demoUrl && (
            <Button asChild size="sm">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild size="sm" variant="outline">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Lihat Detail
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
