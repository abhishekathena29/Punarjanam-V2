import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { process, impact } from "@/lib/catalogue";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Punarjanam" },
      {
        name: "description",
        content:
          "Punarjanam is a Delhi social enterprise building a new value chain: automotive waste, traceable material, artist livelihood, lasting objects.",
      },
      { property: "og:title", content: "About — Punarjanam" },
      {
        property: "og:description",
        content: "A circular-economy social enterprise working with artists across North India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-16">
        <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-6xl">
          A new value chain for what the road leaves behind.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          Old cars, bikes and scooters reach the end of their usable life. Rather than treat every
          component as scrap, Punarjanam routes selected parts to artists who turn them into
          furniture, lighting, sculpture and small objects for the home.
        </p>
      </section>

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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl md:text-5xl">How a piece is made</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {process.map((item) => (
            <div key={item.step} className="flex gap-6 border-t border-border pt-6">
              <span className="text-sm text-muted-foreground">{item.step}</span>
              <div>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Art × Sustainability",
              body: "Material that would be shredded as low-value scrap is given a second, longer life.",
            },
            {
              title: "Face of the artist",
              body: "Makers are named, photographed and paid fair commissions — never anonymous labour.",
            },
            {
              title: "Zero-waste storytelling",
              body: "Each object carries its history so the impact can be read, not just claimed.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-secondary p-8">
              <h3 className="text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
