import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/projects", label: "Projects" },
  { to: "/materials", label: "Materials" },
  { to: "/impact", label: "Impact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand with Logo & Title */}
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logoImg}
            alt="Punarjanam"
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
            Punarjanam
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const isActive = currentPath === item.to || currentPath.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-wide text-primary-foreground transition-all hover:bg-accent hover:shadow-sm"
          >
            <span>Get Involved</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-border bg-card px-6 py-6 lg:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-lg"
            >
              Home
            </Link>
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-lg"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-accent"
              >
                <span>Get Involved</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
