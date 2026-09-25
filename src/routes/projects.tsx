import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { projects, type Project } from "@/lib/community-data";
import {
  ArrowRight,
  Filter,
  MapPin,
  Calendar,
  Layers,
  Users,
  CheckCircle2,
  X,
  ThermometerSnowflake,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Civic Projects & Case Studies — Punarjanam" },
      {
        name: "description",
        content:
          "Explore Punarjanam's built community infrastructure, shade pavilions, transit shelters, and material experiments from reclaimed automotive and industrial steel.",
      },
      { property: "og:title", content: "Civic Projects & Case Studies — Punarjanam" },
      {
        property: "og:description",
        content:
          "Case studies in circular architecture: Mayapuri community roof, modular urban shading, and open-source structural research.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const categories = [
  "All",
  "Infrastructure",
  "Community",
  "Material Experiments",
  "Objects",
  "Art Archive",
] as const;

type Category = (typeof categories)[number];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Header */}
      <section className="border-b border-border/80 pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Portfolio & Deployments
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
              Civic Infrastructure & Material Systems
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every project represents real diverted tonnage transformed into permanent, climate-responsive community utility. Explore our built public commons, transit shelters, and material research benchmarks.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-8">
            <span className="mr-2 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Filter className="h-3.5 w-3.5" /> Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat}
                {cat === "Art Archive" && (
                  <span className="ml-1.5 opacity-60 text-[10px]">(Historical)</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-xs transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-background/90 px-3 py-1 text-[11px] font-mono font-medium backdrop-blur-sm shadow-xs">
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white shadow-xs">
                          Flagship
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        {project.location}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs font-medium text-accent">
                      {project.tagline}
                    </p>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Materials tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.materials.slice(0, 2).map((mat, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {mat}
                        </span>
                      ))}
                      {project.materials.length > 2 && (
                        <span className="rounded-md bg-secondary px-2 py-1 text-[11px] text-muted-foreground">
                          +{project.materials.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="border-t border-border px-6 py-4 sm:px-7 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-muted-foreground">Diverted: </span>
                    <span className="font-semibold text-foreground">{project.divertedWeight}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground group-hover:text-accent hover:underline"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-base text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Modal Drawer */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-12">
              <span className="font-mono-tag text-xs font-semibold text-accent">
                {activeProject.category} · Case Study
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                {activeProject.title}
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-accent" />
                  {activeProject.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {activeProject.year}
                </span>
                <span>·</span>
                <span className="font-semibold text-foreground">
                  {activeProject.divertedWeight} diverted
                </span>
              </div>
            </div>

            {/* Modal Image */}
            <div className="mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-secondary">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Narrative & Specs Grid */}
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="font-display text-lg font-bold text-foreground">
                    Project Background & Community Need
                  </h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {activeProject.fullNarrative}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-foreground">
                    Implementation Stages
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {activeProject.processStages.map((stg, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>{stg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl border border-border bg-secondary/50 p-6">
                  <h4 className="font-display text-base font-bold text-foreground">
                    Technical Specifications
                  </h4>
                  <dl className="mt-4 space-y-3 text-xs">
                    {activeProject.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between border-b border-border/80 pb-2">
                        <dt className="text-muted-foreground">{spec.label}</dt>
                        <dd className="font-semibold text-foreground text-right">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6">
                  <h4 className="font-display text-base font-bold text-foreground">
                    Reclaimed Materials Used
                  </h4>
                  <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                    {activeProject.materials.map((mat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeProject.category === "Art Archive" && (
                  <div className="rounded-xl border border-border bg-secondary/40 p-4 text-xs text-muted-foreground">
                    <p className="font-semibold text-foreground">Archival Notice</p>
                    <p className="mt-1">
                      This entry represents historical foundational artwork (2021-2023). Punarjanam no longer produces or sells artworks or products.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="mt-8 border-t border-border pt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-accent"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
