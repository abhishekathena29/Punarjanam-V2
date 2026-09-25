import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { materialCategories } from "@/lib/community-data";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Cpu, Award } from "lucide-react";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Material Library & Diagnostic Protocols — Punarjanam" },
      {
        name: "description",
        content:
          "Discover how Punarjanam sources, tests, and certifies automotive scrap, industrial surplus, and construction waste for community infrastructure.",
      },
      { property: "og:title", content: "Material Library — Punarjanam Circular Infrastructure" },
      {
        property: "og:description",
        content:
          "Automobile scrap, industrial waste, and construction steel repurposed into structural community architecture without downcycling.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Materials,
});

function Materials() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Intro */}
      <section className="border-b border-border/80 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Circular Material Science
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
              The Materials We Work With
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We do not treat scrap as rubbish. We treat it as precision-engineered, high-tensile structural alloy ready to be re-deployed for public good without carbon-heavy re-melting.
            </p>
          </div>
        </div>
      </section>

      {/* Material Lifecycle Flow Diagram */}
      <section className="py-16 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Quality Assurance Chain
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              From Salvage Yard to Public Commons
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Every discarded component follows a four-step diagnostic protocol before inclusion in civic structures.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-background p-6">
              <span className="font-mono text-xs font-bold text-accent">Stage 01</span>
              <h3 className="mt-2 font-bold text-foreground">Sourcing & Decontamination</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Collection from certified ELV recyclers in Mayapuri. Neutralization of all oils, paints, and hazardous substances.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <span className="font-mono text-xs font-bold text-accent">Stage 02</span>
              <h3 className="mt-2 font-bold text-foreground">Ultrasonic & Tensile Grading</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                High-frequency thickness testing and coupon pull-tests ensuring structural yield capacity exceeding 310 MPa.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <span className="font-mono text-xs font-bold text-accent">Stage 03</span>
              <h3 className="mt-2 font-bold text-foreground">Standardized Modular Jigs</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Non-destructive machining of universal clamp holes, adapting irregular automotive profiles to modular grids.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <span className="font-mono text-xs font-bold text-accent">Stage 04</span>
              <h3 className="mt-2 font-bold text-foreground">Mineral Weather Shielding</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Non-toxic zinc-rich primer and UV-reflective ceramic coatings for 40+ years of weather resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Material Categories */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="space-y-16">
            {materialCategories.map((mat, index) => (
              <div
                key={mat.id}
                className="rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-xs transition-all hover:border-accent/30"
              >
                <div className="grid gap-10 lg:grid-cols-12 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tag text-xs font-bold text-accent">
                        Category 0{index + 1}
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                        {mat.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                      {mat.name}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mat.summary}
                    </p>

                    <div className="border-t border-border pt-4 text-xs space-y-2">
                      <p>
                        <strong className="text-foreground">Typical Sources: </strong>
                        <span className="text-muted-foreground">{mat.sources}</span>
                      </p>
                      <p>
                        <strong className="text-foreground">Diverted to Date: </strong>
                        <span className="font-mono font-bold text-accent">{mat.divertedTonnage}</span>
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-background p-6">
                      <h4 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-accent" />
                        Engineering Properties
                      </h4>
                      <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                        {mat.characteristics.map((char, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1" />
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-border bg-background p-6">
                      <h4 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                        <Layers className="h-4 w-4 text-accent" />
                        Civic Infrastructure Uses
                      </h4>
                      <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                        {mat.civicApplications.map((app, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
                  <p>
                    <strong>Recovery Protocol: </strong> {mat.recoveryProtocol}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline shrink-0"
                  >
                    <span>Donate this material</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Donor Callout */}
      <section className="py-20 border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Material Partnership
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              Are you an automotive dismantler or demolition firm?
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Instead of selling high-grade structural metal for low-value furnace downcycling, route clean scrap to Punarjanam. We provide tax receipts, carbon-avoidance certificates, and on-site provenance plaques documenting your donation.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-accent"
              >
                <span>Initiate Material Partnership</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
