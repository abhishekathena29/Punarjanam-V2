import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  projects,
  workPhases,
  impactStats,
  impactStories,
  whatWeDoPillars,
} from "@/lib/community-data";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Layers,
  Users,
  Compass,
  CheckCircle2,
  ThermometerSnowflake,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Punarjanam — Circular Community Infrastructure & Material Reuse" },
      {
        name: "description",
        content:
          "Transforming automotive scrap, industrial waste, and construction steel into climate-resilient public infrastructure and shade pavilions in New Delhi.",
      },
      { property: "og:title", content: "Punarjanam — Circular Community Infrastructure" },
      {
        property: "og:description",
        content:
          "Material reuse as a means, community resilience as the mission. Designing and building participatory civic commons from reclaimed steel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const featuredRoof = projects.find((p) => p.id === "automobile-scrap-roof") || projects[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/80 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-[4rem] lg:leading-[1.08]">
                Shaping Urban Scrap Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-accent">
                  Resilient Community
                </span>{" "}
                Infrastructure.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We redirect end-of-life vehicle chassis, industrial surplus, and construction waste away from energy-intensive furnace downcycling and into climate-sheltered community shade roofs, transit structures, and participatory public spaces.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-md"
                >
                  <span>Explore Infrastructure</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
                >
                  <span>Our Methodology</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4"
                >
                  <span>Request for Your Community</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Micro stats banner */}
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/80 pt-8">
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">48.5 t</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Scrap metal diverted</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">14 Sites</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Active public pavilions</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">18.5k+</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Daily sheltered residents</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={featuredRoof.image}
                    alt={featuredRoof.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Overlay Badge */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tag text-xs text-accent font-semibold">
                      Featured Project
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                      Mayapuri Hub
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    Automobile-Scrap Community Roof
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    42 vehicle chassis frames and 180 stamped car panels engineered into an all-weather 2,400 sq.ft shaded civic canopy.
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <ThermometerSnowflake className="h-4 w-4 text-accent" />
                      -7.2°C midday cooling
                    </span>
                    <Link
                      to="/projects"
                      className="font-medium text-accent hover:underline flex items-center gap-1"
                    >
                      Read Case Study <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="border-b border-border bg-card py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono-tag text-xs font-semibold text-accent">
                Core Philosophy
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Material reuse is a means. Community dignity is the goal.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Delhi produces thousands of tons of automotive and structural scrap monthly, while simultaneously suffering from extreme heat island effects, a lack of shaded public squares, and sparse civic infrastructure in working-class neighborhoods.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Punarjanam bridges this paradox. We do not make decorative art or commercial novelties. We treat high-tensile salvaged vehicle frames as pre-engineered structural steel ready to serve public life.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
                >
                  <span>Read our evolution story</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Structural Safety First</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Every chassis rail and frame undergoes ultrasonic weld inspection, load calculations, and wind stress certifications before assembly.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Participatory Co-Design</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Communities are not passive recipients. Local residents and vendors collaborate on spatial layouts, shade orientation, and maintenance.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Layers className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Embodied Carbon Preservation</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Preserving cold-formed automotive steel without re-melting eliminates 94% of the carbon emissions tied to new structural steel beams.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Compass className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Demountable & Modular</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Our structures utilize bolted dry-joint systems that can be adapted, expanded, or relocated without destructive demolition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Community Project: Deep Dive into the Automobile-Scrap Roof */}
      <section className="py-20 lg:py-28 border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
            <div>
              <span className="font-mono-tag text-xs font-semibold text-accent">
                Case Study Focus
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                The Automobile-Scrap Roof Project
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
            >
              <span>View all projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-center rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-sm">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground">
                <span>Location: Mayapuri, New Delhi</span>
                <span>·</span>
                <span>Built: 2025</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Converting vehicle bones into a living civic roof.
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Mayapuri is home to hundreds of automotive scrap dismantlers, yet lacked basic public shade for street workers, children, and neighborhood assembly. By intercepting 42 truck chassis and over 180 vehicle body panels, we designed a passive-cooling roof structure.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>7.2°C Ambient Cooling:</strong> Dual-layer ventilated roof profile drives natural convective air drafting, shielding against extreme Delhi heat.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>14.8 Tonnes of Diverted Steel:</strong> Saved from high-emission smelting furnaces and permanently certified for public use.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Community Stewardship:</strong> Maintained and activated daily by the Mayapuri Neighborhood Collective for classes and gatherings.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent"
                >
                  <span>Explore Project Architecture</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src="/images/automobile_scrap_roof.jpg"
                  alt="Automobile scrap roof project"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-background p-4 text-center">
                  <p className="font-display text-2xl font-bold text-accent">2,400 sq.ft</p>
                  <p className="text-xs text-muted-foreground mt-1">Sheltered public area</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4 text-center">
                  <p className="font-display text-2xl font-bold text-accent">1,200+</p>
                  <p className="text-xs text-muted-foreground mt-1">Daily community visitors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work: 4 Phase Process */}
      <section id="how-we-work" className="py-20 lg:py-28 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Our Methodology
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              How We Work
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              From the scrap yard to public handover, our four-stage circular process balances rigorous structural engineering with deep participatory neighborhood engagement.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workPhases.map((phase) => (
              <div
                key={phase.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-all hover:border-accent/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-extrabold text-foreground/40 group-hover:text-accent transition-colors">
                      {phase.number}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-border group-hover:bg-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{phase.title}</h3>
                  <p className="mt-1 text-xs font-medium text-accent">{phase.subtitle}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-border/80 pt-4">
                  <ul className="space-y-1.5">
                    {phase.activities.map((act, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Action: What We Do */}
      <section className="py-20 lg:py-28 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14">
            <div>
              <span className="font-mono-tag text-xs font-semibold text-accent">
                Action Pillars
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Four Pillars of Circular Civic Architecture
              </h2>
            </div>
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
            >
              <span>Explore all pillars</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {whatWeDoPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-xs transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono-tag text-xs font-semibold text-accent">
                    Pillar
                  </span>
                  <div className="text-right">
                    <span className="font-display text-2xl font-bold text-foreground">
                      {pillar.metric}
                    </span>
                    <p className="text-[11px] text-muted-foreground">{pillar.metricLabel}</p>
                  </div>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-foreground">{pillar.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{pillar.subtitle}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantified Impact Numbers Banner */}
      <section className="border-b border-border bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/15">
            {impactStats.map((stat, i) => (
              <div key={stat.label} className={i !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""}>
                <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold tracking-wide text-primary-foreground/90">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-primary-foreground/60 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Testimonials / Stories */}
      <section className="py-20 lg:py-28 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Community Voices
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Voices From the Ground
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              True impact is measured not just in tons of steel diverted, but in the dignity and shelter experienced by the people who live under our roofs.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {impactStories.map((story, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-border bg-background p-8 shadow-xs"
              >
                <blockquote className="text-sm leading-relaxed text-foreground">
                  "{story.quote}"
                </blockquote>
                <div className="mt-8 border-t border-border pt-4">
                  <p className="font-bold text-foreground text-sm">{story.author}</p>
                  <p className="text-xs text-muted-foreground">{story.role}</p>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-accent">
                    <span>{story.neighborhood}</span>
                    <span>{story.project}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Call to Action */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/50 p-8 sm:p-14 lg:p-20 shadow-sm text-center">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Join the Circular Movement
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-foreground max-w-3xl mx-auto">
              Ready to bring climate-resilient infrastructure to your community?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you are a community organizer seeking a shade roof, a vehicle scrap recycler with materials to donate, or a civic partner looking to collaborate, there is a place for you.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-accent transition-all shadow-md"
              >
                <span>Partner With Punarjanam</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/materials"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground hover:bg-secondary transition-all"
              >
                <span>Explore Materials Library</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
