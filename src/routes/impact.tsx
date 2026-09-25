import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { impactStats, impactStories } from "@/lib/community-data";
import { ArrowRight, Leaf, ShieldCheck, Users, Building2, Flame } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact & Community Stories — Punarjanam" },
      {
        name: "description",
        content:
          "Explore the measurable ecological and social impact of Punarjanam's circular community infrastructure across Delhi NCR.",
      },
      { property: "og:title", content: "Impact & Community Stories — Punarjanam" },
      {
        property: "og:description",
        content:
          "48.5 tonnes diverted, 14 community commons, 18,500 daily users: transparent circular metrics and voices from the ground.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Header */}
      <section className="border-b border-border/80 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Accountability & Evidence
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
              Measuring What Truly Matters
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We do not measure success by gallery sales or private commissions. We measure success in metric tonnes of embodied carbon preserved, temperature reductions under community roofs, and the daily dignity experienced by working-class neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Quantified Impact Numbers Banner */}
      <section className="py-20 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-background p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <p className="font-display text-4xl sm:text-5xl font-extrabold text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-bold text-accent">{item.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive: Environmental & Social Dual Dividend */}
      <section className="py-20 lg:py-24 border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              The Dual Dividend
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              Environmental Conservation × Social Equity
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">
                87.3 Tonnes CO₂e Avoided
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                By taking automotive chassis rails and industrial beams directly from scrapyards and cleaning them mechanically, we eliminate the need to run electric arc furnaces or blast furnaces.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground border-t border-border pt-4">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>1.8 kg of CO₂ emissions prevented per kg of steel repurposed directly.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Zero hazardous toxic runoff compared to traditional acid-wash plating.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>100% mechanical bolted joints, ready for zero-demolition relocation.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">
                18,500+ Daily Residents Shielded
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Delhi's peak summer temperatures routinely cross 45°C, turning public spaces into danger zones for informal workers, school children, and elders.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground border-t border-border pt-4">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>5°C to 8°C measured radiant cooling under our double-vented scrap canopies.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>14 community learning circles and women's self-help groups hosted daily.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>35+ local welders and fabricators upskilled in modular civic fabrication.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stories / Testimonials Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Field Testimonials
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Stories From the Communities
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Read how neighborhood leaders, scrap recyclers, and municipal collaborators experience our circular public infrastructure.
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

      {/* Bottom CTA */}
      <section className="py-20 border-t border-border bg-background text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Help us expand circular infrastructure across NCR
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            We partner with corporate CSR initiatives, philanthropic climate funds, and municipal agencies to co-fund community shade roofs and gathering spaces.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-accent"
            >
              <span>Partner On An Impact Site</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
