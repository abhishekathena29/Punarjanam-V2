import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Compass } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Notice: Shop Discontinued — Punarjanam" },
      {
        name: "description",
        content:
          "Punarjanam has completed its strategic transition from art sales to circular community infrastructure and civic public shade roofs.",
      },
    ],
  }),
  component: DiscontinuedShop,
});

function DiscontinuedShop() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-accent">
          <Compass className="h-8 w-8" />
        </div>
        <span className="font-mono-tag text-xs font-semibold text-accent mt-6 block">
          Strategic Evolution Notice
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Punarjanam No Longer Sells Commercial Products
        </h1>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          As part of our commitment to public good, Punarjanam has completely transitioned from an exploratory art studio to a circular community infrastructure collective.
        </p>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          We have removed all retail product listings, artworks for purchase, and prices. 100% of our reclaimed materials, engineering, and fabrication capacity is now dedicated to community shade roofs, transit structures, and participatory civic commons.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-accent transition-all shadow-md"
          >
            <span>Explore Civic Infrastructure Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-all"
          >
            <span>Read Our Evolution Story</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
