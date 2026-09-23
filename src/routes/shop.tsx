import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { pieces } from "@/lib/catalogue";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Punarjanam" },
      {
        name: "description",
        content:
          "Furniture, lighting, sculpture and décor made from end-of-life vehicle parts by artists across Delhi, Jaipur and Gurgaon.",
      },
      { property: "og:title", content: "Shop — Punarjanam" },
      {
        property: "og:description",
        content: "Artist-made pieces from reclaimed vehicle parts, each with a provenance record.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <h1 className="text-5xl md:text-6xl">The collection</h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
          Four registers, one material story. Pieces are made in small numbers — when a part is
          gone, the piece is gone.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-10 sm:grid-cols-2">
          {pieces.map((piece) => (
            <article key={piece.id}>
              <div className="overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={piece.image}
                  alt={piece.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h2 className="text-2xl">{piece.name}</h2>
                <span className="text-sm">{piece.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{piece.origin}</p>
              <p className="text-sm text-muted-foreground">Made by {piece.artist}</p>
              <p className="mt-3 text-xs tracking-wide text-muted-foreground">
                {piece.category} · Lot {piece.id}
              </p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
