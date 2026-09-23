import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="max-w-xl text-4xl leading-tight md:text-5xl">
          Where machines end, art begins.
        </h2>
        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-primary-foreground/15 pt-8 text-sm md:flex-row">
          <div className="space-y-1 opacity-70">
            <p>Punarjanam · New Delhi</p>
            <p>hello@punarjanam.in</p>
          </div>
          <div className="flex gap-8 opacity-70">
            <Link to="/shop" className="hover:opacity-100">
              Shop
            </Link>
            <Link to="/about" className="hover:opacity-100">
              About
            </Link>
            <Link to="/contact" className="hover:opacity-100">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
