import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { pieces, process, impact } from "@/lib/catalogue";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Punarjanam — Where Machines End, Art Begins" },
      {
        name: "description",
        content:
          "A Delhi social enterprise turning end-of-life vehicle parts into traceable furniture, lighting, sculpture and décor.",
      },
      { property: "og:title", content: "Punarjanam — Where Machines End, Art Begins" },
      {
        property: "og:description",
        content:
          "End-of-life vehicle parts, reborn by artists into furniture, lighting, sculpture and décor — each piece with a provenance record.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const hero = pieces[0]!;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
              Circular design studio · New Delhi
            </span>
            <h1 className="mt-7 text-5xl leading-[1.05] md:text-7xl">
              Where Machines End,
              <br />
              Art Begins.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              We divert parts from end-of-life vehicles into the hands of artists — and then into
              homes, lobbies and public squares. Every piece carries its own record of origin.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/shop"
                className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Browse the collection
              </Link>
              <Link to="/contact" className="text-sm underline underline-offset-4">
                Commission a piece
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-secondary">
            <img
              src={hero.image}
              alt={hero.name}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {impact.map((item) => (
            <div key={item.label} className="px-6 py-10">
              <p className="font-display text-4xl">{item.value}</p>
              <p className="mt-2 text-xs tracking-wide text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collection */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl">The collection</h2>
          <Link to="/shop" className="text-sm text-muted-foreground underline underline-offset-4">
            View all
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pieces.map((piece) => (
            <article key={piece.id} className="group">
              <div className="overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={piece.image}
                  alt={piece.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-xl">{piece.name}</h3>
                <span className="text-sm text-muted-foreground">{piece.price}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{piece.category}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-secondary px-6 py-14 md:px-12">
          <h2 className="text-4xl md:text-5xl">Vehicle to value</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="border-t border-border pt-5">
                <span className="text-xs text-muted-foreground">{item.step}</span>
                <h3 className="mt-2 text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provenance */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl">Every piece knows where it came from</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Instead of a vague recycled claim, each work is documented: the vehicle it came from,
              the lot it was recovered in, the artist who made it and the weight kept out of
              landfill.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-xs tracking-wide text-muted-foreground">Certificate of provenance</p>
            <h3 className="mt-2 text-3xl">Headlamp Pendant</h3>
            <dl className="mt-8 grid grid-cols-2 gap-y-6 text-sm">
              <div>
                <dt className="text-xs text-muted-foreground">Vehicle of origin</dt>
                <dd className="mt-1">Bajaj Chetak, 1998</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Lot</dt>
                <dd className="mt-1">MYP-2025-07</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Artist</dt>
                <dd className="mt-1">Imran Qureshi, Delhi</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Diverted</dt>
                <dd className="mt-1">4.2 kg</dd>
              </div>
            </dl>
            <div className="mt-8 inline-flex rounded-full bg-accent px-4 py-1.5 text-xs text-accent-foreground">
              Verified by Punarjanam
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
