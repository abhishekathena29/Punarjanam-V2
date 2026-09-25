import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { whatWeDoPillars, workPhases } from "@/lib/community-data";
import { ArrowRight, CheckCircle2, ShieldAlert, Cpu, Wrench, Users, HardHat } from "lucide-react";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Punarjanam" },
      {
        name: "description",
        content:
          "Explore Punarjanam's 4 core focus areas: Community Infrastructure, Material Reuse, Design & Fabrication, and Participatory Collaboration.",
      },
      { property: "og:title", content: "What We Do — Punarjanam Circular Infrastructure" },
      {
        property: "og:description",
        content:
          "Transforming automotive and industrial waste into dignified community architecture and public shade commons in New Delhi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhatWeDo,
});

function WhatWeDo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Intro */}
      <section className="border-b border-border/80 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Core Capabilities
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
              What We Do
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We operate at the intersection of structural engineering, circular material science, and participatory grassroots urban design. Our four pillars define our complete end-to-end civic practice.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar 1: Community Infrastructure */}
      <section className="py-20 lg:py-24 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono font-semibold text-accent">
                Pillar 01
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Community Infrastructure
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                We design and build climate-resilient public canopies, neighborhood gathering halls, transit shade networks, and micro-learning centers. Our structures address acute thermal, rain, and civic space deficits in dense urban settlements.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Passive Thermal Comfort:</strong> Engineered double-vented roof geometry reducing ambient temperatures beneath by 5°C to 8°C.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>All-Weather Protection:</strong> Heavy-duty monsoon rainfall harvesting integrated directly into canopy drainage channels.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Open Civic Access:</strong> Never behind commercial paywalls—our spaces are created for children, elders, and street vendors.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
                >
                  <span>See built infrastructure projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                <img
                  src="/images/urban_shading_canopy.jpg"
                  alt="Modular urban shading canopy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Material Reuse */}
      <section className="py-20 lg:py-24 border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                <img
                  src="/images/materials_recovery.jpg"
                  alt="Organized material recovery and grading"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono font-semibold text-accent">
                Pillar 02
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Material Reuse as a Means
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Conventional metal recycling relies on melting down scrap in coal-fired blast furnaces, wasting huge amounts of embodied carbon. We treat scrap metal as ready-to-use structural components, preserving their high-tensile cold-formed engineering without re-melting.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>94% Less Embodied Carbon:</strong> Cold-mechanical repurposing bypasses the extreme energy costs of scrap smelting.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>High-Tensile Integrity:</strong> Automotive chassis rails and structural frames offer yield strength superior to cheap standard steel.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Digital Provenance Tracking:</strong> Every structural node is cataloged with source lot, previous vehicle model, and weight diverted.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/materials"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
                >
                  <span>Explore material categories</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Design & Fabrication */}
      <section className="py-20 lg:py-24 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono font-semibold text-accent">
                Pillar 03
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Design & Fabrication
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Scrap steel geometry is irregular. Our engineering team combines computational 3D truss modeling with master fabrication techniques to develop modular joint systems that accommodate variations while guaranteeing building code safety.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Universal Adaptor Nodes:</strong> Custom-designed bolted clamp joints connect irregular vehicle chassis without destructive field welding.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Modular Pre-Fabrication:</strong> Components are pre-assembled in 3m transportable cassettes, erected rapidly on site in days.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Demountable Architecture:</strong> Designed for future disassembly and re-adaptation with 100% bolted connections.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-border bg-background p-8 lg:p-10 shadow-xs">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Fabrication Diagnostics Protocol
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="border-l-2 border-accent pl-4">
                    <p className="font-bold text-sm text-foreground">Step 1: Ultrasonic Thickness Mapping</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Verifying wall thickness and internal rust pockets across all hollow sections.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <p className="font-bold text-sm text-foreground">Step 2: Tensile & Weld Certification</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Destructive coupon testing ensuring yield strength exceeds 310 MPa.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <p className="font-bold text-sm text-foreground">Step 3: Eco-Surface Preparation</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Closed-loop abrasive blasting and non-toxic zinc phosphate priming.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <p className="font-bold text-sm text-foreground">Step 4: Dry Joint Fitting</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Pre-alignment testing in the yard before transportation to the neighborhood site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 4: Community Collaboration */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                <img
                  src="/images/community_collaboration.jpg"
                  alt="Participatory community co-design workshop"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono font-semibold text-accent">
                Pillar 04
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Community Collaboration
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Top-down civic projects frequently fall into disrepair because the residents were never consulted. Punarjanam’s participatory model engages local street vendors, youth, and neighborhood councils from initial thermal mapping to physical assembly.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Neighborhood Co-Design Labs:</strong> Residents sketch space priorities, seating locations, and sun protection angles.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Local Fabrication Training:</strong> We hire and train local neighborhood welders and mechanics, paying fair wages.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Civic Stewardship Handover:</strong> Neighborhood maintenance committees manage the site long after construction concludes.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent"
                >
                  <span>Request an infrastructure workshop</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
