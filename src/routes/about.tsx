import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { impactStats, teamMembers } from "@/lib/community-data";
import { ArrowRight, CheckCircle2, ShieldCheck, RefreshCw, Compass } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Punarjanam — Our Evolution & Purpose" },
      {
        name: "description",
        content:
          "Discover how Punarjanam evolved from early scrap art explorations into a dedicated circular community infrastructure collective in New Delhi.",
      },
      { property: "og:title", content: "About Punarjanam — Circular Community Infrastructure" },
      {
        property: "og:description",
        content:
          "Our evolution, philosophy, and team: shifting from decorative objects to participatory public shade roofs and civic architecture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Intro */}
      <section className="border-b border-border/80 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              About Punarjanam
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
              A civic movement built on the structural memory of scrap.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We started with a simple question: In a mega-city generating mountains of high-tensile discarded automotive steel, why are community neighborhoods left unshaded, unprotected from monsoon floods, and devoid of dignified public commons?
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Why Punarjanam */}
      <section className="py-20 lg:py-24 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono-tag text-xs font-semibold text-accent">
                The Urban Paradox
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Why Punarjanam Exists
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every year, hundreds of thousands of vehicles in Delhi reach their mandatory end-of-life status. Their cold-formed chassis, stamped body panels, and structural crossmembers represent millions of megajoules of embodied energy and exceptional metallurgical strength.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Normally, these parts are crushed into low-grade scrap cubes and melted in coal-fired blast furnaces, releasing massive emissions only to produce basic steel again. Meanwhile, informal settlements, street markets, and transit corridors across Delhi endure 45°C summer heatwaves without a square meter of shaded relief.
              </p>
              <div className="rounded-2xl border border-border bg-secondary/50 p-6">
                <p className="text-sm font-medium text-foreground">
                  "Punarjanam was established to interrupt this wasteful cycle—treating vehicle scrap not as furnace fodder, but as pre-engineered structural building blocks for public community life."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-border bg-secondary shadow-md">
                <img
                  src="/images/materials_recovery.jpg"
                  alt="Material classification and diagnostics at Punarjanam"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                Punarjanam Yard: Ultrasonic thickness testing and structural grading of salvaged chassis rails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Evolution (Art -> Infrastructure) */}
      <section className="py-20 lg:py-24 border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Our Journey
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Evolution: From Art Studio to Civic Infrastructure
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Punarjanam did not begin with municipal canopies. In 2021, our collective began by creating upcycled sculptural pieces and gallery objects from automotive parts.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-8">
              <span className="font-mono-tag text-xs text-muted-foreground">Phase 1 · 2021-2022</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">Exploratory Sculpture & Form</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We worked with local welders and artisans across Delhi to test the aesthetic and tactile properties of engine blocks, suspension coils, and body sheet metal. We created small-scale studio works and gallery exhibitions.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 relative">
              <div className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-0.5 text-[11px] font-semibold text-white">
                The Pivot
              </div>
              <span className="font-mono-tag text-xs text-accent">Phase 2 · 2023</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">The Realization of Need</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                During heatwaves in Mayapuri and Bawana, our team realized that creating expensive decorative art for private collectors did nothing to solve the life-and-death climate vulnerabilities in the very neighborhoods where the scrap was sourced.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <span className="font-mono-tag text-xs text-accent">Phase 3 · 2024-Present</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">Community Infrastructure Collective</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We officially sunsetted art sales and retail products. We restructured our entire operation into a non-profit civic design collective, directing 100% of our engineering toward public shade roofs, transit structures, and participatory community commons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Philosophy */}
      <section className="py-20 lg:py-24 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Our Principles
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Guiding Philosophy
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every design decision we make is governed by three fundamental commitments:
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">Reuse as a Means, Not the End</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Material circularity is not an artistic novelty. It is a pragmatic, carbon-smart vehicle for delivering dignified, high-quality public infrastructure to communities that need it most.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">Uncompromising Safety & Rigor</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Civic infrastructure cannot afford guesswork. Every reclaimed structural component is tested, graded for yield strength, and certified under standardized building codes.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">Radical Open Commons</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Our structures are open to all. We publish our connection details, joint engineering blueprints, and fabrication manuals open-source so any community worldwide can replicate our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Team & Collaborators */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
            <div>
              <span className="font-mono-tag text-xs font-semibold text-accent">
                The Collective
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Team & Collaborators
              </h2>
              <p className="mt-3 text-base text-muted-foreground max-w-2xl">
                An interdisciplinary team combining civic architects, structural metallurgists, master welders, and grassroots community organizers.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              <span>Join our team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-accent">{member.role}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {member.background}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-3">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Punarjanam Collective · Delhi
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
