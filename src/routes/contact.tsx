import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Commission — Punarjanam" },
      {
        name: "description",
        content:
          "Have a vehicle with a story? Commission a one-off artwork or heirloom made from its parts.",
      },
      { property: "og:title", content: "Commission — Punarjanam" },
      {
        property: "og:description",
        content: "Turn a car, bike or scooter you loved into a piece made by an artist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field =
  "mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 pt-16 pb-20 md:grid-cols-2">
        <div>
          <h1 className="text-5xl leading-[1.05] md:text-6xl">Commission a piece</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            If you have a car, bike or scooter with sentimental value, we can turn parts of it into
            an artwork or heirloom. Tell us about the vehicle, the space and the feeling you want.
          </p>
          <div className="mt-10 space-y-2 text-sm text-muted-foreground">
            <p>hello@punarjanam.in</p>
            <p>New Delhi, India</p>
          </div>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="py-12 text-center">
              <h2 className="text-3xl">Thank you</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We'll be in touch within two working days.
              </p>
            </div>
          ) : (
            <>
              <label className="block text-xs tracking-wide text-muted-foreground">
                Name
                <input className={field} required type="text" />
              </label>
              <label className="mt-6 block text-xs tracking-wide text-muted-foreground">
                Email
                <input className={field} required type="email" />
              </label>
              <label className="mt-6 block text-xs tracking-wide text-muted-foreground">
                The vehicle and what you have in mind
                <textarea className={field} rows={5} required />
              </label>
              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send enquiry
              </button>
            </>
          )}
        </form>
      </section>
      <Footer />
    </div>
  );
}
